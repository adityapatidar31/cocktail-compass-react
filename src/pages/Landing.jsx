import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";
import { searchCocktailsQuery } from "./loaders/loaderLanding";

function Landing() {
  const { searchQuery } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailsQuery(searchQuery));

  return (
    <>
      <SearchForm searchQuery={searchQuery} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
