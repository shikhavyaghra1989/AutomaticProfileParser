package com.parser.AutomaticProfileParser.dto;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class AlgoStats {
    private int mastersGPAGrtrTnEqualThree;
    private int mastersGPAlessTnThree;
    private int phdGPAGrtrTnEqualThree;
    private int phdGPAlessTnThree;
    private int experience;
    private int primarySkillsRateBw5and8;
    private int primarySkillsRateLessThan5;
    private int primarySkillsRateGrtrThan8;
}
