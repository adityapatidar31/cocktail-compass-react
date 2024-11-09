import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

function Landing() {
  const { drinks, searchQuery } = useLoaderData();

  return (
    <>
      <SearchForm searchQuery={searchQuery} />
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
