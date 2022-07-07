import { PokeType } from "@atoms";

import './pokedexItem.scss'

export default function PokedexItem({ pokeName, pokeImage, pokeType, pokeId }) {
  return (
    <>
      <div className="pokedexItem" onClick={{/*Mandar as info daqui pro Redux mandar pro AboutSection */}}>
        <p>#{pokeId}</p>
        <p>{pokeName}</p>
        <img src={pokeImage} alt="" />

        {pokeType.map((type) => {
          return <PokeType data={type} />;
        })}
      </div>
    </>
  );
}
