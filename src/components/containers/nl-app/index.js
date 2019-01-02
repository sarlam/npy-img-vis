
import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';
import '../../dumbs/nl-slider';
import '../../dumbs/nl-visualizer';

export default class NlApp extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String
      },
      appVersion: {
        type: String,
        value: process.env.appVersion
      },
      ENV: {
        type: String,
        value: process.env.NODE_ENV
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }

  startTour() {
    this.name = 'BOUUUUUUUUUU';
  }
}

window.customElements.define('nl-app', NlApp);
