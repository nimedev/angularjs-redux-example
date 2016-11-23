/**
 * Main module used to bootstrap de application
 * @module index
 */
/// <reference path="./typings/index.d.ts" />

// Import base styles before all components
import './styles'

import 'angular'
import ngRedux from 'ng-redux'
import createStore from './redux/create-store'
import constants from './constants'
import appModule from './app.module'

const appName = constants.appName

// Define angular app
angular
  .module(appName, [
    appModule,
    ngRedux
  ])
  .config([
    '$compileProvider', '$logProvider', '$ngReduxProvider',
    ($compileProvider, $logProvider, $ngReduxProvider) => {
      // Actions in production
      if (constants.env === 'production') {
        // Disable debug data. Enable in development if use Proactor or Batarang
        $compileProvider.debugInfoEnabled(false)

        // Disable log in production
        $logProvider.debugEnabled(false)
      }

      // Create redux store
      createStore($ngReduxProvider)
    }
  ])
  .constant('constants', constants)

// Load app when document is ready
const htmlDocument = angular.element(document)
const startApp = () => angular.bootstrap(htmlDocument, [appName])
htmlDocument.ready(startApp)