package com.parser.AutomaticProfileParser.dto;

import com.parser.AutomaticProfileParser.Entity.Applicant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class ApplicantProfileRequest {
    private Applicant applicant;
}
