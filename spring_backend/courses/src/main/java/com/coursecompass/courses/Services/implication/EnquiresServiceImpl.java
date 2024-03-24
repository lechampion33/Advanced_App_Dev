package com.coursecompass.courses.Services.implication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coursecompass.courses.Repository.EnquiresRepo;
import com.coursecompass.courses.Services.EnquiresService;
import com.coursecompass.courses.model.Enquires;

@Service
public class EnquiresServiceImpl implements EnquiresService {
    @Autowired
    private EnquiresRepo err;
    @Override
    public List<Enquires> getEnquires() {
       return err.findAll();
    }

    @Override
    public Enquires postEnquires(Enquires eq) {
       return err.save(eq);
    }

    @Override
    public Enquires putEnquires(Enquires eq) {
        return err.save(eq);
    }

    @Override
    public void deleteEnquires(long eid) {
       err.deleteById(eid);
    }

}
