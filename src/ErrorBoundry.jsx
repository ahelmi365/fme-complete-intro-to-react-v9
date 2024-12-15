import { Link } from "@tanstack/react-router";
import { Component } from "react";

class ErrorBoundry extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.celeprator = this.celeprator.bind(this); // or use arrow functoin
  //   }
  state = { hasError: false };
  static getDerviedStateFromError() {
    return {
      hasError: true,
    };
  }

  //   celeprator() {
  //     return this.setState({
  //       celepration: "lol...",
  //     });
  //   }
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
