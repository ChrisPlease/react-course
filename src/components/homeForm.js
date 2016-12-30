import React from 'react';

class HomeForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="panel panel-body">
        <h1 className="h3">{this.props.title}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus voluptatum recusandae possimus, voluptate ea?
        </p>
      </div>
    );
  }
}

export default HomeForm;
