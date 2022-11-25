package main.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
public class HomeController {
    @Autowired
    HttpServletRequest request;
    @GetMapping("/home")
    public String index(Authentication auth) {   // Authentication predstavuje token aktualne prihlaseneho uzivatela - spring security feature
        return "Greetings from Spring Boot to user " + request.getRemoteUser() + " !" + auth.getName() + "";
    }
}