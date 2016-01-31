import React from 'react';

/**
* View class
*/
export default class Template {

    /**
    * render
    */
    render(component, params) {
        return this.renderTemplate.bind(component)(params);
    }

    renderTemplate(params) {
    };
}
