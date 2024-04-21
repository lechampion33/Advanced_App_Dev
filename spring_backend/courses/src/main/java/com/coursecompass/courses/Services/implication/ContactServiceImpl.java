package com.coursecompass.courses.Services.implication;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coursecompass.courses.Repository.ContactRepo;
import com.coursecompass.courses.Services.ContactService;
import com.coursecompass.courses.model.Contact;

@Service
public class ContactServiceImpl implements ContactService {
    @Autowired
    private ContactRepo cr;
    
    @Override
    public List<Contact> getContact() {
       return cr.findAll();
    }

    @Override
    public Contact postContact(Contact cso) {
       return cr.save(cso);
    }

    @Override
    public Contact putContact(Contact cso) {
       return cr.save(cso);
    }

    @Override
    public void deleteContact(long cid) {
       cr.deleteById(cid);
    }

}
