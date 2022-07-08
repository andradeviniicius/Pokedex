import "./pokeType.scss";

// It receives the type of the pokemon from the component that uses him
// or from redux cause we're in the first sprint and not everything is clear yet
export default function PokeType({ type }) {
  return (
    <>
      <div className="pokeType">
        <p className="pokeType__text">{type}</p>
      </div>
    </>
  );
}
