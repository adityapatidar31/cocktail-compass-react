import axios from "axios";
const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export function searchCocktailsQuery(searchQuery) {
  return {
    queryKey: ["search", searchQuery || "all"],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}${searchQuery || "a"}`);
      const drinks = res?.data?.drinks?.map((drink) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          drink;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
      return drinks || [];
    },
  };
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("search");
    await queryClient.ensureQueryData(searchCocktailsQuery(query));
    const searchQuery = query;

    return { searchQuery };
  };
