import { useLoaderData } from "react-router-dom";
import CocktailList from "../components/CocktailList";

function Landing() {
  const { drinks } = useLoaderData();
  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
}

export default Landing;
