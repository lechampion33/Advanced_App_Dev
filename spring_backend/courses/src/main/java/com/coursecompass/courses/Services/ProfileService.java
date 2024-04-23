package com.coursecompass.courses.Services;

import java.util.List;

import com.coursecompass.courses.model.Profile;

public interface ProfileService {
    public List<Profile> getProfiles();
    public Profile postProfiles(Profile pr);
    public Profile putProfiles(Profile pr);
    public void deleteProfile(long pid);
}
