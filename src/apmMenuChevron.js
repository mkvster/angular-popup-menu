var apmMenuChevronController = function ($scope) {
};
apmMenuChevronController.$inject = ["$scope"];

var apmMenuChevron = function () {
	return {
		restrict: "E",
		scope: {
			apmGlyphicon: '=',
		},
		templateUrl: "templates/apmMenuChevron.tpl.html",
		replace: true,
		transclude: true,
		link: function postLink($scope, element, attrs) {
		},
		controller: apmMenuChevronController
	};
};
apmMenuChevron.$inject = [];

apmModule.directive("apmMenuChevron", apmMenuChevron);

