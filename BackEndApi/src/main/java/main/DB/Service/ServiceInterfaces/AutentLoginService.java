package main.DB.Service.ServiceInterfaces;

import main.DB.model.Users;

public interface AutentLoginService {
    Users autentificateUser(String name, String password);
}
