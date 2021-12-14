package com.parser.AutomaticProfileParser.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
@Entity
public class Applicant {

    @Id
    @GeneratedValue
    private  int applicantId;
    private  String name;
    private  Long mobileNumber;
    private  String emailId;

    @OneToMany(targetEntity = Certification.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "applicantId", referencedColumnName = "applicantId")
    private List<Certification> certifications;

    @OneToMany(targetEntity = EducationalQualifications.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "applicantId", referencedColumnName = "applicantId")
    private List<EducationalQualifications> educationalQualifications;

    @OneToMany(targetEntity = ProfessionalExperience.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "applicantId", referencedColumnName = "applicantId")
    private List<ProfessionalExperience> professionalExperiences;

    @OneToMany(targetEntity = ApplicantSkills.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "applicantId", referencedColumnName = "applicantId")
    private List<ApplicantSkills> applicantSkills;
}
