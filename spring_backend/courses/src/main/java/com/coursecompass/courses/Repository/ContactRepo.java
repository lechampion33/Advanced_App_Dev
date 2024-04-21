package com.coursecompass.courses.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coursecompass.courses.model.Contact;

@Repository
public interface ContactRepo extends JpaRepository<Contact,Long>{

}
