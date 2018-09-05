package com.example.projectsem4.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class TestController {

    @GetMapping("/")
    public String index() {
        return "index";
    }


}
