package cz.cvut.sh.sport.controller;

import cz.cvut.sh.sport.data.Content;
import cz.cvut.sh.sport.repository.ContentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ContentController {

    private final ContentRepository contentRepository;

    @Autowired
    public ContentController(ContentRepository contentRepository) {
        this.contentRepository = contentRepository;
    }

    @RequestMapping(value = "/content/{id}", method = RequestMethod.GET)
    public ResponseEntity<Content> getContent(@PathVariable("id") String id) {
        return ResponseEntity.of(contentRepository.findById(id));
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/content", method = RequestMethod.PUT)
    public ResponseEntity<Content> putContent(@RequestBody Content body) {
        return ResponseEntity.of(Optional.of(contentRepository.save(body)));
    }
}
