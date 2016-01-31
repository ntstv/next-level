import React from 'react';
import Template from '../i-template/i-template.js';
import Styles from './b-button.scss';

let instance_ = null;

export default class ButtonTemplate extends Template {

  static getInstance() {
    if (!instance_) {
      instance_ = new ButtonTemplate();
    }
    return instance_;
  }

  /**
  * Renders template
  * @param {
  *  caption: string
  * } params
  * @retun {Object}
  */
  renderTemplate(params) {
    return (
      <div className={Styles['b-button']} ref="root">
        {params.caption}
      </div>
    );
  }
}
