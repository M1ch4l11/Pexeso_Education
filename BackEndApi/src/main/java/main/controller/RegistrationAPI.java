package main.controller;


import main.DB.Service.ServiceImpl.UserScoreServiceImpl;
import main.DB.model.LoginAutentification;
import main.DB.model.Users;
import net.bytebuddy.utility.nullability.AlwaysNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/registration")
public class RegistrationAPI {

    @Autowired
    UserScoreServiceImpl userService;

    @PostMapping("/newUser")
    public ResponseEntity addScoreToUser(@RequestBody LoginAutentification newUserLogin) {
        Users newUser = new Users();
        newUser.setUsername(newUserLogin.getUsername());
        newUser.setPassword(newUserLogin.getPassword());
        newUser.setScore(0);

        if (userService.registerNewUser(newUser)) return new ResponseEntity<>(newUser, HttpStatus.OK);

        return  new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }
}
