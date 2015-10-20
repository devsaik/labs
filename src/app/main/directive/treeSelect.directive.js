/**
 * Created by rca733 on 10/16/15.
 */
(function() {
  'use strict';

  angular
    .module('labs')
    .directive('treeSelect', treeSelectDirective);
  function treeSelectDirective(){
    return{
      restrict: 'E',
      replace: true,
      templateUrl:'app/main/directive/treeSelect.partial.html',
      scope: {
        preFormattedData: '=',
        mode: '='
      },
      controller: 'TreeSelectController'
    }
  }

}());
