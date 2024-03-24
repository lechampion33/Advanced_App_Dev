package com.coursecompass.courses.Services.implication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coursecompass.courses.Repository.CoursesRepo;
import com.coursecompass.courses.Services.CoursesService;
import com.coursecompass.courses.model.Courses;

@Service
public class CoursesServiceImpl implements CoursesService{
    @Autowired
    private CoursesRepo crr;
    @Override
    public List<Courses> getCourses() {
        return crr.findAll();
    }

    @Override
    public Courses postCourses(Courses cs) {
       return crr.save(cs);
    }

    @Override
    public Courses putCourses(Courses cs) {
        return crr.save(cs);
    }

    @Override
    public void deleteCourses(long cid) {
        crr.deleteById(cid);
    }

}
