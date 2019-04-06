package shelter.model;

import javax.persistence.*;

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
    @ManyToOne
    @JoinColumn(name = "id_shelter")
    private Shelter shelter;


    public Dog() {}

    public Dog(String name, int age, String breed, String gender, String color, double weight, Shelter shelter) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.color = color;
        this.weight = weight;
        this.shelter = shelter;
    }
    public Dog(int id_dog,String name, int age, String breed, String gender, String color, double weight, Shelter shelter) {
        this.id_dog = id_dog;
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.gender = gender;
        this.color = color;
        this.weight = weight;
        this.shelter = shelter;
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

    public Shelter getShelter() {
        return shelter;
    }

    public void setShelter(Shelter shelter) {
        this.shelter = shelter;
    }
}
