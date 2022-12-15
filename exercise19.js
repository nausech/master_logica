const movies = [
  {
    title: 'El señor de los anillos',
    director: 'Peter Jackson',
    viewed: true,
  },
  {
    title: 'El padrino',
    director: 'Francis Ford Coppola',
    viewed: false,
  },
  {
    title: 'El padrino 2',
    director: 'Francis Ford Coppola',
    viewed: false,
  },
  {
    title: 'Star Wars',
    director: 'George Lucas',
    viewed: true,
  },
  {
    title: 'El caballero oscuro',
    director: 'Christopher Nolan',
    viewed: true,
  }

]

function getMovies(movies, viewed) {
  return movies.filter((movie) => movie.viewed === viewed);
}

console.log(getMovies(movies, true));