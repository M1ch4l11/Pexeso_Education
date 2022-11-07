package main.controller;

import main.DB.Repository_DAO.Implementation.UserDAO;
import main.DB.model.User;

import java.util.ArrayList;
import java.util.List;

public class UsersAPI {

    static UserDAO userDAO = new UserDAO();

    public static void main(String[] args) {


    ArrayList<User> users = new ArrayList<>();

    users.addAll(userDAO.findAll());
        System.out.println("\n\n\n USERS:" );
    users.stream().forEach(System.out::println);
        System.out.println("\n\n\n");
    }

}
