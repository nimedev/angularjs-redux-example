/**
 * Create the store and add middleware for redux application
 * @module create-store
 */

import makeRootReducer from './modules/reducer'

export default ($ngReduxProvider, initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = []
  if (process.env.NODE_ENV === 'development') {
    const logger = require('redux-logger')()
    middleware.push(logger)
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  $ngReduxProvider
    .createStoreWith(makeRootReducer(), middleware, undefined, initialState)
}