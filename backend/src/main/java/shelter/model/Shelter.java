package shelter.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import javax.persistence.*;
import java.util.List;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id_shelter")
public class Shelter {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_shelter;

    private String name_shelter;
    private double latitude;
    private double longitude;
    private String city;

    @OneToMany(mappedBy = "shelter", cascade = CascadeType.ALL)
//    @JsonBackReference
    private List<Dog> dogs;


    public Shelter(){

    }

    public Shelter(String name_shelter, double latitude, double longitude, String city, List<Dog> dogs) {
        this.name_shelter = name_shelter;
        this.latitude = latitude;
        this.longitude = longitude;
        this.city = city;
        this.dogs = dogs;
    }

    public Shelter(int id_shelter,String name_shelter, double latitude, double longitude, String city, List<Dog> dogs) {
        this.id_shelter = id_shelter;
        this.name_shelter = name_shelter;
        this.latitude = latitude;
        this.longitude = longitude;
        this.city = city;
        this.dogs = dogs;
    }


    public int getId_shelter() {
        return id_shelter;
    }

    public void setId_shelter(int id_shelter) {
        this.id_shelter = id_shelter;
    }

    public String getName_shelter() {
        return name_shelter;
    }

    public void setName_shelter(String name_shelter) {
        this.name_shelter = name_shelter;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<Dog> getDogs() {
        return dogs;
    }

    public void setDogs(List<Dog> dogs) {
        this.dogs = dogs;
    }
}
