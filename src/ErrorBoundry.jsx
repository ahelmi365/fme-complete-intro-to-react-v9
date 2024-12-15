import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundry extends Component {
  state = { hasError: false };
  static getDerviedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    console.log("Error Boundry caught error: ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundry">
          <h2>Error...</h2>
          <p>
            There is an error. Please <Link to={"/"}>click here</Link> to go to
            the home page.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
