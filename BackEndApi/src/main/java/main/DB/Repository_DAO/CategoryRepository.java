package main.DB.Repository_DAO;

import main.DB.model.Category;
import main.DB.model.UsersCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    @Query("SELECT u FROM Category u where u.name = ?1")
    Category findByName(String name);

    @Query("SELECT u FROM UsersCategory u where u.idUsers =?1 AND u.idCategory =?2")
    UsersCategory findByidUsersidCategory(int idUsers, int idCategory);

    //ziskaj vsetky kategorie ktory dany user ma odomknute
    @Query("select new Category(c.id, c.name) FROM Category c INNER JOIN UsersCategory uc ON c.id = uc.idCategory where uc.idUsers =?1")
    List<Category> findAllUsersCategories(int idUsers);

}
