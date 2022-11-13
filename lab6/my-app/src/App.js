import "./App.css";
import Navigation from "./containers/Navigation/Navigation";
import Footer from "./containers/Footer/Footer";

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
    };
  }

  callApi() {
    fetch("http://localhost:9000/api/courses")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callApi();
  }

  render() {
    return (
      <div>
        <header>
          <h1>REST API</h1>
        </header>
        <p>{this.state.apiResponse}</p>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div>
//       <Navigation />
//       <Footer />
//     </div>
//   );
// }

export default App;
