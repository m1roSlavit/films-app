import axios from "axios";

class MovieService {
  _baseApi = 'https://api.themoviedb.org/3';
  _apiKey = '805b680d00e76b234d19bdda8081f967';

  getPopularMovies = async (pageIdx = 1) => {
    const res = await axios.get(`${this._baseApi}/movie/popular?api_key=${this._apiKey}&language=en-US&page=${pageIdx}`);
    return res.data;
  }

  getGenres = async () => {
    const res = await axios.get(`${this._baseApi}/genre/movie/list?api_key=${this._apiKey}&language=en-US`);
    return res.data.genres;
  }

  getSearchMovies = async (searchText, pageIdx) => {
    const res = await axios.get(`${this._baseApi}/search/movie?api_key=${this._apiKey}&query=${searchText}&language=en-US&page=${pageIdx}&include_adult=true`);
    return res.data;
  }

  getMovieDetails = async (id) => {
    const res = await axios.get(`${this._baseApi}/movie/${id}?api_key=${this._apiKey}&language=en-US`);
    return res.data;
  }

  getMovieRecommendation = async (id) => {
    const res = await axios.get(`${this._baseApi}/movie/${id}/recommendations?api_key=${this._apiKey}&language=en-US&page=1`);
    return res.data.results;
  }
}

const movieService = new MovieService();

export default movieService;