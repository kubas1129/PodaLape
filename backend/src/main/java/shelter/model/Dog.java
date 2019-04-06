package shelter.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Dog {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_dog;

    private String name;
    private int age;
    private String breed;
    private String gender;
    private String color;
    private double weight;
    private int id_shelter;


    public Dog(){

    }

    public Dog(String name, int age, String breed, String gender, String color, double weight, int id_shelter) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.color = color;
        this.weight = weight;
        this.id_shelter = id_shelter;
    }

    public Dog(int id_dog,String name, int age, String breed, String gender, String color, double weight, int id_shelter) {
        this.id_dog=id_dog;
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.color = color;
        this.weight = weight;
        this.id_shelter = id_shelter;
    }

    public int getId_dog() {
        return id_dog;
    }

    public void setId_dog(int id_dog) {
        this.id_dog = id_dog;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getBreed() {
        return breed;
    }

    public void setBreed(String breed) {
        this.breed = breed;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public int getId_shelter() {
        return id_shelter;
    }

    public void setId_shelter(int id_shelter) {
        this.id_shelter = id_shelter;
    }
}
