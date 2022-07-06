export default function PokedexItem({data}) {
  return (
    <>
      <div className="pokedexList__item">
        <div className="pokedexList__item__image">
          <img
            src={data.image}
            alt=""
          />
        </div>
        <div className="pokedexList__item__name">
          <h2>{data.name}</h2>
        </div>
      </div>
    </>
  );
}
