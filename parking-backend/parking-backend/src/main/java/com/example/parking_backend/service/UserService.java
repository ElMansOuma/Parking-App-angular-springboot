package com.example.parking_backend.service;

import com.example.parking_backend.model.User;
import com.example.parking_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

  @Autowired
  private UserRepository userRepository;

  public User registerUser(User user) {
    // Save the user to the database (no password encoding)
    return userRepository.save(user);
  }

  public User findByEmail(String email) {
    return userRepository.findByEmail(email); // Find user by email
  }
}
