package com.parser.AutomaticProfileParser.controllar;

import com.parser.AutomaticProfileParser.Entity.Applicant;
import com.parser.AutomaticProfileParser.Service.ApplicantProfileService;
import com.parser.AutomaticProfileParser.dto.ApplicantProfileRequest;
import com.parser.AutomaticProfileParser.dto.FilterProfileRequest;
import com.parser.AutomaticProfileParser.dto.FilterProfileResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value = {"/api"})
public class ApplicantProfileController {

    @Autowired
    private ApplicantProfileService service;

    @PostMapping(value="/SaveProfile", produces="application/json", consumes="application/json")
    public Applicant saveApplicantProfile(@RequestBody ApplicantProfileRequest applicantProfileRequest) {
        return service.saveApplicantProfile(applicantProfileRequest);
    }

    @PostMapping(value="/FilterProfile", produces="application/json", consumes="application/json")
    public List<FilterProfileResponse> filterApplicantProfile(@RequestBody FilterProfileRequest filterProfileRequest) {
        System.out.println("In here");
        List<FilterProfileResponse> filteredProfiles =  service.filterApplicantProfile(filterProfileRequest);

        return service.rankProfiles(filteredProfiles, filterProfileRequest.getAlgoStats());

    }
}
