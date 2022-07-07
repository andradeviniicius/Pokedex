import { useEffect } from "react";

import { PokedexItem } from "@atoms";
import { useDispatch } from "react-redux/es/exports";
import { pokedexActions } from "@/store";

import "./pokedexList.scss";

export default function PokedexList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pokedexActions.fillPokemons());
  }, []);

  const fakeDataArray = [
    {
      id: 1,
      name: "Buur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      type: ["grass", "poison"],
    },
    {
      id: 2,
      name: "Ivysaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
      type: ["grass", "poison"],
    },
    {
      id: 3,
      name: "Venusaur",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
      type: ["grass", "poison"],
    },
    {
      id: 4,
      name: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      type: ["Fire"],
    },
    {
      id: 5,
      name: "Charmeleon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      type: ["Fire"],
    },
    {
      id: 6,
      name: "Charizard",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
      type: ["Fire", "Flying"],
    },
    {
      id: 7,
      name: "Squirtle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      type: ["Water"],
    },
    {
      id: 8,
      name: "Wartortle",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
      type: ["Water"],
    },
    {
      id: 9,
      name: "Blastoise",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
      type: ["Water"],
    },
    {
      id: 10,
      name: "Pikachu",
      image:  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      type: ["Electric"],
    },
  ];

  return (
    <ul className="pokedex__list">
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
    </ul>
  );
}
