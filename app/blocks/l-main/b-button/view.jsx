import React from 'react';
import View from '../i-view/i-view.js';
import Styles from './b-button.scss';

export default class ButtonView extends View {
  /**
  * @param {
  *  caption: string
  } params
  */
  renderTemplate(params) {
    return (
      <div className={Styles['b-button']}>
        {params.caption}
      </div>
    );
  }
}
