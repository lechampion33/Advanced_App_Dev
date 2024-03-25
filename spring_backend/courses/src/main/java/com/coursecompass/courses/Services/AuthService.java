package com.coursecompass.courses.Services;

import com.coursecompass.courses.dto.Request.LoginRequest;
import com.coursecompass.courses.dto.Request.RegisterRequest;
import com.coursecompass.courses.dto.Response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);
    LoginResponse login(LoginRequest loginRequest);
    String createAdmin();
}