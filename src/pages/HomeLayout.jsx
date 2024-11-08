import { Link } from "react-router-dom";

function HomeLayout() {
  return (
    <div>
      Home Layout
      <Link to="/about">About</Link>
    </div>
  );
}

export default HomeLayout;
