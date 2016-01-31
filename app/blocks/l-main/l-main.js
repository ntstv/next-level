import Component from './i-component/i-component.js';
import View from './view.jsx';

/**
* Main class
* @constructor
* @extends {Component}
*/
export default class Main extends Component {

  render() {
    let view = new View();
    return view.render(this);
  }

  onButtonClick(event) {
    console.log(event, 'button clicked');
  }
}
