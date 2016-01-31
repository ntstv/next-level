import Component from '../i-component/i-component.js';
import Factory, {Type} from '../i-factory/i-factory.js';

export default class Button extends Component {
  render() {
      let view = Factory.getInstance().createView(Type.BUTTON, {
        caption: this.props.caption
      });
      return view.render();
  }

  onClick(event) {
    this.props.onClick(event);
  }

  componentDidMount() {
    this.refs.root.addEventListener('click', this.onClick.bind(this));
  }
}
