package com.coursecompass.courses.Services;

import java.util.List;

import com.coursecompass.courses.model.Enquires;

public interface EnquiresService {
  public List<Enquires> getEnquires();
  public Enquires postEnquires(Enquires eq);
  public Enquires putEnquires(Enquires eq);
  public void deleteEnquires(long eid);
}
