package main.DB.Service.ServiceInterfaces;

import main.DB.model.Images;
import org.springframework.lang.Nullable;

import java.util.List;

public interface ImagesService {

    @Nullable
    List<Images> getAllImages(String category);
}
