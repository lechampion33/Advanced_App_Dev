package com.coursecompass.courses.Services.implication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coursecompass.courses.Repository.FeedbackRepo;
import com.coursecompass.courses.Services.FeedbackService;
import com.coursecompass.courses.model.Feedback;

@Service
public class FeedbackImpl implements FeedbackService{
    @Autowired
    private FeedbackRepo fbr;
    @Override
    public List<Feedback> getFeedbacks() {
       return fbr.findAll();
    }

    @Override
    public Feedback postFeedback(Feedback fb) {
       return fbr.save(fb);
    }

    @Override
    public Feedback putFeedback(Feedback fb) {
       return fbr.save(fb);
    }

    @Override
    public void deleteFeedback(long fid) {
       fbr.deleteById(fid);
    }


}
