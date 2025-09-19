import mongoose, { Schema } from "mongoose";
import Movie from "./models/movie.js";

main().then(()=>{
    console.log("database connection successfuly");
}).catch((e)=>{
    console.log(e);
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/movieapp");
}

let allMovies=[
  {
    moviename: "Inception",
    moviedescription: "A skilled thief enters dreams to steal secrets but is given a chance to plant an idea instead.",
    releasedate: 2010-7-16,
    imgurl: "https://image.tmdb.org/t/p/original/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    postdate: 2025-9-2,
    rating: 8.8,
    cast: []
  },
  {
    moviename: "The Dark Knight",
    moviedescription: "Batman faces the Joker, who wants to plunge Gotham into chaos and test Batman's moral code.",
    releasedate: 2008-7-18,
    imgurl: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    postdate: 2025-9-2,
    rating: 9.0,
    cast: []
  },
  {
    moviename: "Interstellar",
    moviedescription: "A team of explorers travels through a wormhole to find a new home for humanity.",
    releasedate: 2014-11-7,
    imgurl: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    postdate: 2025-9-2,
    rating: 8.6,
    cast: []
  },
  {
    moviename: "Avatar",
    moviedescription: "A paraplegic marine on Pandora must choose between following orders and protecting the planet.",
    releasedate: 2009-12-18,
    imgurl: "https://image.tmdb.org/t/p/original/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    postdate: 2025-9-2,
    rating: 7.8,
    cast: []
  },
  {
    moviename: "Titanic",
    moviedescription: "A love story blossoms aboard the ill-fated RMS Titanic.",
    releasedate: 1997-12-19,
    imgurl: "https://image.tmdb.org/t/p/original/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    postdate: 2025-9-2,
    rating: 7.9,
    cast: []
  },
  {
    moviename: "The Matrix",
    moviedescription: "A computer hacker learns about the true nature of reality and his role in the war for freedom.",
    releasedate: 1999-3-31,
    imgurl: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    postdate: 2025-9-2,
    rating: 8.7,
    cast: []
  },
  {
    moviename: "Gladiator",
    moviedescription: "A betrayed Roman general seeks vengeance against the corrupt emperor who murdered his family.",
    releasedate: 2000-5-5,
    imgurl: "https://image.tmdb.org/t/p/original/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    postdate: 2025-9-2,
    rating: 8.5,
    cast: []
  },
  {
    moviename: "The Godfather",
    moviedescription: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    releasedate: 1972-3-24,
    imgurl: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    postdate: 2025-9-2,
    rating: 9.2,
    cast: []
  },
  {
    moviename: "Spider-Man: No Way Home",
    moviedescription: "Peter Parker seeks help from Doctor Strange after his identity is revealed to the world.",
    releasedate: 2021-12-17,
    imgurl: "https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    postdate: 2025-9-2,
    rating: 8.3,
    cast: []
  },
  {
    moviename: "Joker",
    moviedescription: "Arthur Fleck, a failed comedian, descends into madness and becomes the Joker.",
    releasedate: 2019-10-4,
    imgurl: "https://image.tmdb.org/t/p/original/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    postdate: 2025-9-2,
    rating: 8.4,
    cast: []
  }
]

Movie.insertMany(allMovies);