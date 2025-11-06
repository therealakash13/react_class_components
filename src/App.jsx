import React from "react";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Header username="Akash" />
        <Greeting />
      </>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Welcome, {this.props.username}!</h1>
      </header>
    );
  }
}

class Greeting extends React.Component {
  render() {
    const hours = new Date().getHours();
    let timeOfDay;

    if (hours < 12) {
      timeOfDay = "morning";
    } else if (hours > 12 && hours < 17) {
      timeOfDay = "evening";
    } else {
      timeOfDay = "night";
    }

    return <h1>Good {timeOfDay} to you, sir or madam...</h1>;
  }
}

export default App;
