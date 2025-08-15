package com.brAppLogin.appLogin.repository;

import org.springframework.data.repository.CrudRepository;

import com.brAppLogin.appLogin.models.User;

public interface UserRepository extends CrudRepository<User, Long> {

    User findByEmail(String email);

}
