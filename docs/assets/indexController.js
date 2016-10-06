// indexController.js
(function () {
    "use strict";

    var indexController = function () {
        this.menuItems = [
            {
                caption: 'Select',
                divider: false,
                glyphicon: 'glyphicon-check'
            },
            {
                caption: '',
                divider: true,
                glyphicon: ''
            },
            {
                caption: 'Cut',
                divider: false,
                glyphicon: 'glyphicon-scissors'
            },
            {
                caption: 'Copy',
                divider: false,
                glyphicon: 'glyphicon-copy'
            },
            {
                caption: 'Paste',
                divider: false,
                glyphicon: 'glyphicon-paste'
            },
            {
                caption: 'Delete',
                divider: false,
                glyphicon: 'glyphicon-remove'
            },
            {
                caption: '',
                divider: true,
                glyphicon: ''
            },
            {
                caption: 'Edit...',
                divider: false,
                glyphicon: 'glyphicon-edit'
            },
        ];

        this.onMenuClick = function (menuItem) {
            alert(menuItem.caption + " clicked");
        }
    }

    indexController.$inject = [];
    var module = angular.module("demoApp");
    module.controller("indexController", indexController);
})();
