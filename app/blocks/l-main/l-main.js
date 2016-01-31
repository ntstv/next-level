import React from 'react';
import View from './view.jsx';

/**
* Main class
* @constructor
* @extends {React.Component}
*/
export default class Main extends React.Component {
  render() {
    let view = new View();
    return view.render(this);
  }
}
