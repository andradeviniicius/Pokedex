const url =
  "https://newsapi.org/v2/everything?" +
  "q=Pokemon&" +
  "searchIn=title&"+
  "language=en&" +
  "from=2022-07-08&" +
  "sortBy=popularity&" +
  "apiKey=a859eb66cf3541afa25cf257483c9300";

export async function fetchPokeNews() {
  const res = await fetch(url);

  if (!res.ok) {
    console.log(res);
    throw new Error("error!");
  }

  const data = res.json();
  return data;
}
