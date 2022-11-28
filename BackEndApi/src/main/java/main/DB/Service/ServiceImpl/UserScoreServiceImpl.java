package main.DB.Service.ServiceImpl;

import main.DB.Repository_DAO.UsersRepository;
import main.DB.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserScoreServiceImpl {

    @Autowired
    private UsersRepository usersRepo;

    public void addScoreToUser(String username, int scoreToAdd) {
        usersRepo.addScoreToUser(username,scoreToAdd);
    }

    public Integer getScore(String username) {
        return usersRepo.getScoreByName(username);
    }

    public boolean registerNewUser(Users newUser) {
        if (usersRepo.findByName(newUser.getUsername()) == null) {
            //registruj okamzite
            usersRepo.saveAndFlush(newUser);
            return true;
        }
        //vrat null
        return false;
    }
}
