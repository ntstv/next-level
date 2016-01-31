import ButtonView from '../b-button/view.jsx';

export const Type = {
  BUTTON: 'button'
}

let instance_ = null;

export default class Factory {

  static getInstance() {
    if (!instance_) {
      instance_ = new Factory();
    }
    return instance_;
  }

  createView(type, params) {
    let res;
    switch(type) {
      case Type.BUTTON:
          res = new ButtonView(params);
          break;
    }
    return res;
  }
}
