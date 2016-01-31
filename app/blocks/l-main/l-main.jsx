import React from 'react';
import Template from './i-template/i-template.js';
import Button from './b-button/b-button.js';
import Styles from './l-main.scss';

let instance_ = null;

/**
* Main class Template
*/
export default class MainTemplate extends Template {

  static getInstance() {
    if (!instance_) {
      instance_ = new MainTemplate();
    }
    return instance_;
  }

    renderTemplate(params) {
      return (
        <div className={Styles['l-main']}>
          <Button caption="Der Knop" />
          <Button caption="Кнопка" />
          <Button caption="Bouton" />
        </div>
      );
    }
}
