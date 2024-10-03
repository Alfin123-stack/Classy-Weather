import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
  };

  decrementCounter = () => {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  };
  render() {
    const date = new Date("June 21 2027");
    date.setDate(date.getDate() + this.state.counter);

    return (
      <div>
        <h1>Counter: {this.props.counter}</h1>
        <button onClick={this.decrementCounter}>-</button>
        <span>
          {date.toDateString()} - {this.state.counter}
        </span>
        <button onClick={this.incrementCounter}>+</button>
      </div>
    );
  }
}

export default Counter;
