package main.DB.Repository_DAO;

import main.DB.model.Images;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagesRepository extends CrudRepository<Images, Integer> {
}
