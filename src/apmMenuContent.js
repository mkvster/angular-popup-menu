var apmMenuContentController = function ($scope) {
};
apmMenuContentController.$inject = ["$scope"];


var apmMenuContent = function () {
	return {
		restrict: "E",
		scope: {
		},
		templateUrl: "templates/apmMenuContent.tpl.html",
		replace: true,
		transclude: true,
		link: function postLink($scope, element, attrs) {
		},
		controller: apmMenuContentController
	};
};
apmMenuContent.$inject = [];

apmModule.directive("apmMenuContent", apmMenuContent);
