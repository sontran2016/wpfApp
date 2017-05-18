define(function (require) {
  'use strict';
  var angular = require('angular');
  var _ = require('lodash');
  var controller = [
    '$scope',
    '$state',
    '$translate',
    'potentialCauseFactory',
    'data',
    'notifications',
    function ($scope,
              $state,
              $translate,
              potentialCauseFactory,
              data,
              notifications) {

      var vm = this;

      notifications.onLibraryChanged($scope, function (args) {
        $state.reload();
      });

      notifications.onTroubleCountChanged($scope, function (args) {
        $state.reload();
      });

      vm.conf = {
        module: 'potentialCauses',
        showHeading: true,
        rowClickable: false,
        heading: $translate.instant('POTENTIAL_CAUSE.HEADING'),
        editLink: 'app.potentialCauseEdit',
        commonData: data,
        getListFn: potentialCauseFactory.getPotentialCauseList,
        sorting: {
          createOnDate: 'desc'
        },
        cols: [
          {
            field: "selector",
            title: "",
            headerTemplateURL: "ng-table/headers/checkbox.html",
            show: true,
            dataType: "selector",
            width: "5%"
          },
          {
            field: "description",
            title: $translate.instant('GENERAL.POTENTIAL_CAUSE'),
            show: true,
            dataType: "text",
            width: "20%"
          },
          {
            field: "symptomName",
            title: $translate.instant('GENERAL.SYMPTOM'),
            show: true,
            dataType: "text"
          },
          {
            field: "componentName",
            title: $translate.instant('GENERAL.COMPONENT'),
            show: true,
            dataType: "componentLabel",
            width: "12%"
          },
          {
            field: "machineName",
            title: $translate.instant('GENERAL.MACHINE'),
            show: true,
            dataType: "machineLabel",
            width: "12%"
          },
          {
            field: "lineName",
            title: $translate.instant('GENERAL.LINE'),
            show: true,
            dataType: "lineLabel",
            width: "12%"
          },
          {
            field: "areaName",
            title: $translate.instant('GENERAL.AREA'),
            show: true,
            dataType: "areaLabel",
            width: "12%"
          },
          {
            field: "isActive",
            title: $translate.instant('GENERAL.ACTIVE'),
            show: true,
            dataType: "option",
            width: "5%"
          },
          {
            field: "action",
            title: "",
            show: true,
            dataType: "command",
            width: "5%"
          }
        ]
      };

    }];
  return controller;
});
