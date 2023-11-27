package com.c2tc.admin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface AdminRepository extends JpaRepository <Admin,Integer>{




}
