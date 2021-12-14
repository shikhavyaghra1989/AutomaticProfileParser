package com.parser.AutomaticProfileParser.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
@Entity
public class ProfessionalExperience {
    @Id
    @GeneratedValue
    private Long professionalExperienceId;
    private String employmentType;
    private String location;
    private Date startDate ;
    private String domain ;
    private String industry ;
    private Date endDate ;
    private String title ;
    private String companyName;
}
