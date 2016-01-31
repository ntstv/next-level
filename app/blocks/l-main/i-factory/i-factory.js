import ButtonTemplate from '../b-button/b-button.jsx';

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

  getTemplate(type) {
    let res;
    switch(type) {
      case Type.BUTTON:
          res = ButtonTemplate.getInstance();
          break;
    }
    return res;
  }
}
