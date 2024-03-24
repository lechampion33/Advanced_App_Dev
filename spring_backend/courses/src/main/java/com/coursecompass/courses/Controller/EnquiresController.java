package com.coursecompass.courses.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.coursecompass.courses.Services.implication.EnquiresServiceImpl;
import com.coursecompass.courses.model.Enquires;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/web")
public class EnquiresController {
  @Autowired
  private EnquiresServiceImpl esl;
  @GetMapping("/getenquires")
  public List<Enquires> getEnquires() {
      return esl.getEnquires();
  }
  @PostMapping("/postenquires")
  public Enquires postEnquires(@RequestBody Enquires ee) {
     return esl.postEnquires(ee);
  }
  @PutMapping("/putenquires")
  public Enquires putEnquires(@RequestParam long eid,@RequestBody Enquires ee){
    ee.setEid(eid);
    return esl.putEnquires(ee);
  }
  @DeleteMapping("/deleteenquires")
  public void deleteEnquires(@RequestParam long eid){
    esl.deleteEnquires(eid);
  }
  
}
