using System.Runtime.InteropServices;

namespace DogWalking.Models;

public class WalkerCity
{
    public int WalkerCityId { get; set; }
    public int WalkerId { get; set; }
    public int CityId { get; set; }
    public Walker Walker { get; set; }
    public City City { get; set; }
}