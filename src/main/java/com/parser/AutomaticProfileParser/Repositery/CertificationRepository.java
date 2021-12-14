package com.parser.AutomaticProfileParser.Repositery;

import com.parser.AutomaticProfileParser.Entity.Applicant;
import com.parser.AutomaticProfileParser.Entity.Certification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CertificationRepository extends JpaRepository<Certification, Integer> {
}
