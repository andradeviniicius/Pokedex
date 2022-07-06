import PokedexItem from "@molecules/PokedexItem";

export default function PokedexList() {

    const fakeDataArray = [
        {
            id: 1,
            name: "Bulbasaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png"
        },
        {
            id: 2,
            name: "Ivysaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png"
        },
        {
            id: 3,
            name: "Venusaur",
            image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/3.png"
        }
    ]

  return (
    <div className="pokedexList">
      {fakeDataArray.map((item) => {
        return <PokedexItem key={item.id} data={item} />;
      })}
    </div>
  );
}
