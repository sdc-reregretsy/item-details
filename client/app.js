import React from "react";
import Title from "./components/title.js"
import Details from "./components/details.js"

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
      <h1>Regretsy Item Details Component</h1>
      <Title />
      <Details />
    </div>;
  }
}
export default App;
