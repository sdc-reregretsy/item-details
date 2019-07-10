import React from "react";
import Title from "./Title.js"
import Details from "./Details.js"

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <h1>RegrEtsy Item Details & Add to Cart Component</h1>
      <Title />
      <Details />
    </div>;
  }
}
export default App;
