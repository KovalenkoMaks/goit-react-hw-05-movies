import axios from 'axios';
const KEY = '7764495d47c469eb0f2443468cdf124c';
const BASE_URL = 'https://api.themoviedb.org/3/';
// search/movie?api_key=92be59e0090ddfe5570b8756c403476a&query=carq&page=1
// const popularUrl = 'trending/all/day?api_key=<<api_key>>';
async function getPopularMovie() {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${KEY}`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getSearchMovie(search) {
  // console.log(search);
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&query=${search}&page=1`
    );
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieById(search) {
  // console.log(search);
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${search}?api_key=${KEY}&language=en-US`
    );
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieCast(id) {
  // console.log(search);
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    // console.log(response);
    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

async function getMovieReviews(id) {
  // console.log(search);
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    // console.log(response);
    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
export {
  getPopularMovie,
  getSearchMovie,
  getMovieById,
  getMovieCast,
  getMovieReviews,
};
