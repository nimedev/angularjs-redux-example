/**
 * Module for counter component.
 * @module counter.module
 */

import counterComponent from './counter.component'

/**
 * Module name
 */
export default angular
  .module('counter', [])
  .component('appCounter', counterComponent)
  .name