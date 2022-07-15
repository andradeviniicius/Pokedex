import { NavArrow, LikeButton, MainTitle, PokeType } from "@atoms";
import { addExtraZero, capitalFirstLetter } from "@utils";
import "./pokeDetailBasicInfo.scss";

const PokeDetailBasicInfo = (props) => {
  const { name, id, types, image } = props.data;

  return (
    <>
      <div className="pokeDetail__basicInfo">
        <section className="pokeDetail__actions">
          <NavArrow goingTo={"/pokedex"} isWhite="true" />
          <LikeButton />
        </section>
        <section className="pokeDetail__title">
          <MainTitle elem={"about"} elemModifier={"left"} textContent={name} />
          <p className="pokeDetail__number">{"#" + addExtraZero(id, 3)}</p>
        </section>
        <section className="pokeDetail__type">
          <div className="pokeDetail__badges">
            {types.map((type) => (
              <PokeType
                className="pokeType--big"
                key={type.type.name}
                type={type.type.name}
              />
            ))}
          </div>
          <p className="pokeDetail__species">Seed Pokemon</p>
        </section>
      </div>

      <section className="pokeDetail__pokemon">
        <img className="pokeDetail__image" src={image} alt="Pokemon Image" />
      </section>
    </>
  );
};

export default PokeDetailBasicInfo;
