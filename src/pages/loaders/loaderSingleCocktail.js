import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  const res = await axios.get(`${BASE_URL}${id}`);
  return { id, drink: res.data.drinks[0] };
};
