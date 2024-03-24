package com.coursecompass.courses.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coursecompass.courses.model.Enquires;
@Repository
public interface EnquiresRepo extends JpaRepository<Enquires,Long> {

}
