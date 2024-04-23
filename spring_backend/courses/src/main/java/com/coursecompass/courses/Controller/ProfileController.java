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

import com.coursecompass.courses.Services.ProfileService;
import com.coursecompass.courses.model.Profile;

@RestController
@RequestMapping("/api/web")
public class ProfileController {
    @Autowired
    private ProfileService ps;
    @GetMapping("/getprofile")
    public List<Profile> getProfiles() {
        return ps.getProfiles();
    }
    @PostMapping("/postprofile")
    public Profile postProfile(@RequestBody Profile pss) {
       return ps.postProfiles(pss);
    }
    @PutMapping("/putprofile")
    public Profile putProfile(@RequestParam long pid,@RequestBody Profile pss){
      pss.setPid(pid);
      return ps.putProfiles(pss);
    }
    @DeleteMapping("/deleteprofile")
    public void deleteProfile(@RequestParam long eid){
      ps.deleteProfile(eid);
    }


}
