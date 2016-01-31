import React from 'react';
import View from './i-view/i-view.js';
import Button from './b-button/b-button.js';
import Styles from './l-main.scss';

/**
* Main class Template
*/
export default class MainView extends View {
    renderTemplate(params) {
      return (
        <div className={Styles['l-main']}>
          <Button caption="Der Knop" onClick={this.onButtonClick}/>
          <Button caption="Кнопка" onClick={this.onButtonClick}/>
          <Button caption="Bouton" onClick={this.onButtonClick}/>
        </div>
      );
    }
}
