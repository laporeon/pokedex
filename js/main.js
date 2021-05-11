const pokeContainer = document.querySelector('.pokemons-container');
const totalPokemon = 150;

const getPokemon = async () => {
  for (let i = 1; i <= totalPokemon; i++) {
    await fetchPokemon(i);
  }
};

const fetchPokemon = async id => {
  const url = 'https://pokeapi.co/api/v2/pokemon';
  const response = await fetch(`${url}/${id}`);
  const pokemonData = await response.json();

  createPokemonCard(pokemonData);
};

const createPokemonCard = async pokemon => {
  const pokeCard = document.createElement('div');

  const { id, types, name, sprites } = pokemon;
  pokeCard.classList.add('pokemon-card', `${types[0].type.name}`);

  pokeCard.innerHTML = `
      <div class="pokemon-image">
         <img src=${sprites.front_default} alt=${name} />
      </div>
      <div class="pokemon-info">
         <span>#${id}</span>
         <h3 id="name">${name}</h3>
         <p class="type">${types.map(typeName => typeName.type.name).join(' | ')}</p>
      </div>
   `;

  pokeContainer.appendChild(pokeCard);
};

getPokemon();
