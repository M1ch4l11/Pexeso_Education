package main.DB.Repository_DAO;

import main.DB.model.Category;
import main.DB.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsersRepository extends JpaRepository<Users, Integer> {

    @Query("SELECT u FROM Users u where u.username = ?1")
    Users findByName(String username);
}
