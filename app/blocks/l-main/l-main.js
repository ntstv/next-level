import Component from './i-component/i-component.js';
import Template from './l-main.jsx';

/**
* Main class
* @constructor
* @extends {Component}
*/
export default class Main extends Component {

  render() {
    let template = Template.getInstance();
    return template.render(this);
  }

  onButtonClick(event) {
    //todo
  }
}
