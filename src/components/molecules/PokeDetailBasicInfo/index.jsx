import { NavArrow, LikeButton, MainTitle, PokeType } from "@atoms";

import "./pokeDetailBasicInfo.scss";

const types = ["grass", "poison"];

const PokeDetailBasicInfo = () => {
  return (
    <>
      <section className="pokeDetail__actions">
        <NavArrow isWhite="true" />
        <LikeButton />
      </section>
      <section className="pokeDetail__title">
        <MainTitle elem={"about"} textContent={"Bulbasaur"} />
        <p className="pokeDetail__number">#001</p>
      </section>
      <section className="pokeDetail__type">
        <div className="pokeDetail__badges">
          {types.map((type) => (
            <PokeType className="pokeType--big" key={type} type={type} />
          ))}
        </div>
        <p className="pokeDetail__species">Seed Pokemon</p>
      </section>
      <section className="pokeDetail__pokemon">
        <img
          className="pokeDetail__image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Pokemon Image"
        />
      </section>
    </>
  );
};

export default PokeDetailBasicInfo;
