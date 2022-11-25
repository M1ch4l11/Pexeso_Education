package main.DB.Repository_DAO;

import main.DB.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface loginRepository extends JpaRepository<Users, Integer> {

    @Query("SELECT u FROM Users u where u.username = ?1 AND u.password = ?2")
    Users login(String username, String password);
}
