package cz.cvut.sh.sport.repository;


import cz.cvut.sh.sport.data.File;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileRepository extends MongoRepository<File, String> {
}
