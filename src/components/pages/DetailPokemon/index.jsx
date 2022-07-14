import { PokeDetailHeader, PokeAbout } from "@organisms";
import { PokeNavigation } from "@molecules";
import { Outlet } from "react-router-dom";

import "./detailPokemonPage.scss";

const DetailPokemonPage = () => {
  return (
    <main className="pokeDetail">
      <PokeDetailHeader />
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
