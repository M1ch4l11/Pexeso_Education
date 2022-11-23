package main.DB.Service.ServiceInterfaces;

import main.DB.model.ResponseUserCategory;
import main.DB.model.UsersCategory;
import org.springframework.lang.Nullable;

import java.util.List;

public interface ApprovedCategoryService {

    @Nullable
    List<ResponseUserCategory> getAllApprovedCategory(String category);

    @Nullable
    List<UsersCategory> getAll();

    @Nullable
    UsersCategory postNew(String nickName, String categoryName);


}
