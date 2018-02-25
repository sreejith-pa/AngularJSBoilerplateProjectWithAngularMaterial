function onConfig($urlRouterProvider, $locationProvider,stateHelperProvider, States) {
	'ngInject';

	$urlRouterProvider.otherwise(States.LoginScreen.name);

	stateHelperProvider.state({

				name: 'globalController',
				template: '<ui-view />',
				abstract: true,
				controller: 'GlobalCtrl',
				children: [
					States.LoginScreen,
					States.Dashboard
			]

	}, {
		keepOriginalNames: true
	});

	}
export default onConfig;
