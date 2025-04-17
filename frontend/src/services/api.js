const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const apiURL = import.meta.env.VITE_TMDB_BASE_URL;

export const getPopularMovies = async () => {
  const response = await fetch(`${apiURL}/movie/popular?api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${apiURL}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
