import "./evolutionChainItem.scss";

const EvolutionChainItem = ({ name }) => {
  return (
    <figure className="pokeEvolution__figure">
      <div className="pokeEvolution__pokeball">
        <img
          className="pokeEvolution__image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt=""
        />
      </div>

      <figcaption className="pokeEvolution__name">{name}</figcaption>
    </figure>
  );
};

export default EvolutionChainItem;
