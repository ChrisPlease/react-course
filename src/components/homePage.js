import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello World'
    };
  }

  render() {
    return (
      <div className="jumbotron">
        <h1>{this.state.title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea aut aperiam aliquid, minus blanditiis culpa.</p>
      </div>
    );
  }
}

export default Home;
