package cz.cvut.sh.sport.service;

import cz.cvut.sh.sport.data.File;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface StorageService {

    String store(MultipartFile file) throws IOException;

    File load(String filename);

    void delete(String filename);

}
