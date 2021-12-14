package com.parser.AutomaticProfileParser.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
@Entity
public class Certification {
    @Id
    @GeneratedValue
    private int certificationId;
    private String name;
    private String prizesWon ;
}
