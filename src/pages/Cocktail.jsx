import { Link, Navigate, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from "@tanstack/react-query";
import { searchSingleCocktailQuery } from "./loaders/loaderSingleCocktail";
import { toast } from "react-toastify";

function Cocktail() {
  const { id } = useLoaderData();
  const { data: drink } = useQuery(searchSingleCocktailQuery(id));
  if (!drink?.strDrink) {
    toast.error("Drink not found");
    return <Navigate to="/" />;
  }
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = drink;
  const ingredientsKeys = Object.keys(drink).filter(
    (key) => key.startsWith("strIngredient") && drink[key] != null
  );
  const ingredients = ingredientsKeys.map((ingredient) => drink[ingredient]);
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Instruction:</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {ingredients.map((ingredient, idx) => {
              return (
                <span className="ing" key={ingredient}>
                  {ingredient}
                  {idx !== ingredients.length - 1 ? "," : "."}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Cocktail;
