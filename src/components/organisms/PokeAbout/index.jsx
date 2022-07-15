import { PokeAboutResume, PokeAboutInfo } from "@molecules";
import { getPokemonSpecies } from "@/services/pokedexApi";

import "./pokeAbout.scss";
import { useState, useEffect } from "react";

const PokeAbout = ({ data }) => {
  const [description, setDescription] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const pokeSpecies = await getPokemonSpecies(
        `https://pokeapi.co/api/v2/pokemon-species/${data.description}/`
      );
      setDescription(pokeSpecies);
    };

    fetch();
  }, [data]);

  return (
    <section className="pokeAbout">
      {description.length === 0 ? (
        <p>Loading</p>
      ) : (
        <PokeAboutResume
          description={description.flavor_text_entries[20].flavor_text}
          weight={data.weight}
          height={data.height}
        />
      )}
      <PokeAboutInfo />
    </section>
  );
};

export default PokeAbout;
