import { PokeSize } from "@atoms";

import "./pokeAboutResume.scss";

const PokeAboutResume = () => {
  return (
    <>
      <p className="pokeAbout__description">
        Bulbasaur can be seen napping in bright sunlight. There is a seed on its
        back. By soaking up the sun's rays, the seed grows progressively larger.{" "}
      </p>
      <PokeSize />
    </>
  );
};

export default PokeAboutResume;
