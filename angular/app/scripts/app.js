'use strict';

import angular from 'angular';
import onConfig from './onConfig';
import onRun from './onRun';
import 'angular-aria';
import 'angular-animate';
import 'angular-material';
import 'angular-messages';
import 'angular-ui-router';
import 'angular-ui-router.statehelper';

// angular modules
import './templates';
import './constants';
import './filters';
import './services';
import './directives';
import './controllers';

// create and bootstrap application
const requires = [
  'ngMaterial',
  'ngMessages',
  'ui.router',
  'ui.router.stateHelper',
  'templates',
  'app.constants',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

window.app = angular.module('app', requires);
angular.module('app').config(onConfig);
angular.module('app').config(['$mdIconProvider', function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  }]);
angular.module('app').run(onRun);

angular.bootstrap(document.body, ['app'], {
  strictDi: true
});
