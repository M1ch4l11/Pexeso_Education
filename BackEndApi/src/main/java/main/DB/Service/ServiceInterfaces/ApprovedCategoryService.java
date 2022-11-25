package main.DB.Service.ServiceInterfaces;

import main.DB.model.Category;
import main.DB.model.ResponseUserCategory;
import main.DB.model.UsersCategory;
import org.springframework.lang.Nullable;

import java.util.List;

public interface ApprovedCategoryService {

    @Nullable
    List<Category> getAllApprovedCategory(String category);  //uprava

    @Nullable
    List<UsersCategory> getAll();

    @Nullable
    UsersCategory postNew(String nickName, String categoryName);


}
