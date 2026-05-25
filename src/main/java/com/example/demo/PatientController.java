package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class PatientController {

    @Autowired
    PatientRepository repo;

    @PostMapping("/addPatient")
    public String addPatient(@RequestBody Patient p) {

        repo.save(p);

        return "Patient Added Successfully";
    }

    @GetMapping("/patients")
    public List<Patient> getPatients() {

        return repo.findAll();
    }
}