'use strict';

function loginService($http) {
  'ngInject';

  const service = {};

  // create similar function for required business logic for particular controllers
  service.getLoginResponse = function () {
    // fill code with buzlogic needed
    return 10;
  };

  return service;

}

export default {
  name: 'loginService',
  fn: loginService
};