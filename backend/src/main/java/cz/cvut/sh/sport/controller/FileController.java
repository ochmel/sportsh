package cz.cvut.sh.sport.controller;

import com.mongodb.MongoException;
import cz.cvut.sh.sport.data.File;
import cz.cvut.sh.sport.service.StorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.Base64;

@RestController
public class FileController {

    private final StorageService storageService;

    @Autowired
    public FileController(StorageService storageService) {
        this.storageService = storageService;
    }

    @RequestMapping(value = "/files/{id}", method = RequestMethod.GET)
    public ResponseEntity<InputStreamResource> getFile(@PathVariable("id") String id) {
        try {
            File file = storageService.load(id);
            InputStreamResource resource = new InputStreamResource(new ByteArrayInputStream(Base64.getDecoder().decode(file.getContent())));
            return ResponseEntity.ok()
                    .contentLength(file.getLength())
                    .contentType(MediaType.valueOf(file.getContentType()))
                    .body(resource);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/files/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<InputStreamResource> deleteFile(@PathVariable("id") String id) {
        storageService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/files", method = RequestMethod.POST)
    public ResponseEntity<String> handleFileUpload(@RequestParam("file") MultipartFile file) {
        try {
            return ResponseEntity.ok(storageService.store(file));
        } catch (IOException | MongoException e) {
            return ResponseEntity.badRequest().build();
        }
    }

}
