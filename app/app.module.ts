/**
 * Module for app component.
 * @module app.module
 */

import componentsModule from './components'
import appComponent from './app.component'

/**
 * Module name
 */
export default angular
  .module('app', [componentsModule])
  .component('rootApp', appComponent)
  .name