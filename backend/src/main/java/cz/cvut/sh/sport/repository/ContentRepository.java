package cz.cvut.sh.sport.repository;

import cz.cvut.sh.sport.data.Content;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository extends MongoRepository<Content, String> {
}
