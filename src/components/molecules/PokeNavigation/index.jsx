import { PokeLink } from "@/components/atoms";

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
