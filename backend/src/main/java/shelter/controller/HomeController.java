package shelter.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    @CrossOrigin(origins = "*") //TODO change me!
    public String test() {
        return "Works";
    }
}
