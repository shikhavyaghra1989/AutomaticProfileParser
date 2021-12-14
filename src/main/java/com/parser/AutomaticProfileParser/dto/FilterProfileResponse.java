package com.parser.AutomaticProfileParser.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class FilterProfileResponse {
    private  int applicantId;
    private  String name;
    private  Long mobileNumber;
    private  String emailId;
    private List<Experience> experience;
    private List<Education> education;
    private List<Skills> skills;
    private double percentile;
}
