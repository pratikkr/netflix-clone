const API_KEY = "0cf2062a1dc6bdf11a1e9ebba10e6fb6";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_geners=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_geners=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_geners=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_geners=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_geners=99`,
}
export default requests;