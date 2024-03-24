package com.coursecompass.courses.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coursecompass.courses.model.Courses;

@Repository
public interface CoursesRepo extends JpaRepository<Courses,Long> {

}
