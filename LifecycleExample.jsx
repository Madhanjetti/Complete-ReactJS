import React from 'react';

class LifecycleExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log('Constructor: Initializing state');
  }

  componentDidMount() {
    console.log('Component Did Mount: Component has been mounted');
    // Simulate an API call
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component Did Update: Component has been updated');
    if (prevState.count !== this.state.count) {
      console.log(`Count changed from ${prevState.count} to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('Component Will Unmount: Cleaning up');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    console.log('Render: Rendering component');
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
      </div>
    );
  }
}

export default LifecycleExample;
