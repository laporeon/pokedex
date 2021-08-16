export default class Pokemon {
  constructor(searchField, count, container) {
    this.count = 150;
    this.searchField = document.querySelector('#search-input');
    this.pokeContainer = document.querySelector('.pokemons-container');
  }

  async getPokemon() {
    for (let id = 1; id <= this.count; id++) {
      await this.fetchPokemon(id);
    }
  }

  async fetchPokemon(id) {
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const response = await fetch(`${url}/${id}`);
    const pokemonData = await response.json();

    this.createPokemonCard(pokemonData);
  }

  async createPokemonCard(pokemon) {
    const { id, types, name, sprites } = pokemon;

    const pokeCard = document.createElement('div');
    pokeCard.classList.add('card');

    let pokemonTypes = '';
    types.map(
      (type) =>
        (pokemonTypes += `<span class="${type.type.name} type">${type.type.name}</span> `)
    );

    pokeCard.innerHTML = `
        <span class="id">#${id}</span>
        <img src=${sprites.front_default} alt=${name} class="image" />
        <h3 id="name">${name}</h3>
        <div>${pokemonTypes}</div>
     `;

    this.pokeContainer.appendChild(pokeCard);
  }

  init() {
    this.getPokemon();
  }
}
