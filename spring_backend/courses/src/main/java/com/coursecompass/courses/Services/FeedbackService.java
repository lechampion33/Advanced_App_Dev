package com.coursecompass.courses.Services;

import java.util.List;

import com.coursecompass.courses.model.Feedback;

public interface FeedbackService {
    public List<Feedback> getFeedbacks();
    public Feedback postFeedback(Feedback cso);
    public Feedback putFeedback(Feedback cso);
    public void deleteFeedback(long cid);
}
