const token = import.meta.env.VITE_TMDB_TOKEN;

const requests = {
  fetchTrending: {
    url: `/trending/all/week?language=en-US`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
  fetchNetflixOriginals: {
    url: `/discover/tv?with_networks=213`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
  fetchTopRated: {
    url: `/movie/top_rated?language=en-US`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
  fetchActionMovies: {
    url: `/discover/movie?with_genres=28`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
  fetchComedyMovies: {
    url: `/discover/movie?with_genres=35`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
  fetchHorrorMovies: {
    url: `/discover/movie?with_genres=27`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
  fetchRomanceMovies: {
    url: `/discover/movie?with_genres=10749`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
  fetchDocumentaries: {
    url: `/discover/movie?with_genres=99`,
    options: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  },
};

export default requests;
