package com.parser.AutomaticProfileParser.Service;

import com.parser.AutomaticProfileParser.Entity.Applicant;
import com.parser.AutomaticProfileParser.Repositery.ApplicantRepository;
import com.parser.AutomaticProfileParser.Repositery.CertificationRepository;
import com.parser.AutomaticProfileParser.dao.FilterApplicatntDAO;
import com.parser.AutomaticProfileParser.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.persistence.Column;
import java.text.DecimalFormat;
import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class ApplicantProfileService {
    @Autowired
    private ApplicantRepository applicantRepository;

    @Autowired
    private CertificationRepository certificationRepository;

    @Autowired
    private FilterApplicatntDAO filterApplicatntDAO;

    double maxScore = 0.00;

    public Applicant saveApplicantProfile(ApplicantProfileRequest applicantProfileRequest){
        return applicantRepository.save(applicantProfileRequest.getApplicant());
    }

    public List<FilterProfileResponse> filterApplicantProfile(FilterProfileRequest filterProfileRequest){
        return filterApplicatntDAO.filterApplicantProfile(filterProfileRequest);
    }

    public List<FilterProfileResponse> rankProfiles(List<FilterProfileResponse> filteredProfiles, AlgoStats algoStats) {
        maxScore = 0.00;
        List<FilterProfileResponse> rankedFilteredProfiles =
                filteredProfiles.stream().map(filterProfileResponse -> {
                    FilterProfileResponse rankedFilterProfile = getRankForProfile(filterProfileResponse, algoStats);
                    return rankedFilterProfile;
                }).collect(Collectors.toList());

        List<FilterProfileResponse> rankedFilteredProfiles2 = rankedFilteredProfiles.stream().map(filterProfileResponse -> {
                    double percentile = (double) ((filterProfileResponse.getPercentile()/maxScore) * 100);
                    filterProfileResponse.setPercentile(Double.parseDouble(new DecimalFormat("##.##").format(percentile)));
                    return filterProfileResponse;
        }).collect(Collectors.toList());

        Collections.sort(rankedFilteredProfiles2, Comparator.comparingDouble(FilterProfileResponse::getPercentile).reversed());
        return rankedFilteredProfiles2;
    }

    private FilterProfileResponse getRankForProfile(
            FilterProfileResponse filterProfileResponse, AlgoStats algoStats) {
        double score = 0;
        score += filterProfileResponse.getExperience().stream().mapToDouble(experience ->
                (float) experience.getYears() * algoStats.getExperience()).sum();


        Optional<Education> phd = filterProfileResponse.getEducation().stream().filter(education ->
                education.getDegree().equalsIgnoreCase("PHD")).findFirst();
        if(phd.isPresent() && phd.get().getGpa() >= 3) {
            score += algoStats.getPhdGPAGrtrTnEqualThree();
        } else {
            score += algoStats.getPhdGPAlessTnThree();
        }



        Optional<Education> masters = filterProfileResponse.getEducation().stream().filter(education ->
                education.getDegree().equalsIgnoreCase("Masters")).findFirst();
        if(masters.isPresent() && masters.get().getGpa() >= 3) {
            score += algoStats.getMastersGPAGrtrTnEqualThree();
        } else {
            score += algoStats.getMastersGPAlessTnThree();
        }


        Optional<Education> bachelors = filterProfileResponse.getEducation().stream().filter(education ->
                education.getDegree().equalsIgnoreCase("Bachelors")).findFirst();

        if(bachelors.isPresent() && bachelors.get().getGpa() >= 3) {
            score += 1;
        } else {
            score += 0.5;
        }


        Double skillsScore = filterProfileResponse.getSkills().stream().mapToDouble(skill -> {
            if(skill.getRating() > 8){
                return algoStats.getPrimarySkillsRateGrtrThan8();
            } else if(skill.getRating() > 5 && skill.getRating() <=8){
                return algoStats.getPrimarySkillsRateBw5and8();
            } else {
                return algoStats.getPrimarySkillsRateLessThan5();
            }
        }).sum();

        filterProfileResponse.getSkills().size();
        skillsScore = (skillsScore * 100) / (2 * filterProfileResponse.getSkills().size());
        skillsScore = (3 * skillsScore)/100;

        score += skillsScore;

        if(score > maxScore) {
            maxScore = score;

        }
        System.out.println(maxScore);

        FilterProfileResponse profileResponse = new FilterProfileResponse(
                filterProfileResponse.getApplicantId(),
                filterProfileResponse.getName(),
                filterProfileResponse.getMobileNumber(),
                filterProfileResponse.getEmailId(),
                filterProfileResponse.getExperience(),
                filterProfileResponse.getEducation(),
                filterProfileResponse.getSkills(),
                score
        );
        return profileResponse;
    }
}
