package main.controller;

import main.DB.Repository_DAO.UsersRepository;
import main.DB.Service.ServiceImpl.UserScoreServiceImpl;
import main.DB.Service.ServiceInterfaces.AutentLoginService;
import main.DB.model.Users;
import main.DB.model.LoginAutentification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/score")
public class ScoreAPI {

    @Autowired
    UserScoreServiceImpl userScoreService;


    @PostMapping("/add")
     public ResponseEntity addScoreToUser(@RequestParam("username")String username, @RequestParam("score")String scoreText) {
        Integer resultScore;

        try {
            int scoreToAdd = Integer.parseInt(scoreText);
            userScoreService.addScoreToUser(username,scoreToAdd);
            resultScore = userScoreService.getScore(username);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity<>(resultScore, HttpStatus.OK);
    }
}
