import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("search");
  const searchQuery = query || "a";
  const res = await axios.get(`${BASE_URL}${searchQuery}`);
  const drinks = res.data.drinks.map((drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return { drinks, searchQuery: searchQuery === "a" ? "" : searchQuery };
};
