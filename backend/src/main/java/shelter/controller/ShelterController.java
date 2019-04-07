package shelter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shelter.model.Shelter;
import shelter.model.ShelterRepository;

import java.util.List;
import java.util.Map;

@RestController
public class ShelterController {

    @Autowired
    ShelterRepository shelterRepository;

    @GetMapping("/shelter")
    public List<Shelter> index(){
        return shelterRepository.findAll();
    }

    @GetMapping("/shelter/{id}")
    public Shelter show(@PathVariable String id) {
        int shelterId = Integer.parseInt(id);
        return shelterRepository.findOne(shelterId);
    }

//    @PostMapping("/shelter")
//    public Shelter create(@RequestBody Map<String,String> body){
//        String name_shelter = body.get("name_shelter");
//        double latitude = Double.parseDouble(body.get("latitude"));
//        double longitude = Double.parseDouble(body.get("longitude"));
//        String city = body.get("city");
//        return shelterRepository.save(new Shelter(name_shelter,latitude,longitude,city));
//    }
//
//    @PutMapping("/shelter/{id}")
//    public Shelter update(@PathVariable String id, @RequestBody Map<String,String> body){
//        int shelterId = Integer.parseInt(id);
//        Shelter shelter = shelterRepository.findOne(shelterId);
//        shelter.setName_shelter(body.get("name_shelter"));
//        shelter.setLatitude(Double.parseDouble(body.get("latitude")));
//        shelter.setLongitude(Double.parseDouble(body.get("longitude")));
//        shelter.setCity(body.get("city"));
//        return shelterRepository.save(shelter);
//    }
//
//    @DeleteMapping("shelter/{id}")
//    public boolean delete(@PathVariable String id) {
//        int shelterId = Integer.parseInt(id);
//        shelterRepository.delete(shelterId);
//        return true;
//    }
}
