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

    @PostMapping("/dog")
    public Dog create(@RequestBody Map<String,String> body){
        String name = body.get("name");
        int  age  = Integer.parseInt(body.get("age"));
        String breed = body.get("breed");
        String gender = body.get("gender");
        String color  = body.get(("color"));
        double weight= Double.parseDouble(body.get("weight"));
        int id_shelter = Integer.parseInt(body.get("id_shelter"));
        return dogRepository.save(new Dog(name,age,breed,gender,color,weight,id_shelter));
    }

    @PutMapping("/dog/{id}")
    public Dog update(@PathVariable String id, @RequestBody Map<String,String> body){
        int dogId = Integer.parseInt(id);
        Dog dog = dogRepository.findOne(dogId);
        dog.setName(body.get("name"));
        dog.setAge(Integer.parseInt(body.get("age")));
        dog.setBreed(body.get("breed"));
        dog.setGender(body.get("gender"));
        dog.setColor(body.get("color"));
        dog.setWeight(Double.parseDouble(body.get("weight")));
        dog.setId_shelter(Integer.parseInt(body.get("id_shelter")));
        return dogRepository.save(dog);
    }

    @DeleteMapping("dog/{id}")
    public boolean delete(@PathVariable String id) {
        int dogId = Integer.parseInt(id);
        dogRepository.delete(dogId);
        return true;
    }



}
