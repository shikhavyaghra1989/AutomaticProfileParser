package com.parser.AutomaticProfileParser.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Transient;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ApplicantSkills {
    @Id
    @GeneratedValue
    private int id;
    private float rate;
    private boolean workedProfessionally;
    private String skillName;
    private boolean takenQuiz;
    private float quizRating;
}
