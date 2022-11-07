package main.DB.Service.ServiceImpl;

import main.DB.Repository_DAO.Interfaces.ImagesRepository;
import main.DB.Service.ServiceInterfaces.ImagesService;
import main.DB.model.Images;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class ImagesServiceImpl implements ImagesService {

    @Autowired
    private ImagesRepository imagesRepository;

    @Override
    public List<Images> getAllImages(String category) {
        Iterable<Images> imagesAll = imagesRepository.findAll();
        List<Images> imagesSort = new LinkedList<>(); // mozno bude treba arrayList
        for (Images images : imagesAll) {
            if (images.getCategory().equals(category)) {
                imagesSort.add(images);
            }
        }
        return imagesSort;
    }
}
