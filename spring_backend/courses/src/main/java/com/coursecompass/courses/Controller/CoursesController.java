package com.coursecompass.courses.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.coursecompass.courses.Services.implication.CoursesServiceImpl;
import com.coursecompass.courses.model.Courses;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/api/courses")
public class CoursesController {
  @Autowired
  private CoursesServiceImpl csl;

  @GetMapping("/getcourses")
  public List<Courses> getCourses() {
      return csl.getCourses();
  }
  @PostMapping("/postcourses")
  public Courses postCourses(@RequestBody Courses cs) {      
      return csl.postCourses(cs);
  }
  @PutMapping("/putcourses")
  public Courses putCourses(@RequestParam long cid, @RequestBody Courses cs) {
      cs.setCid(cid);
      return csl.putCourses(cs);
  }
  @DeleteMapping("/deletecourses")
  public String deleteCourses(@RequestParam long cid){
    csl.deleteCourses(cid);
    return "Deleted Succesfully";
  }
  
}
