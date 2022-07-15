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
  console.log(description.length===0);

  return (
    <section className="pokeAbout">
      {description.length===0 ? <p>Loading</p> : <PokeAboutResume description={description.flavor_text_entries[20].flavor_text} />}
      <PokeAboutInfo />
    </section>
  );
};

export default PokeAbout;
