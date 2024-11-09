/* eslint-disable react/prop-types */
import { Form, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/SearchForm";

function SearchForm({ searchQuery }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          className="form-input"
          defaultValue={searchQuery}
        />
        <button className="btn" disabled={isSubmitting}>
          {isSubmitting ? "searching..." : "search"}
        </button>
      </Form>
    </Wrapper>
  );
}

export default SearchForm;
