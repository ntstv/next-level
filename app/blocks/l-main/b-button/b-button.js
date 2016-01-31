import Component from '../i-component/i-component.js';
import Factory, {Type} from '../i-factory/i-factory.js';

export default class Button extends Component {

  render() {
      return this.props.template.render(this, {
        caption: this.props.caption
      });
  }

  componentDidMount() {
    this.refs.root.addEventListener('click', this.onClick_.bind(this));
  }

  onClick_(event) {
    this.props.onClick(event);
  }
}

Button.defaultProps = {
    template: Factory.getInstance().getTemplate(Type.BUTTON),
    onClick: function() {}
}
