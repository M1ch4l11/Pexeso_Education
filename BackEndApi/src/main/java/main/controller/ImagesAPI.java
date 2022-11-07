package main.controller;

import main.DB.Service.ServiceInterfaces.ImagesService;
import main.DB.model.Images;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/images")
public class ImagesAPI {

    private final ImagesService imagesService;

    public ImagesAPI(ImagesService imagesService) {
        this.imagesService = imagesService;
    }

    @GetMapping("/All")
    public ResponseEntity getAll(@RequestParam String category){
        System.out.println(category);
        Iterable<Images> imagesRes = imagesService.getAllImages(category);
        if(imagesRes == null){
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
       return  new ResponseEntity<>(imagesRes, HttpStatus.OK);
    }
}
