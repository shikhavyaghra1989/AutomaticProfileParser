package com.parser.AutomaticProfileParser.Repositery;

import com.parser.AutomaticProfileParser.Entity.Certification;
import com.parser.AutomaticProfileParser.Entity.CoursesTaken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoursesTakenRepository extends JpaRepository<CoursesTaken, Integer> {

}
