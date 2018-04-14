import React, { Component } from 'react';


import Header from "./Components/Header";
import Form from "./Components/Form"
class App extends Component {
  render() {
    return (
      <div className="container">
         <Header />
          <Form />
      </div>
    );
  }
}

export default App;
