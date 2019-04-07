package shelter.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import shelter.model.Shelter;
import shelter.model.ShelterRepository;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
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

    @PostMapping("/shelter")
    public Shelter create(@RequestBody Shelter shelter){
        return shelterRepository.save(shelter);
    }

    @PutMapping("/shelter/{id}")
    public Shelter update(@PathVariable String id, @RequestBody Shelter shelter){
        int shelterId = Integer.parseInt(id);
        Shelter shelterUpdated = shelterRepository.findOne(shelterId);
        shelterUpdated.setName_shelter(shelter.getName_shelter());
        shelterUpdated.setLatitude(shelter.getLatitude());
        shelterUpdated.setLongitude(shelter.getLongitude());
        shelterUpdated.setCity(shelter.getCity());
        shelterUpdated.setDogs(shelter.getDogs());
        return shelterRepository.save(shelter);
    }

    @DeleteMapping("shelter/{id}")
    public boolean delete(@PathVariable String id) {
        int shelterId = Integer.parseInt(id);
        shelterRepository.delete(shelterId);
        return true;
    }
}
