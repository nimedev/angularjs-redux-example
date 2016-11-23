/**
 * Component use to show a counter
 * @module counter.component
 */

import { counterDecrease, counterIncrease } from '../../redux/modules/counter'
const template = require('./counter.html')

const mapStateToThis = ({ counter }) => ({
  value: counter.value
})

const mapDispatchToThis = {
  counterDecrease,
  counterIncrease
}

/**
 * Class representing a controller for counter component
 */
export class CounterController {

  public unsubscribeConnect

  // Use the $inject property to ensure proper functionality after minification
  public static $inject = ['$ngRedux']

  /**
   * Create a controller
   * @param {Object} $ngRedux - …
   */
  constructor(private $ngRedux) {
    this.unsubscribeConnect = this.$ngRedux
      .connect(mapStateToThis, mapDispatchToThis)(this)
  }

  /**
   * When component is destroyed
   */
  $onDestroy() {
    this.unsubscribeConnect()
  }
}

/**
 * Component object
 */
const counterComponent: ng.IComponentOptions = {
  controller: CounterController,
  template
}

export default counterComponent