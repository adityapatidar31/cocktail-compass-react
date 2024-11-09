import axios from "axios";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async ({ params }) => {
  const { id } = params;
  try {
    const res = await axios.get(`${BASE_URL}${id}`);
    if (!res.data) {
      toast.error("Drink is not found");
      return redirect("/");
    }
    return { id, drink: res.data.drinks[0] };
  } catch {
    toast.error("Internal error, Please try later");
    return redirect("/");
  }
};
