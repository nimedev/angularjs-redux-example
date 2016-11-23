/**
 * Module for counter-controls component.
 * @module counter-controls.module
 */

import counterControlsComponent from './counter-controls.component'

/**
 * Module name
 */
export default angular
  .module('counterControls', [])
  .component('appCounterControls', counterControlsComponent)
  .name