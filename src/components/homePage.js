import React from 'react';
import HomeForm from './homeForm/homeForm';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: 'Home Form' }
  }

  render() {
    return (
      <div className="col-xs-12 col-sm-10 col-sm-push-1 col-md-8 col-md-push-2">
        <HomeForm title={this.state.title} />
      </div>
    );
  }
}

export default Home;
