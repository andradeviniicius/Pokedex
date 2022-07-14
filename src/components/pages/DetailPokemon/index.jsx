import { PokeDetailHeader } from "@organisms";
import { PokeNavigation } from "@molecules";

import "./detailPokemonPage.scss";

const DetailPokemonPage = () => {
  return (
    <main className="pokeDetail">
      <PokeDetailHeader />
      <section className="pokeDetail__content">
        <PokeNavigation />{" "}
      </section>
    </main>
  );
};

export default DetailPokemonPage;
