package main.DB.Repository_DAO;

import main.DB.model.Category;
import main.DB.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Transactional
 public interface UsersRepository extends JpaRepository<Users, Integer> {

    @Query("SELECT u FROM Users u where u.username = ?1")
    Users findByName(String username);

    @Modifying
    @Query("UPDATE Users SET score = score + ?2 WHERE username = ?1")
    void addScoreToUser(String username, int scoreToAdd);

    @Query("SELECT u.score FROM Users u WHERE u.username = ?1")
    Integer getScoreByName(String username);
}
