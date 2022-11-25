package main.DB.Repository_DAO;

import main.DB.model.UsersCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApprovedCategoryRepository extends JpaRepository<UsersCategory, Integer> {
}
