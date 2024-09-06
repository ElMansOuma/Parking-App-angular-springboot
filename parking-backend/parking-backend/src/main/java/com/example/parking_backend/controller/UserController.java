package com.example.parking_backend.controller;

import com.example.parking_backend.model.User;
import com.example.parking_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/api")
public class UserController {

  @Autowired
  private UserService userService;

  @GetMapping("/login")
  public ResponseEntity<?> login(@RequestParam String email, @RequestParam String password) {
    User user = userService.findByEmail(email);
    if (user != null && user.getPassword().equals(password)) {
      return ResponseEntity.ok(user);  // Successful login
    }
    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
  }
}
