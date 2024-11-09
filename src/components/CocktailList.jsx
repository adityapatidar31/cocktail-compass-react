import Wrapper from "../assets/wrappers/CocktailList";
import CocktailCard from "./CocktailCard";

/* eslint-disable react/prop-types */
function CocktailList({ drinks }) {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No result Found</h4>;
  }
  return (
    <Wrapper>
      {drinks.map((drink) => (
        <CocktailCard key={drink.id} {...drink} />
      ))}
    </Wrapper>
  );
}

export default CocktailList;
