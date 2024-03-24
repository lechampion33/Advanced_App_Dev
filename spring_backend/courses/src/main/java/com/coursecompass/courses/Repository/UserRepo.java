package com.coursecompass.courses.Repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.coursecompass.courses.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}