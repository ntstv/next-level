import React from 'react';

/**
* View class
*/
export default class View {

    constructor(params) {
      this.params = params;
    }

    /**
    * render
    */
    render(component) {
        return this.renderTemplate.bind(component)(this.params);
    }

    renderTemplate(params) {
      return <div></div>;
    };
}
