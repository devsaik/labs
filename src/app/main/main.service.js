/**
 * Created by Selwyn Lehmann on 10/15/15.
 */

(function() {
  'use strict';

  angular.module('labs')
    .factory ('treeService', function () {

    function returnLeafNodes(data) {
      var foundLeaves = [];
      var unvisitedStack = [];

      unvisitedStack.push(data);

      while (unvisitedStack.length > 0) {
        var currentNode = unvisitedStack.pop();
        var currentNodeChildren = currentNode.children;
        if (currentNodeChildren) {
          for (var i=0; i < currentNodeChildren.length; i++) {
            unvisitedStack.push(currentNodeChildren[i]);
          }
        } else {
          foundLeaves.push(currentNode);
        }
      }
      return foundLeaves;
    }
  });

})();
