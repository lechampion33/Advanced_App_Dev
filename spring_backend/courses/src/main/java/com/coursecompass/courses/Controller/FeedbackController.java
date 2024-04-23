package com.coursecompass.courses.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.coursecompass.courses.Services.implication.FeedbackImpl;
import com.coursecompass.courses.model.Feedback;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {
    @Autowired
    private FeedbackImpl fbl;
    @GetMapping("/getFeedback")
  public List<Feedback> getFeedbacks() {
      return fbl.getFeedbacks();
  }
  @PostMapping("/postFeedback")
  public Feedback postFeedback(@RequestBody Feedback fb) {      
      return fbl.postFeedback(fb);
  }
  @PutMapping("/putFeedback")
  public Feedback putFeedback(@RequestParam long cid, @RequestBody Feedback fb) {
      fb.setFid(cid);
      return fbl.putFeedback(fb);
  }
  @DeleteMapping("/deleteFeedback")
  public String deleteFeedback(@RequestParam long cid){
    fbl.deleteFeedback(cid);
    return "Deleted Succesfully";
  }

}
