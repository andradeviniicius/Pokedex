import MainTitle from "./components/atoms/MainTitle";

function App() {
  return (
    <>
      <MainTitle elem={""} elemModifier="" textContent={"What Pokemon are you looking for?"}/>
      <MainTitle elem={"about"} textContent={"Bulbasaur"} />
      <MainTitle elem={"about"} elemModifier={"mini"} textContent={"Bulbasaur"} customStyle={'colorRed'} />
    </>
  );
}

export default App;
