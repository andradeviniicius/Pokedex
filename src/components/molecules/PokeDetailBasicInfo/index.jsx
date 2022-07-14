import { NavArrow } from "@atoms";
import { LikeButton } from "../../atoms";
const PokeDetailBasicInfo = () => {
  return (
    <div className="pokeDetail__actions">
      <NavArrow />
      <LikeButton />
    </div>
  );
};

export default PokeDetailBasicInfo;
