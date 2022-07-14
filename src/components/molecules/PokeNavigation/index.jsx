import { PokeLink } from "@/components/atoms";

import "./pokeNavigation.scss";

const PokeNavigation = () => {
  return (
    <nav className="pokeDetail__nav">
      <ul className="pokeDetail__list">
        <PokeLink text="About" />
        <PokeLink text="Base Stats" />
        <PokeLink text="Evolution" />
        <PokeLink text="Moves" />
      </ul>
    </nav>
  );
};

export default PokeNavigation;
