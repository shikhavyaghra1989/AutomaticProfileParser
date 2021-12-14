package com.parser.AutomaticProfileParser.dao;

import com.parser.AutomaticProfileParser.dto.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Component;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.*;
import java.util.stream.Collectors;

@Component
public class FilterApplicatntDAO {

    @Autowired
    private JdbcTemplate template;

    public String getQuery(FilterProfileRequest filterProfileRequest){
        StringBuilder query = new StringBuilder();
        StringBuilder educationalQualCheck =  new StringBuilder();
        if(filterProfileRequest.getEducation().getDegree().equalsIgnoreCase("Bachelors")) {
            educationalQualCheck.append("edu.degree = ");
            educationalQualCheck.append("'Bachelors' || ");
            educationalQualCheck.append("edu.degree = ");
            educationalQualCheck.append("'Masters' ||");
            educationalQualCheck.append("edu.degree = ");
            educationalQualCheck.append("'PHD' ");
        } else if(filterProfileRequest.getEducation().getDegree().equalsIgnoreCase("Masters")) {
            educationalQualCheck.append("edu.degree = ");
            educationalQualCheck.append("'Masters' ||");
            educationalQualCheck.append("edu.degree = ");
            educationalQualCheck.append("'PHD' ");
        } else {
            educationalQualCheck.append("edu.degree = ");
            educationalQualCheck.append("'PHD' ");
        }

        query.append("Select a.applicant_id, a.name," +
                "a.email_id, a.mobile_number," +
                "ask.rate, ask.skill_name, edu.degree, edu.gpa,profExp.company_name," +
                " TIMESTAMPDIFF(YEAR, profExp.start_date, profExp.end_date)" +
                "from applicant a " +
                "inner JOIN applicant_skills ask " +
                "on ask.applicant_id = a.applicant_id " +
                "inner JOIN educational_qualifications edu " +
                "on edu.applicant_id = a.applicant_id " +
                "inner JOIN professional_experience profExp " +
                "on profExp.applicant_id = a.applicant_id " +
                "where a.applicant_id in(" +
                "Select s_applicant_id from (" +
                "SELECT applicant_id as s_applicant_id, " +
                "GROUP_CONCAT( skill_name ) as skills " +
                "FROM applicant_skills group by applicant_id having ");

        filterProfileRequest.getPrimarySkills().forEach(skill -> {
            query.append("skills like '%"+ skill +"%' and ");
        });
        query.append("1=1");
        query.append(" )  newSkill Inner join ( " +
                "select applicant_id,sum(TIMESTAMPDIFF(YEAR, start_date, end_date)) exp " +
                " from professional_experience " +
                " group by applicant_id  " +
                " having exp >= " + filterProfileRequest.getProfessionalExperience()+
                " ) newExperience ON newSkill.s_applicant_id = newExperience.applicant_id " +
                "inner JOIN educational_qualifications edu " +
                "on newSkill.s_applicant_id = edu.applicant_id  " +
                "where " + educationalQualCheck +"  and edu.gpa >= " +
                +  filterProfileRequest.getEducation().getGpa()+ ")");

        return query.toString();
    }

    public List<FilterProfileResponse> filterApplicantProfile(FilterProfileRequest filterProfileRequest){

            return template.query(getQuery(filterProfileRequest),new ResultSetExtractor<List<FilterProfileResponse>>(){
                @Override
                public List<FilterProfileResponse> extractData(ResultSet rs) throws SQLException,
                        DataAccessException {

                    HashMap<Integer, FilterProfileResponse> map=new HashMap<Integer, FilterProfileResponse>();

                    while(rs.next()){
                        int applicantId  = rs.getInt(1);
                        FilterProfileResponse filterProfileResponse=new FilterProfileResponse();
                        filterProfileResponse.setApplicantId(applicantId);
                        filterProfileResponse.setName(rs.getString(2));
                        filterProfileResponse.setEmailId(rs.getString(3));
                        filterProfileResponse.setMobileNumber(rs.getLong(4));
                        if(map.containsKey(applicantId)){
                            Set<Education> education  = new HashSet<Education>(map.get(applicantId).getEducation());
                            Education educationNew = new Education(rs.getString("degree"), rs.getFloat("gpa"));
                            education.add(educationNew);
                            filterProfileResponse.setEducation(new ArrayList<Education>(education));

                            Set<Experience> experience  = new HashSet<Experience>(map.get(applicantId).getExperience());
                            Experience experienceNew = new Experience(rs.getString("company_name"), rs.getInt(10));
                            experience.add(experienceNew);
                            filterProfileResponse.setExperience(new ArrayList<Experience>(experience));

                            Set<Skills> skills  = new HashSet<Skills>(map.get(applicantId).getSkills());
                            Skills skillsNew = new Skills(rs.getString("skill_name"),rs.getInt("rate"));
                            skills.add(skillsNew);
                            filterProfileResponse.setSkills(new ArrayList<Skills>(skills));
                        } else {
                            Set<Education> education  = new HashSet<Education>();
                            Education educationNew = new Education(rs.getString("degree"), rs.getFloat("gpa"));
                            education.add(educationNew);
                            filterProfileResponse.setEducation(new ArrayList<Education>(education));

                            Set<Experience> experience  = new HashSet<Experience>();
                            Experience experienceNew = new Experience(rs.getString("company_name"), rs.getInt(10));
                            experience.add(experienceNew);
                            filterProfileResponse.setExperience(new ArrayList<Experience>(experience));

                            Set<Skills> skills  = new HashSet<Skills>();
                            Skills skillsNew = new Skills(rs.getString("skill_name"),rs.getInt("rate"));
                            skills.add(skillsNew);
                            filterProfileResponse.setSkills(new ArrayList<Skills>(skills));
                        }
                        map.put(applicantId, filterProfileResponse);

                    }
                    return new ArrayList<FilterProfileResponse>(map.values());
                }
            });
        }
}
