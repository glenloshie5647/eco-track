/* 
  Filename: SophisticatedCode.js

  Description: This code demonstrates a complex and elaborate implementation of a Movie Rental System.

  Author: [Your Name]
  Date: [Current Date]
*/

// Define a class for the Movie
class Movie {
  constructor(title, genre, releaseYear, director) {
    this.title = title;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.director = director;
  }

  getMovieDetails() {
    return `${this.title} (${this.releaseYear}) directed by ${this.director}`;
  }
}

// Define a class for the Customer
class Customer {
  constructor(name, membership) {
    this.name = name;
    this.membership = membership;
    this.rentedMovies = [];
  }

  rentMovie(movie) {
    this.rentedMovies.push(movie);
    console.log(`${this.name} has rented "${movie.title}".`);
  }

  returnMovie(movie) {
    const index = this.rentedMovies.indexOf(movie);
    if (index > -1) {
      this.rentedMovies.splice(index, 1);
      console.log(`${this.name} has returned "${movie.title}".`);
    }
  }
}

// Create some movies
const movie1 = new Movie("Inception", "Science Fiction", 2010, "Christopher Nolan");
const movie2 = new Movie("The Shawshank Redemption", "Drama", 1994, "Frank Darabont");
const movie3 = new Movie("Pulp Fiction", "Crime", 1994, "Quentin Tarantino");

// Create some customers
const customer1 = new Customer("John Doe", "Gold");
const customer2 = new Customer("Jane Smith", "Silver");

// Perform movie rentals and returns
customer1.rentMovie(movie1);
customer2.rentMovie(movie2);
customer1.rentMovie(movie3);
customer1.returnMovie(movie1);

// Display customer's rented movies
console.log(`\n${customer1.name}'s rented movies:`);
for (const movie of customer1.rentedMovies) {
  console.log(movie.getMovieDetails());
}