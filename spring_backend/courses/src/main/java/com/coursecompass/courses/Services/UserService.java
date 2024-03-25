package com.coursecompass.courses.Services;

import java.util.List;

import com.coursecompass.courses.model.User;

public interface UserService {
    User addUser(User newUser);

    List<User> getAllUsers();

    User getUserById(Long userId);

    User updateUser(Long userId, User updatedUser);

    boolean deleteUser(Long userId);
}
