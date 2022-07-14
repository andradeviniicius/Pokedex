import { PokeAboutResume, PokeAboutInfo } from "@molecules";

import "./pokeAbout.scss";

const PokeAbout = () => {
  return (
    <section className="pokeAbout">
      <PokeAboutResume />
      <PokeAboutInfo />
    </section>
  );
};

export default PokeAbout;
