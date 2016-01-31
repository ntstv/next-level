import React from 'react';
import View from './view.jsx';

export default class Button extends React.Component {
  render() {
      let view = new View({
        caption: 'Der knop!'
      });
      return view.render();
  }
}
