const url =
  "https://newsapi.org/v2/everything?" +
  "q=Pokemon&" +
  "from=2022-07-08&" +
  "sortBy=popularity&" +
  "apiKey=a859eb66cf3541afa25cf257483c9300";

export async function fetchPokeNews() {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("error!");
  }

  const data = res.json();
  console.log(data);
  return data;
}
