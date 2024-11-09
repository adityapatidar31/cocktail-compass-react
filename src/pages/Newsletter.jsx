import { Form, useNavigation } from "react-router-dom";

function Newsletter() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        our newsletter
      </h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          required
          defaultValue="john"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="form-input"
          required
          defaultValue="smith"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="form-input"
          required
          defaultValue="test@test.com"
        />
      </div>
      <button
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting ..." : "Submit"}
      </button>
    </Form>
  );
}

export default Newsletter;
