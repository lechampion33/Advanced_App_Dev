package com.coursecompass.courses.Services;

import java.util.List;

import com.coursecompass.courses.model.Contact;

public interface ContactService {
    public List<Contact> getContact();
    public Contact postContact(Contact cso);
    public Contact putContact(Contact cso);
    public void deleteContact(long cid);
}
