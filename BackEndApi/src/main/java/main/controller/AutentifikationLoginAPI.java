package main.controller;

import main.DB.Service.ServiceInterfaces.AutentLoginService;
import main.DB.model.Users;
import main.DB.model.LoginAutentification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/login")
public class AutentifikationLoginAPI {
    @Autowired
    private AutentLoginService loginService;
    @PostMapping("/run")
    public ResponseEntity loginUser(@RequestBody LoginAutentification login) {
        Users response = loginService.autentificateUser(login.getUsername(), login.getPassword());
        if (response == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
