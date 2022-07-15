import { PokeSize } from "@atoms";

import "./pokeAboutResume.scss";


const PokeAboutResume = ({description, height, weight}) => {
  return (
    <>
      <p className="pokeAbout__description">
        {description}
      </p>
      <PokeSize weightSize={weight} heightSize={height} />
    </>
  );
};

export default PokeAboutResume;
