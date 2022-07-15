import { PokeLink } from "@/components/atoms";

import "./pokeNavigation.scss";

const PokeNavigation = () => {
  return (
    <nav className="pokeDetail__nav">
      <ul className="pokeDetail__list">
        <PokeLink path="about" text="About" />
        <PokeLink path="stats" text="Base Stats" />
        <PokeLink path="evolution" text="Evolution" />
        <PokeLink path="moves" text="Moves" />
      </ul>
    </nav>
  );
};

export default PokeNavigation;
