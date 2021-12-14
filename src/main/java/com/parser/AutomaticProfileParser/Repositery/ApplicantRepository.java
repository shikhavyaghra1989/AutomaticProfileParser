package com.parser.AutomaticProfileParser.Repositery;

import com.parser.AutomaticProfileParser.Entity.Applicant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicantRepository extends JpaRepository<Applicant, Integer> {
}
