import { PokedexItem } from "@molecules";

import './pokedexList.scss'

export default function PokedexList() {
  const fakeDataArray = [
    {
      id: 1,
      name: "Bulbasaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      type: ["grass", "poison"],
    },
    {
      id: 2,
      name: "Ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png",
      type: ["grass", "poison"],
    },
    {
      id: 3,
      name: "Venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png",
      type: ["grass", "poison"],
    },
    {
      id: 4,
      name: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png",
      type: ["Fire"],
    },
    {
      id: 5,
      name: "Charmeleon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/5.png",
      type: ["Fire"],
    },
    {
      id: 6,
      name: "Charizard",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png",
      type: ["Fire", "Flying"],
    },
    {
      id: 7,
      name: "Squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png",
      type: ["Water"],
    },
    {
      id: 8,
      name: "Wartortle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/8.png",
      type: ["Water"],
    },
    {
      id: 9,
      name: "Blastoise",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/9.png",
      type: ["Water"],
    },
  ];

  return (
    <div className="pokedexList">
      {fakeDataArray.map((item) => {
        return (
          <PokedexItem
            key={item.id}
            pokeId={item.id}
            pokeName={item.name}
            pokeImage={item.image}
            pokeType={item.type}
          />
        );
      })}
    </div>
  );
}
