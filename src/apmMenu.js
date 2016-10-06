var apmMenuController = function ($scope) {
	$scope.closeMenu = function () {
		angular.element(".apm-menu").removeClass("open");
	};
};
apmMenuController.$inject = ["$scope"];

var apmMenu = function () {
	return {
		restrict: "E",
		scope: {
		},
		templateUrl: "templates/apmMenu.tpl.html",
		replace: true,
		transclude: true,
		link: function postLink($scope, element, attrs) {
		},
		controller: apmMenuController
	};
};
apmMenu.$inject = [];

apmModule.directive("apmMenu", apmMenu);