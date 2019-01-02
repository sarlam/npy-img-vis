import {PolymerElement, html} from '@polymer/polymer/polymer-element';

import css from './style.pcss';
import template from './template.html';

export default class NlVisualizer extends PolymerElement {
  static get properties() {
    return {
      value: {
        type: Number
      }
    };
  }

  static get template() {
    return html([`<style>${css}</style> ${template}`]);
  }
}

window.customElements.define('nl-visualizer', NlVisualizer);
