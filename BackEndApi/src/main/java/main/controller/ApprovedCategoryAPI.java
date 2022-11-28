package main.controller;

import main.DB.Service.ServiceInterfaces.ApprovedCategoryService;
import main.DB.Service.ServiceInterfaces.AutentLoginService;
import main.DB.model.Category;
import main.DB.model.Users;
import main.DB.model.ResponseUserCategory;
import main.DB.model.UsersCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/category")
public class ApprovedCategoryAPI  {
    @Autowired
    private ApprovedCategoryService service;

    @Autowired
    private AutentLoginService loginService;
    @GetMapping("/AllCategoryByName")
    public ResponseEntity getApprovedCategoryByUsername(@RequestParam String nickName ){
        Iterable<Category> response = service.getAllApprovedCategory(nickName);
        if(response == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity<>(response, HttpStatus.OK);
    }
    @GetMapping("/All")
    public ResponseEntity getAll(){
        Iterable<UsersCategory> response = service.getAll();
        if(response == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity<>(response, HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity createNewApprovedCategory(@RequestParam String nickName, String categoryName){
        UsersCategory response = service.postNew(nickName, categoryName);
        if(response == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity<>(response, HttpStatus.CREATED);
    }
    @GetMapping("/run")
    public ResponseEntity loginUser(@RequestParam Map<String,String> request){
        System.out.println(request.get("username"));
        Users response = loginService.autentificateUser(request.get("username"),request.get("password"));
        if(response == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return  new ResponseEntity<>(response, HttpStatus.OK);
    }
}
