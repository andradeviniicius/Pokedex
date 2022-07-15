import { useEffect, useState } from "react";
import { getSinglePokemon } from "@/services/pokedexApi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "@atoms";
import { PokeDetailHeader } from "@organisms";
import { PokeNavigation } from "@molecules";
import { Routes, Route, Navigate } from "react-router-dom";

import { PokeAbout, PokeStats, PokeEvolution, PokeMoves } from "@organisms";

import "./detailPokemonPage.scss";

const DetailPokemonPage = () => {
  const allPokemons = useSelector((state) => state.pokedex.allPokemons);
  const [singlePokemon, setSinglePokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      const id = params.pokemonId - 1;
      const pokemonFilter = allPokemons.filter(
        (pokemon) => pokemon.id === id.toString()
      );
      const pokeSingle = await getSinglePokemon(pokemonFilter[0].url);
      setSinglePokemon(pokeSingle);
    };

    fetch();
  }, [params]);

  // console.log(singlePokemon || '');
  return (
    <div className="pokeDetail">
      <PokeDetailHeader
        data={{
          single: singlePokemon,
          name: singlePokemon.name || "loading",
          id: singlePokemon.id || "loading",
          types: singlePokemon.types || [],
          image:
            singlePokemon.sprites?.other["official-artwork"]["front_default"] ||
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        }}
      />
      <main className="pokeDetail__content">
        <PokeNavigation />
        <div className="pokeDetail__data">
          <Routes>
            <Route
              path="/"
              element={
                <Navigate
                  to={`/pokedex/${params.pokemonId}/about`}
                  replace={true}
                />
              }
            />
            <Route
              path="/about"
              element={
                singlePokemon.length === 0 ? (
                  <LoadingSpinner />
                ) : (
                  <PokeAbout
                    data={{
                      description: singlePokemon?.id,
                      height: singlePokemon?.height,
                      weight: singlePokemon?.weight,
                      gender: Math.floor(Math.random() * (100 - 0 + 1) + 0),
                      eggGroups: "Invalid Data.",
                      eggCycle: "Invalid Data.",
                    }}
                  />
                )
              }
            />
            <Route
              path="/stats"
              element={
                <PokeStats
                  data={{
                    name: singlePokemon.name || "charmander",
                    stats: singlePokemon.stats || [],
                  }}
                />
              }
            />
            <Route path="/evolution" element={<PokeEvolution />} />
            <Route path="/moves" element={<PokeMoves />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default DetailPokemonPage;
