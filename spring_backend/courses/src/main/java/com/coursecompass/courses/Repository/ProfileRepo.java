package com.coursecompass.courses.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coursecompass.courses.model.Profile;

@Repository
public interface ProfileRepo extends JpaRepository<Profile,Long> {

}
