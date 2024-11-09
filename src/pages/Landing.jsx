import { useLoaderData } from "react-router-dom";

function Landing() {
  const data = useLoaderData();
  console.log(data);
  return <div>Landing</div>;
}

export default Landing;
