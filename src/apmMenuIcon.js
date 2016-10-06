var apmMenuIconController = function ($scope) {
};
apmMenuIconController.$inject = ["$scope"];

var apmMenuIcon = function () {

	return {
		restrict: "E",
		scope: {
			apmGlyphicon: '=',
		},
		templateUrl: "templates/apmMenuIcon.tpl.html",
		replace: true,
		link: function postLink($scope, element, attrs) {
		},
		controller: apmMenuIconController
	};

};

apmMenuIcon.$inject = [];
apmModule.directive("apmMenuIcon", apmMenuIcon);
