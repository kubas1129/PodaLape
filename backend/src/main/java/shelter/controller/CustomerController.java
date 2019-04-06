package shelter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shelter.model.Customer;
import shelter.model.CustomerRepository;

import java.util.List;
import java.util.Map;

@RestController
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
    public Customer create(@RequestBody Map<String,String> body){
        String first_name = body.get("first_name");
        String last_name = body.get("last_name");
        System.out.println("FN: " + first_name + ", LN: " + last_name);
        return customerRepository.save(new Customer(first_name,last_name));
    }

    @PutMapping("/customer/{id}")
    public Customer update(@PathVariable String id, @RequestBody Map<String,String> body){
        int customerId = Integer.parseInt(id);
        Customer customer = customerRepository.findOne(customerId);
        customer.setFirst_name(body.get("first_name"));
        customer.setLast_name(body.get("last_name"));
        return customerRepository.save(customer);
    }

    @DeleteMapping("customer/{id}")
    public boolean delete(@PathVariable String id) {
        int customerId = Integer.parseInt(id);
        customerRepository.delete(customerId);
        return true;
    }

}