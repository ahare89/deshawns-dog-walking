namespace DogWalking.Models;

public class Walker {
    public int WalkerId { get; set; }
    public string Name { get; set; }
    public int CityId { get; set; }
    public List<City> Cities { get; set; }
}