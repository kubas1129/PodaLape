package shelter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shelter.model.Dog;
import shelter.model.DogRepository;

import java.util.List;
import java.util.Map;


@RestController
public class DogController {


    @Autowired
    DogRepository dogRepository;

    @GetMapping("/dog")
    public List<Dog> index(){
        return dogRepository.findAll();
    }

    @GetMapping("/dog/{id}")
    public Dog show(@PathVariable String id) {
        int dogId = Integer.parseInt(id);
        return dogRepository.findOne(dogId);
    }

    @PostMapping(path="/dog")
    public Dog create(@RequestBody Dog dog){
        return dogRepository.save(dog);
    }

    @PutMapping("/dog/{id}")
    public Dog update(@PathVariable String id, @RequestBody Dog dog){
        int dogId = Integer.parseInt(id);
        Dog updatedDog = dogRepository.findOne(dogId);
        updatedDog.setName(dog.getName());
        updatedDog.setAge(dog.getAge());
        updatedDog.setBreed(dog.getBreed());
        updatedDog.setGender(dog.getGender());
        updatedDog.setColor(dog.getColor());
        updatedDog.setWeight(dog.getWeight());
        updatedDog.setShelter(dog.getShelter());
        return dogRepository.save(dog);
    }

    @DeleteMapping("dog/{id}")
    public boolean delete(@PathVariable String id) {
        int dogId = Integer.parseInt(id);
        dogRepository.delete(dogId);
        return true;
    }



}
