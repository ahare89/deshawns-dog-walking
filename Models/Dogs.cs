namespace DogWalking.Models;

public class Dog {
    public int DogId { get; set; }
    public string Name { get; set; }
    public int CityId { get; set; }
    public int WalkerId { get; set; }
    public City City { get; set; }
    public Walker Walker { get; set; } 
}