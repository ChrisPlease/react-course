import React from 'react';
import {render} from 'react-dom';
import Home from './components/homePage';

import './styles/style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Home />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
