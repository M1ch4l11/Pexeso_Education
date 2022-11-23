package main.DB.Service.ServiceImpl;

import main.DB.Repository_DAO.ApprovedCategoryRepository;
import main.DB.Repository_DAO.CategoryRepository;
import main.DB.Service.ServiceInterfaces.ApprovedCategoryService;
import main.DB.model.Category;
import main.DB.model.ResponseUserCategory;
import main.DB.model.UsersCategory;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ApprovedCategoryImpl implements ApprovedCategoryService {

    private final ApprovedCategoryRepository repository;
    private final CategoryRepository categoryRepository;

    public ApprovedCategoryImpl(ApprovedCategoryRepository repository, CategoryRepository categoryRepository) {
        this.repository = repository;
        this.categoryRepository = categoryRepository;
    }

    @Override
    public List<ResponseUserCategory> getAllApprovedCategory(String categoryName) {
        List<ResponseUserCategory> responseUserCategories = new LinkedList<>();
        List<UsersCategory> usersCategoryAll = repository.findAll();
        List<Category> categoryAll = categoryRepository.findAll();
        usersCategoryAll.stream()
                .filter(usersCategory -> usersCategory.getName().equals(categoryName))
                .forEach(usersCategory -> categoryAll.stream()
                        .forEach(category -> {
                              ResponseUserCategory response = processingData(usersCategory,category);
                               if(response != null) {responseUserCategories.add(response);}}));
        return responseUserCategories;
    }

    @Override
    public List<UsersCategory> getAll() {
        Iterable<UsersCategory> categoryAll = repository.findAll();
        List<UsersCategory> usersCategoryMakeList = (List<UsersCategory>) categoryAll;
        return usersCategoryMakeList;
    }


    // processing
    @Override
    public UsersCategory postNew(String nickName, String categoryName) {
        Category responseCategory = categoryRepository.findByName(categoryName);
        UsersCategory approve = categoryRepository.findByNickNameAndName(nickName, responseCategory.getId());
        if(approve != null) {
          return null;
        }
        UsersCategory usersCategory = new UsersCategory();
        usersCategory.setName(nickName);
        usersCategory.setIdCategory(responseCategory.getId());
        System.out.println(usersCategory);
        return repository.save(usersCategory);
    }

    public ResponseUserCategory processingData(UsersCategory usersCategory, Category category){
            if(usersCategory.getIdCategory() == category.getId()){
                ResponseUserCategory responseCategory = new ResponseUserCategory();
                responseCategory.setId(usersCategory.getId());
                responseCategory.setCategoryName(category.getName());
                responseCategory.setUsername(usersCategory.getName());
                return responseCategory;
            }
            return null;
        }
}
