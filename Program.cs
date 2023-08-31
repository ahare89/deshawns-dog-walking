using System.ComponentModel;
using DogWalking.Models;

var builder = WebApplication.CreateBuilder(args);

List<City> cities = new List<City>
{
    new City { CityId = 1, Name = "Barksville" },
    new City { CityId = 2, Name = "Puptown" },
    new City { CityId = 3, Name = "Doggoland" },
    new City { CityId = 4, Name = "Woofington" },
    new City { CityId = 5, Name = "Hound City" },
    new City { CityId = 6, Name = "Caninewick" },
    new City { CityId = 7, Name = "Fidofield" },
    new City { CityId = 8, Name = "Pawchester" },
    new City { CityId = 9, Name = "Retriever Ridge" },
    new City { CityId = 10, Name = "Tailton" },
    new City { CityId = 11, Name = "Beagleton" },
    new City { CityId = 12, Name = "Labrador Landing" },
    new City { CityId = 13, Name = "Collie Coast" },
    new City { CityId = 14, Name = "Husky Hills" },
    new City { CityId = 15, Name = "Mutt Meadows" },
    new City { CityId = 16, Name = "Poodle Plains" },
    new City { CityId = 17, Name = "Spaniel Springs" },
    new City { CityId = 18, Name = "Terrier Town" },
    new City { CityId = 19, Name = "Dachshund Dale" },
    new City { CityId = 20, Name = "Chihuahua City" }
};

List<Walker> walkers = new List<Walker>
{
    new Walker { WalkerId = 1, Name = "John Smith", CityId = 1 },
    new Walker { WalkerId = 2, Name = "Sarah Doe", CityId = 2 },
    new Walker { WalkerId = 3, Name = "Paul Johnson", CityId = 3 },
    new Walker { WalkerId = 4, Name = "Emily Clark", CityId = 4 },
    new Walker { WalkerId = 5, Name = "Brian Brown", CityId = 5 },
    new Walker { WalkerId = 6, Name = "Jessica White", CityId = 6 },
    new Walker { WalkerId = 7, Name = "Michael Davis", CityId = 7 },
    new Walker { WalkerId = 8, Name = "Rebecca Martin", CityId = 8 },
    new Walker { WalkerId = 9, Name = "Liam Rodriguez", CityId = 9 },
    new Walker { WalkerId = 10, Name = "Emma Garcia", CityId = 10 },
    new Walker { WalkerId = 11, Name = "Oliver Lee", CityId = 11 },
    new Walker { WalkerId = 12, Name = "Sophia Taylor", CityId = 12 },
    new Walker { WalkerId = 13, Name = "Lucas Anderson", CityId = 13 },
    new Walker { WalkerId = 14, Name = "Mia Martinez", CityId = 14 },
    new Walker { WalkerId = 15, Name = "Benjamin Wilson", CityId = 15 },
    new Walker { WalkerId = 16, Name = "Ava Jones", CityId = 16 },
    new Walker { WalkerId = 17, Name = "Jacob Miller", CityId = 17 },
    new Walker { WalkerId = 18, Name = "Ella Williams", CityId = 18 },
    new Walker { WalkerId = 19, Name = "Ethan Moore", CityId = 19 },
    new Walker { WalkerId = 20, Name = "Lily Thompson", CityId = 20 }
};

