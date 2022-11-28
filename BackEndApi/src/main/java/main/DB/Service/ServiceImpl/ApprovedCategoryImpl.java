package main.DB.Service.ServiceImpl;

import main.DB.Repository_DAO.ApprovedCategoryRepository;
import main.DB.Repository_DAO.CategoryRepository;
import main.DB.Repository_DAO.UsersRepository;
import main.DB.Service.ServiceInterfaces.ApprovedCategoryService;
import main.DB.model.Category;
import main.DB.model.Users;
import main.DB.model.UsersCategory;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class ApprovedCategoryImpl implements ApprovedCategoryService {

    private final ApprovedCategoryRepository repository;
    private final CategoryRepository categoryRepository;
    private final UsersRepository usersRepository;


    public ApprovedCategoryImpl(ApprovedCategoryRepository repository, CategoryRepository categoryRepository, UsersRepository usersRepository) {
        this.repository = repository;
        this.categoryRepository = categoryRepository;
        this.usersRepository = usersRepository;
    }

    @Override
    public List<Category> getAllApprovedCategory(String username) {
        //ziskaj vsetky kategorie ktore dany user uz dokoncil
        int id = usersRepository.findByName(username).getId();
        List<Category> usersCategories = new ArrayList<>();
        usersCategories = categoryRepository.findAllUsersCategories(id);
        return usersCategories;
    }

    @Override
    public List<UsersCategory> getAll() {
        Iterable<UsersCategory> categoryAll = repository.findAll();
        List<UsersCategory> usersCategoryMakeList = (List<UsersCategory>) categoryAll;
        return usersCategoryMakeList;
    }

    @Override
    public UsersCategory postNew(String nickName, String categoryName) {
        Category responseCategory = categoryRepository.findByName(categoryName);
        System.out.println(responseCategory.toString());
        Users responseUser = usersRepository.findByName(nickName);
        System.out.println(responseUser.toString());
        if(responseUser  == null)return null;
        UsersCategory approve = categoryRepository.findByidUsersidCategory(responseUser.getId(), responseCategory.getId());
        if(approve != null) {
          return null;
        }
        UsersCategory usersCategory = new UsersCategory();
        usersCategory.setIdUsers(responseUser.getId());
        usersCategory.setIdCategory(responseCategory.getId());
        System.out.println(usersCategory);
        return repository.save(usersCategory);
    }
}
