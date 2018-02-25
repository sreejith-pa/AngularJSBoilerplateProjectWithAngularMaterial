let states = {
		LoginScreen: {
			name: 'LoginScreen',
			controller: 'LoginScreenCtrl',
			url: '/LoginScreen',
			templateUrl: 'LoginScreen.html'
		},
		Dashboard: {
			name: 'Dashboard',
			controller: 'DashboardCtrl',
			url: '/Dashboard',
			templateUrl: 'Dashboard.html'
		}
};
export default {
	name: 'States',
	fn: states
};