List<Dog> dogs = new List<Dog>
{
    new Dog { DogId = 1, Name = "Buddy", CityId = 5, WalkerId = 20 },
    new Dog { DogId = 2, Name = "Lucky", CityId = 4, WalkerId = 19 },
    new Dog { DogId = 3, Name = "Rocky", CityId = 3, WalkerId = 18 },
    new Dog { DogId = 4, Name = "Sadie", CityId = 2, WalkerId = 17 },
    new Dog { DogId = 5, Name = "Rusty", CityId = 1, WalkerId = 16 },
    new Dog { DogId = 6, Name = "Bailey", CityId = 10, WalkerId = 15 },
    new Dog { DogId = 7, Name = "Daisy", CityId = 9, WalkerId = 14 },
    new Dog { DogId = 8, Name = "Brandy", CityId = 8, WalkerId = 13 },
    new Dog { DogId = 9, Name = "Shadow", CityId = 7, WalkerId = 12 },
    new Dog { DogId = 10, Name = "Sam", CityId = 6, WalkerId = 11 },
    new Dog { DogId = 11, Name = "Coco", CityId = 15, WalkerId = 10 },
    new Dog { DogId = 12, Name = "Zoe", CityId = 14, WalkerId = 9 },
    new Dog { DogId = 13, Name = "Simba", CityId = 13, WalkerId = 8 },
    new Dog { DogId = 14, Name = "Angel", CityId = 12, WalkerId = 7 },
    new Dog { DogId = 15, Name = "Jake", CityId = 11, WalkerId = 6 },
    new Dog { DogId = 16, Name = "Maggie", CityId = 20, WalkerId = 5 },
    new Dog { DogId = 17, Name = "Ginger", CityId = 19, WalkerId = 4 },
    new Dog { DogId = 18, Name = "Buster", CityId = 18, WalkerId = 3 },
    new Dog { DogId = 19, Name = "Bear", CityId = 17, WalkerId = 2 },
    new Dog { DogId = 20, Name = "Molly", CityId = 16, WalkerId = 1 },
    new Dog { DogId = 21, Name = "Rex", CityId = 10, WalkerId = 1 },
    new Dog { DogId = 22, Name = "Toby", CityId = 9, WalkerId = 2 },
    new Dog { DogId = 23, Name = "Lady", CityId = 8, WalkerId = 3 },
    new Dog { DogId = 24, Name = "Milo", CityId = 7, WalkerId = 4 },
    new Dog { DogId = 25, Name = "Duke", CityId = 6, WalkerId = 5 },
    new Dog { DogId = 26, Name = "Zeus", CityId = 5, WalkerId = 6 },
    new Dog { DogId = 27, Name = "Luna", CityId = 4, WalkerId = 7 },
    new Dog { DogId = 28, Name = "Rosie", CityId = 3, WalkerId = 8 },
    new Dog { DogId = 29, Name = "Bentley", CityId = 2, WalkerId = 9 },
    new Dog { DogId = 30, Name = "Oreo", CityId = 1, WalkerId = 10 },
    new Dog { DogId = 31, Name = "Bella", CityId = 20, WalkerId = 11 },
    new Dog { DogId = 32, Name = "Roxy", CityId = 19, WalkerId = 12 },
    new Dog { DogId = 33, Name = "Kobe", CityId = 18, WalkerId = 13 },
    new Dog { DogId = 34, Name = "Ruby", CityId = 17, WalkerId = 14 },
    new Dog { DogId = 35, Name = "Riley", CityId = 16, WalkerId = 15 },
    new Dog { DogId = 36, Name = "Oliver", CityId = 15, WalkerId = 16 },
    new Dog { DogId = 37, Name = "Leo", CityId = 14, WalkerId = 17 },
    new Dog { DogId = 38, Name = "Sasha", CityId = 13, WalkerId = 18 },
    new Dog { DogId = 39, Name = "Bruno", CityId = 12, WalkerId = 19 },
    new Dog { DogId = 40, Name = "Chloe", CityId = 11, WalkerId = 20 }
};

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/dogs", () => 
{
    return dogs;
});

app.MapGet("api/dogs/{id}", (int id) => 
{
    Dog dog = dogs.FirstOrDefault(dog => dog.DogId == id);
    if (dog == null)
        {
            return Results.NotFound();
        }
    dog.City = cities.FirstOrDefault(city => city.CityId == dog.CityId);
    dog.Walker = walkers.FirstOrDefault(walker => walker.WalkerId == dog.WalkerId);
    return Results.Ok(dog);
});

app.MapGet("/api/walkers", () => 
{
    return walkers;
});

app.MapGet("/api/cities", () => {
    return cities;
});

app.MapPut("/api/walkers/{id}", (int id, Walker walker) => {
    Walker walkerToUpdate = walkers.FirstOrDefault(w => w.WalkerId == id);
    if (walkerToUpdate == null)
    {
        return Results.NotFound();
    }
    if (id != walker.WalkerId)
    {
        return Results.BadRequest();
    }
    int walkerIndex = walkers.IndexOf(walkerToUpdate);
    if(walkerIndex == -1)
    {
        return Results.NotFound();
    }
    walkers[walkerIndex] = walker;
    return Results.Ok();
});

app.MapPut("/api/dogs/{id}", (int id, Dog dog) => {
    Dog dogToUpdate = dogs.FirstOrDefault(d => d.DogId == id);
    if (dogToUpdate == null)
    {
        return Results.NotFound();
    }
    
    int dogIndex = dogs.IndexOf(dogToUpdate);
    if(dogIndex == -1)
    {
        return Results.NotFound();
    }
    dogs[dogIndex] = dog;
    return Results.Ok();
});

app.MapPost("/api/dogs", (Dog dog) => {
    //add Id to each new dog
    dog.DogId = dogs.Count > 0 ?dogs.Max(dog => dog.DogId) + 1: 1;
    dogs.Add(dog);
    return dog;
});

app.MapPost("/api/cities", (City city) => {
    city.CityId = cities.Count > 0 ?cities.Max(city => city.CityId) + 1: 1;
    cities.Add(city);
    return city;
});


app.MapDelete("/api/dogs/{id}", (int id) => 

    {
        Dog dogToDelete = dogs.FirstOrDefault(dog => dog.DogId == id);
        if (dogToDelete != null)
        {
            dogs.Remove(dogToDelete);
            return Results.NoContent();
        }
        else
        {
            return Results.NotFound();
        }
    });



app.Run();
