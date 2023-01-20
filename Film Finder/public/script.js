const tmdbKey = '1727dc338f7a2561777185ced90df08c';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
    const genreRequestEndpoint = '/genre/movie/list';
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl+genreRequestEndpoint+requestParams;
    try {
        const response = await fetch(urlToFetch);

        if (response.ok) {
            const jsonResponse = await response.json();
            //console.log(`Genres ${jsonResponse.genres}`);
            genres = jsonResponse.genres;
            return genres;
        }

        throw new Error('Request failed!');

    } catch(error) {
        console.log(error);
    }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = tmdbBaseUrl+discoverMovieEndpoint+requestParams;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            //console.log('Movies: '+jsonResponse.results[O]);
            const movies = jsonResponse.results;
            return movies;
        }

        throw new Error('Request of specific genre failed')
    }
    catch (error) {
        console.log(error);
    }
};

const getMovieInfo = async (movie) => {
    const movieId = movie.id;
    const movieEndpoint = `/movie/${movieId}`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl+movieEndpoint+requestParams;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            //console.log('getMovieInfo: '+jsonResponse);
            movieInfo = jsonResponse;
            return movieInfo;
        }
    } catch(error) {
        console.log(error);
    }
};

const getCastInfo = async (movie) => {
    const movieId = movie.id;
    const movieEndpoint = `/movie/${movieId}/credits`;
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = tmdbBaseUrl+movieEndpoint+requestParams;

    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            //console.log('getMovieInfo: '+jsonResponse);
            const castInfo = jsonResponse;
            return castInfo;
        }
    } catch(error) {
        console.log(error);
    }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  const cast = await getCastInfo(randomMovie);
  //console.log('Info: '+info);
  displayMovie(info, cast);

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;