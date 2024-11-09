import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export function searchSingleCocktailQuery(id) {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const res = await axios.get(`${BASE_URL}${id}`);
      const drink = res.data.drinks?.[0] || {};

      return drink;
    },
  };
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params;
    try {
      await queryClient.ensureQueryData(searchSingleCocktailQuery(id));
      return { id };
    } catch (error) {
      console.log(error);
      toast.error("Internal error, Please try later");
      return redirect("/");
    }
  };
