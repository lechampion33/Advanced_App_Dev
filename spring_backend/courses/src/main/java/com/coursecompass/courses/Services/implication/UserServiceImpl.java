package com.coursecompass.courses.Services.implication;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coursecompass.courses.Repository.UserRepo;
import com.coursecompass.courses.Services.UserService;
import com.coursecompass.courses.model.User;

@Service
public class UserServiceImpl implements UserService{ 
  @Autowired
  private final UserRepo ur;
  public UserServiceImpl(UserRepo ur) {
    this.ur = ur;
}

@SuppressWarnings("null")
@Override
public User addUser(User newUser) {
    return ur.save(newUser);
}

@Override
public List<User> getAllUsers() {
    return ur.findAll();
}

@SuppressWarnings("null")
@Override
public User getUserById(Long userId) {
    Optional<User> userOptional = ur.findById(userId);
    return userOptional.orElse(null);
}

@SuppressWarnings("null")
@Override
public User updateUser(Long userId, User updatedUser) {
    Optional<User> userOptional = ur.findById(userId);
    if (userOptional.isPresent()) {
        updatedUser.setUid(userId); 
        return ur.save(updatedUser);
    } else {
        return null; 
    }
}

@SuppressWarnings("null")
@Override
public boolean deleteUser(Long userId) {
    Optional<User> userOptional = ur.findById(userId);
    if (userOptional.isPresent()) {
        ur.deleteById(userId);
        return true;
    } else {
        return false; 
    }
}
}
