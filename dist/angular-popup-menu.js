/*!
 * angular-popup-menu
 * http://github.com/mkvster/angular-popup-menu
 * Version: 0.0.0 - 2016-10-06T02:49:48.633Z
 * License: MIT
 */


(function () { 
"use strict";
var apmModule = angular.module("angular.popup.menu", []);

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

}());
angular.module("angular.popup.menu").run(["$templateCache", function($templateCache) {$templateCache.put("templates/apmMenu.tpl.html","<div class=\"btn-group apm-menu\" role=\"group\" ng-transclude=\"\"></div>");
$templateCache.put("templates/apmMenuButton.tpl.html","<a class=\"apm-menu-button\" href=\"#\" ng-transclude=\"\"></a>");
$templateCache.put("templates/apmMenuChevron.tpl.html","<i class=\"glyphicon dropdown-toggle apm-menu-chevron\" ng-class=\"apmGlyphicon\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" <=\"\" i=\"\"></i>");
$templateCache.put("templates/apmMenuContent.tpl.html","<ul class=\"dropdown-menu pull-right apm-menu-content\" ng-transclude=\"\"></ul>");
$templateCache.put("templates/apmMenuIcon.tpl.html","<i class=\"glyphicon pull-right apm-menu-icon\" ng-class=\"apmGlyphicon\"></i>");
$templateCache.put("templates/apmMenuItem.tpl.html","<li class=\"apm-menu-item\" ng-transclude=\"\" ng-class=\"apmDivider? \'divider\' : \'\'\"></li>");}]);