package com.coursecompass.courses.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coursecompass.courses.Services.implication.ContactServiceImpl;
import com.coursecompass.courses.model.Contact;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/api/contact")
public class ContactController {
    @Autowired
    private ContactServiceImpl csi;
    @GetMapping("/getcontact")
  public List<Contact> getContacts() {
      return csi.getContact();
  }
  @PostMapping("/postcontact")
  public Contact postContacts(@RequestBody Contact cs) {      
      return csi.postContact(cs);
  }
  @PutMapping("/putcontact")
  public Contact putContacts(@RequestParam long cid, @RequestBody Contact cso) {
      cso.setCoid(cid);
      return csi.putContact(cso);
  }
  @DeleteMapping("/deletecontact")
  public String deleteContact(@RequestParam long cid){
    csi.deleteContact(cid);
    return "Deleted Succesfully";
  }
    

}
