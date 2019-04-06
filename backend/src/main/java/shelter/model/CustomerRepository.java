package shelter.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {

    // custom query to search to blog post by title or content
  //  List<Customer> findByTitleContainingOrContentContaining(String text, String textAgain);

}
