import LoadingScreen from './modules/loading-screen.js';
import FetchPokemon from './modules/fetch-pokemons.js';

const loadingScreen = new LoadingScreen();
loadingScreen.init();

const fetchPokemon = new FetchPokemon();
fetchPokemon.init();
