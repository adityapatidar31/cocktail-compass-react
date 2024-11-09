import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async () => {
  const searchQuery = "a";
  const res = await axios.get(`${BASE_URL}${searchQuery}`);
  return { drinks: res.data.drinks, searchQuery };
};
