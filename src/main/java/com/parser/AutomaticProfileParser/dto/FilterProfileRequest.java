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
public class FilterProfileRequest {

  private List<String> primarySkills;
  private List<String>  secondarySkills;
  private int professionalExperience;
  private Education education;
  private  AlgoStats algoStats;

}
