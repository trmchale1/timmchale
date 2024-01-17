import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        tim: "Tim!"
    };
  }

  componentDidMount() {
      fetch('/api/')
          .then(response => response.json())
          .then(response => this.setState({'tim': response}))
  }

  render() {
    return <h1>Hello {this.state.tim}</h1>;
  }

}

export default App;