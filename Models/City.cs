namespace DogWalking.Models;

public class City {
    public int CityId { get; set; }
    public string Name { get; set; }
    public List<Walker> Walker { get; set; }
}