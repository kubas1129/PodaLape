package shelter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shelter.model.Customer;
import shelter.model.CustomerRepository;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping("/customer")
    public List<Customer> index(){
        return customerRepository.findAll();
    }

    @GetMapping("/customer/{id}")
    public Customer show(@PathVariable String id) {
        int customerId = Integer.parseInt(id);
        return customerRepository.findOne(customerId);
    }


    /*@PostMapping("customer/search")
    public List<Customer> search(@RequestBody Map<String,String> body){
        String searchTerm = body.get("text");
        return customerRepository.findByTitleContainingOrContentContaining(searchTerm,searchTerm);

    }*/

    @PostMapping("/customer")
    public Customer create(@RequestBody Customer customer){
        return customerRepository.save(customer);
    }

    @PutMapping("/customer/{id}")
    public Customer update(@PathVariable String id, @RequestBody Customer customer){
        int customerId = Integer.parseInt(id);
        Customer updatedCustomer = customerRepository.findOne(customerId);
        updatedCustomer.setFirst_name(customer.getFirst_name());
        updatedCustomer.setLast_name(customer.getLast_name());
        return customerRepository.save(updatedCustomer);
    }

    @DeleteMapping("customer/{id}")
    public boolean delete(@PathVariable String id) {
        int customerId = Integer.parseInt(id);
        customerRepository.delete(customerId);
        return true;
    }

}