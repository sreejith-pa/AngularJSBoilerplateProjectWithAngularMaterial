function LoginScreenCtrl ($scope, States, $http,$mdDialog,$mdMedia,$state,loginService) {
	'ngInject';

	activate();

	function activate() {
		$scope.loginActive = false;
		//TODO - insert activation code
	}

	$scope.login = function () { 
		$scope.loginActive = true;
		let test = loginService.getLoginResponse()
		$state.transitionTo(States.Dashboard.name);
	}

}
export default {
	name: 'LoginScreenCtrl',
	fn: LoginScreenCtrl
};
