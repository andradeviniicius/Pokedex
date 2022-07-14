import { MainTitle } from "@atoms";
import { PokedexHeader } from "@molecules";

export default function NotFoundPage() {
  return (
    <>
      <PokedexHeader></PokedexHeader>
      <MainTitle textContent={"This page doesnt exist"} />
    </>
  );
}
