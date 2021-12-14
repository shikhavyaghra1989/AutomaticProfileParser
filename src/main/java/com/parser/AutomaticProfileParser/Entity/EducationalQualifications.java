package com.parser.AutomaticProfileParser.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
@Entity
public class EducationalQualifications {
    @Id
    @GeneratedValue
    private Long educationalQualificationId;
    private Date endDate ;
    private float gpa;
    private String school;
    private String degree;
    private String fieldOfStudy;
    private Date startDate;

    @OneToMany(targetEntity = CoursesTaken.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "educationalQualificationId", referencedColumnName = "educationalQualificationId")
    private List<CoursesTaken> coursesTaken;
}
