'use strict';

// import appSettings from './settings';

function onRun($rootScope) {
  'ngInject';

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    console.log(toState);
    console.log(event);
  });

}

export default onRun;
