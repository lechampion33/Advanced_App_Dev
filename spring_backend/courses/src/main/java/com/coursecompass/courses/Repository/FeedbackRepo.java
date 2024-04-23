package com.coursecompass.courses.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.coursecompass.courses.model.Feedback;
@Repository
public interface FeedbackRepo extends JpaRepository<Feedback,Long>{

}
