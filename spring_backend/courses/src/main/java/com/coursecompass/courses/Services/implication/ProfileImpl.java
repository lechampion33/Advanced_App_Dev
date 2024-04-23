package com.coursecompass.courses.Services.implication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coursecompass.courses.Repository.ProfileRepo;
import com.coursecompass.courses.Services.ProfileService;
import com.coursecompass.courses.model.Profile;

@Service
public class ProfileImpl implements ProfileService{
    @Autowired
    private ProfileRepo pfs;

    @Override
    public List<Profile> getProfiles() {
        return pfs.findAll();
    }

    @Override
    public Profile postProfiles(Profile pr) {
        return pfs.save(pr);
    }

    @Override
    public Profile putProfiles(Profile pr) {
       return pfs.save(pr);
    }

    @Override
    public void deleteProfile(long pid) {
        pfs.deleteById(pid);
    }


}
