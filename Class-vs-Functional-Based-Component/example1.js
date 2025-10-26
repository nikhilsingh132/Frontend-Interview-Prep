// Example: Class Based Component

import React, { Component } from "react";

// Define a class component that extends React.Component or React.PureComponent
class ClassComponent extends Component {
  // Define constructor if necessary
  constructor(props) {
    super(props);
    // Initialize state if needed
    this.state = {
      count: 0,
    };
  }

  // Define lifecycle methods if necessary
  componentDidMount() {
    // Code to run after the component is mounted
  }

  componentDidUpdate(prevProps, prevState) {
    // Check if the data has changed and do actions accordingly
    if (prevState.count !== this.state.count) {
      console.log("Count has been updated:", this.state.count);
    }
  }

  componentWillUnmount() {
    // Cleanup tasks before the component is unmounted
    console.log("Component will unmount");
    // For example, remove event listeners, cancel ongoing tasks, etc.
  }

  // Define instance methods if necessary
  handleClick = () => {
    // Update state or perform other logic
    this.setState({ count: this.state.count + 1 });
  };

  // Define render() method to return JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

export default ClassComponent;

// State management is done by setState method. Using constructor to initialize state.
