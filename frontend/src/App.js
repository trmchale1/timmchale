import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        world: "World!"
    };
  }

  componentDidMount() {
      fetch('/api/world')
          .then(response => response.json())
          .then(response => this.setState({'world': response.world}))
  }

  render() {
    return <h1>Hello {this.state.world}</h1>;
  }

}

export default App;