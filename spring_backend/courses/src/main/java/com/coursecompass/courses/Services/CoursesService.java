package com.coursecompass.courses.Services;

import java.util.List;

import com.coursecompass.courses.model.Courses;

public interface CoursesService {
  public List<Courses> getCourses();
  public Courses postCourses(Courses cs);
  public Courses putCourses(Courses cs);
  public void deleteCourses(long cid);
}
