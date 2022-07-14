import { useEffect, useState } from "react";
import { getSinglePokemon } from "@/services/pokedexApi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { PokeDetailHeader } from "@organisms";
import { PokeNavigation } from "@molecules";
import { Outlet } from "react-router-dom";

import "./detailPokemonPage.scss";

const DetailPokemonPage = () => {
  const allPokemons = useSelector((state) => state.pokedex.allPokemons);
  const [singlePokemon, setSinglePokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const id = params.pokemonId - 1;
      console.log(id);
      const pokemonFilter = allPokemons.filter(
        (pokemon) => pokemon.id === id.toString()
      );
      console.log(pokemonFilter);
      const pokeSingle = await getSinglePokemon(pokemonFilter[0].url);
      setSinglePokemon(pokeSingle);
    };

    fetch();
  }, []);

  return (
    <main className="pokeDetail">
      <PokeDetailHeader
        data={{
          name: singlePokemon.name,
          id: singlePokemon.id,
          types: singlePokemon.types,
        }}
      />
      <section className="pokeDetail__content">
        <PokeNavigation />
        <div className="pokeDetail__data">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default DetailPokemonPage;
