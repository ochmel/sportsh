package cz.cvut.sh.sport.service;

import cz.cvut.sh.sport.data.File;
import cz.cvut.sh.sport.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@Service
public class StorageServiceImpl implements StorageService {

    private final FileRepository fileRepository;

    @Autowired
    public StorageServiceImpl(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    @Override
    public String store(MultipartFile file) throws IOException {
        File dbFile = new File();
        dbFile.setName(file.getName());
        dbFile.setContentType(file.getContentType());
        dbFile.setContent(Base64.getEncoder().encodeToString(file.getBytes()));
        dbFile.setLength(file.getSize());
        dbFile = fileRepository.save(dbFile);
        return dbFile.getId();
    }

    @Override
    public File load(String filename) {
        return fileRepository.findById(filename)
                .orElseThrow(() -> new IllegalArgumentException("File with id " + filename + " not found."));
    }

    @Override
    public void delete(String filename) {
        fileRepository.deleteById(filename);
    }
}
