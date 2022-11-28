package main.DB.Service.ServiceImpl;

import main.DB.Repository_DAO.loginRepository;
import main.DB.Service.ServiceInterfaces.AutentLoginService;
import main.DB.model.Users;
import org.springframework.stereotype.Service;

@Service
public class AutentLoginServiceImpl implements AutentLoginService {
    private loginRepository Repository;

    public AutentLoginServiceImpl(loginRepository repository) {
        Repository = repository;
    }

    public Users autentificateUser(String name, String password){
        return Repository.login(name, password);
    }
}
