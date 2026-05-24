package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class PatientController {

    @Autowired
    PatientRepository repo;

    @PostMapping("/addPatient")
    public String addPatient(@RequestBody Patient p) {

        repo.save(p);

        return "Patient Added Successfully";
    }
}