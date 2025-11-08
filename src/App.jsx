import React, { useState } from "react";
import "./App.css";
import Test from "./Test";

class App extends React.Component {
  render() {
    return (
      <>
        <Header username="Akash" />
        <Greeting />
        <Test name="Akash" />
        <Counter />
        <Button />
        <FunctionalCounter name="Akash" />
        <LoginForm />
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

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; // initialize state
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrease
        </button>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }

  increment = () => {
    console.log(this.state.num);
  };

  render() {
    return <button onClick={this.increment}>Click Me</button>;
  }
}

function FunctionalCounter(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Welcome {props.name}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
    </div>
  );
}

function LoginForm() {
  const [fullName, setFullName] = useState({ fName: "", lName: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setFullName((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <div>
      <h2>
        Hello. {fullName.fName} {fullName.lName}
      </h2>
      <input
        type="text"
        name="fName"
        value={fullName.fName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lName"
        value={fullName.lName}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
