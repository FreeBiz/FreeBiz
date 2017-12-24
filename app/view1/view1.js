'use strict';

angular.module('FreeBiz.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'BusinessCtrl'
        });
    }])

    .controller('BusinessCtrl', ['$scope', function ($scope) {
        $(document).ready(function () {
            $('.collapsible').collapsible();
        });

        $scope.businesses = [
            {
                name: 'מקדונלדס',
                address: 'שמאי 4 ירושלים',
                phone: '',
                type: 'מזון מהיר, המבורגר',
                websiteUrl: 'https://www.mcdonalds.co.il/',
                comments: 'פתוח בשבת'
            },
            {
                name: 'פונדק עין כרם',
                address: 'המעיין 9 ירושלים',
                phone: '053-7106663',
                type: 'איטלקי, בית קפה',
                websiteUrl: 'http://pundakeinkerem.rest.co.il/',
                comments: 'פתוח בשבת'
            },
            {
                name: 'Mian Noodles',
                address: 'שלמה המלך 22 ירושלים',
                phone: '02-9944333',
                type: 'אסייתי',
                websiteUrl: 'http://mianoodles555.wixsite.com/mianoodles',
                comments: 'פתוח בשבת'
            },
            {
                name: 'מינרט',
                address: 'שלומציון המלכה 18 ירושלים',
                phone: '02-6234470',
                type: 'לבנוני',
                websiteUrl: '',
                comments: 'פתוח בשבת'
            },
            {
                name: 'מנדרין',
                address: 'שלומציון המלכה 2 ירושלים',
                phone: '02-6252890',
                type: 'אסייתי',
                websiteUrl: '',
                comments: 'פתוח בשבת'
            },
            {
                name: 'בר טלביה',
                address: 'שופן 5 ירושלים',
                phone: '02-5811927',
                type: 'בראסרי, צרפתי',
                websiteUrl: 'http://www.talbiye.com/',
                comments: 'פתוח בשבת'
            },
        ];
    }]);