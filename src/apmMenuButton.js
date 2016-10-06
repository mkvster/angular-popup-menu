var apmMenuButtonController = function ($scope) {
};
apmMenuButtonController.$inject = ["$scope"];

var apmMenuButton = function () {
	return {
		restrict: "E",
		scope: {
		},
		templateUrl: "templates/apmMenuButton.tpl.html",
		replace: true,
		transclude: true,
		link: function postLink($scope, element, attrs) {
		},
		controller: apmMenuButtonController
	};
};
apmMenuButton.$inject = [];

apmModule.directive("apmMenuButton", apmMenuButton);
