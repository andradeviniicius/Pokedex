import { PokeSize } from "@atoms";

import "./pokeAboutResume.scss";


const PokeAboutResume = ({description}) => {
  return (
    <>
      <p className="pokeAbout__description">
        {description}
      </p>
      <PokeSize />
    </>
  );
};

export default PokeAboutResume;
