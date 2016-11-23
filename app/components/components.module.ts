/**
 * @module components.module
 */

import counterModule from './counter'
import counterControlsModule from './counter-controls'

/**
 * Module name
 */
export default angular
  .module('components', [
    counterModule,
    counterControlsModule
  ])
  .name