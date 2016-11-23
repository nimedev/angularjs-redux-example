/**
 * Component use to increment or decrement a counter
 * @module counter-controls.component
 */

const template = require('./counter-controls.html')
import './counter-controls.css'

/**
 * Component object
 */
const counterControlsComponent: ng.IComponentOptions = {
  bindings: {
    onDecrease: '&',
    onIncrease: '&'
  },
  template
}

export default counterControlsComponent