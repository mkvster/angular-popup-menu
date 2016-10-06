var apmMenuItemController = function ($scope) {
};
apmMenuItemController.$inject = ["$scope"];

var apmMenuItem = function () {
	return {
		restrict: "E",
		scope: {
			apmDivider: "="
		},
		templateUrl: "templates/apmMenuItem.tpl.html",
		replace: true,
		transclude: true,
		link: function postLink($scope, element, attrs) {
		},
		controller: apmMenuItemController
	};
};

apmMenuItem.$inject = [];
apmModule.directive("apmMenuItem", apmMenuItem);
