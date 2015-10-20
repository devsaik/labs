/**
 * Created by rca733 on 10/16/15.
 */
(function() {
  'use strict';
  angular
    .module('labs')
    .controller('TreeSelectController', TreeSelectController);

  function TreeSelectController($timeout, $scope, ivhTreeviewMgr, ivhTreeviewBfs, TreeServiceUtils) {
    $scope.treeInputUnclicked = 'mTree-div';
    $scope.hideScroll = true;
    $scope.showAll = true;
    $scope.allCheckboxClicked = false;
    $scope.treeDataStore = [];
    $scope.checkboxClicked = false;
    $scope.toggleValue = "open";
    $scope.toggleClass = "select-placeholder";
    $scope.preFormatted = {};
    $scope.preFormatted.dataStore = $scope.preFormattedData;
    $scope.postFormatted = {};
    $scope.postFormatted.dataStore = [];

    /* Initialization */
    console.log("mode::"+$scope.mode);
    TreeServiceUtils.setMode($scope.mode);
    TreeServiceUtils.buildJSONTree($scope.preFormatted.dataStore);
    $timeout(function() {
      $('.mTree').slimScroll({
        height: '200px',
        railVisible: true,
        alwaysVisible: false
      });
    });
    /* End of Initialization*/

    $scope.treeInputBlur = function() {
      //$scope.treeInputUnclicked = 'mtree-input';
      if(!$scope.showAll)
         $scope.hideScroll = true;
      if (TreeServiceUtils.ifInInitialState($scope.treeDataStore)) {
        $scope.treeInputUnclicked = "mTree-div";
        $scope.showAll = true;
      }
      // Below Lines are Just to check the resultant data once tree-selection is done

      var resultantData=TreeServiceUtils.getResultDataStore($scope.mode);
      if(resultantData)
        console.log("RESULT DATA LENGTH for "+$scope.mode+" :: "+resultantData.length);
    };

    $scope.postFormatted.dataStore.push(TreeServiceUtils.getTreeFormattedJSON());

    function checkIfAnyChildrenIsInList(selectedNode, ivhTree) {
      var startChecking = false;
      ivhTreeviewBfs(ivhTree, function(node, parentNodes) {
        if (selectedNode.name == node.name) {
          startChecking = true;
        }
        if (startChecking) {
          // todo:optimize little bit here by hitting only children but not start at siblings
          _.forEach(parentNodes, function(currentNode) {
            if (currentNode.name == selectedNode.name) {
              $scope.treeDataStore = TreeServiceUtils.removeFromDataStore($scope.treeDataStore, node);
              TreeServiceUtils.removeFromResultDataStore(ivhTree,node);
            }
          });
        }
      });
    }

    function checkIfParentIsSelected(selectedNode, ivhTree) {
      ivhTreeviewBfs(ivhTree, function(node, parentNodes) {
        if (selectedNode.name == node.name) {
          if (parentNodes[0].selected) {
            if (parentNodes[0].name != "All") {
              _.forEach(parentNodes[0].children, function(childNode) {
                $scope.treeDataStore = TreeServiceUtils.removeFromDataStore($scope.treeDataStore, childNode);
                TreeServiceUtils.removeFromResultDataStore(ivhTree,childNode);
              });
              $scope.treeDataStore.push(parentNodes[0]);
              checkIfParentIsSelected(parentNodes[0], ivhTree);
            } else {
              $scope.showAll = true;
              $scope.allCheckboxClicked = true;
              $scope.treeDataStore = [];
              TreeServiceUtils.emptyResultDataStore();
              _.forEach(node.children,function(eachChild){
                TreeServiceUtils.addToResultDataStore(ivhTree,[],eachChild,true,$scope.mode);
              });
            }
          }
        }
      });
    }
    function checkForSelectedSiblings(unSelectedNode, ivhTree) {
      var nodeObj;
      ivhTreeviewBfs(ivhTree, function(node, parentNodes) {
        if (unSelectedNode.name == node.name) {
          _.forEach(parentNodes, function(eachParentNode) {
            //if parent is in dataStore  then removeIt
            $scope.treeDataStore = TreeServiceUtils.removeFromDataStore($scope.treeDataStore, eachParentNode,$scope.mode);

            //taking care of sibling selected nodes below
            _.forEach(eachParentNode.children, function(sibblingNode) {
              if (sibblingNode.selected) {
                if (!(TreeServiceUtils.isDuplicate($scope.treeDataStore, sibblingNode))) {
                  nodeObj = {
                    name: sibblingNode.name,
                    label: sibblingNode.name,
                    selectedNode: 'selected'
                  };
                  $scope.treeDataStore.push(sibblingNode);
                }
              }
            });
          });
        }
      });
    }
    $scope.changeCallback = function(node, isSelected, ivhTree) {

      if (node.name == "All") {
        $scope.treeDataStore = [];
        if (node.selected) {
          // Select all Nodes
          $scope.allCheckboxClicked =true;
          $scope.showAll = true;
          //For Each Child of All, Find leafNodes and add It to resultDataStore
          _.forEach(node.children,function(eachChild){
              TreeServiceUtils.addToResultDataStore(ivhTree,[],eachChild,true,$scope.mode);
          });
        } else {
          // un-Select all Nodes
          $scope.allCheckboxClicked = false;
          $scope.showAll = false;
          _.forEach(node.children,function(eachChild){
             TreeServiceUtils.removeFromResultDataStore(ivhTree,eachChild,$scope.mode);
          });
        }
      } else {
        // any other  Un-select All First
        $scope.showAll = false;
        var nodeObj = {
          name: node.name,
          label: node.name,
          selectedNode: 'selected'
        };
        if (node.selected) {
          // if any node is selected
          checkIfAnyChildrenIsInList(node, ivhTree);
          if(!(TreeServiceUtils.isDuplicate($scope.treeDataStore, nodeObj))){
             $scope.treeDataStore.push(nodeObj);
             TreeServiceUtils.addToResultDataStore(ivhTree,$scope.treeDataStore,node,false,$scope.mode);
          }
          checkIfParentIsSelected(node, ivhTree);

        } else {
          $scope.removeNodeItem(nodeObj);
          TreeServiceUtils.removeFromResultDataStore(ivhTree,node,$scope.mode);
          checkForSelectedSiblings(node, ivhTree);
          $scope.showAll = false;
          $scope.allCheckboxClicked = false;
        }
      }
    };
    $scope.removeNodeItem = function(node) {
      $scope.treeDataStore = TreeServiceUtils.removeFromDataStore($scope.treeDataStore, node);
      ivhTreeviewMgr.deselect($scope.postFormatted.dataStore, node.name);
      TreeServiceUtils.removeFromResultDataStore($scope.postFormatted.dataStore,node,$scope.mode);
    };
    $scope.keyUpSearch = function() {

      ivhTreeviewMgr.expandRecursive($scope.postFormatted.dataStore, $scope.postFormatted.dataStore);
      if (text.length <= 0) {
        ivhTreeviewMgr.collapseRecursive($scope.postFormatted.dataStore, $scope.postFormatted.dataStore);
        ivhTreeviewMgr.expandTo($scope.postFormatted.dataStore, $scope.postFormatted.dataStore[0].children[$scope.postFormatted.dataStore[0].children.length - 1]);
      }
    };
    $scope.treeInputClicked = function(event) {

      // any other click on the control will be bubbled up to  $scope.keyUpSearch

      if (event.target.id === "list-all" || event.target.id === "selectedItems" || event.target.id === "item-choices" || event.target.id === "list-placeholder") {
        if(!$scope.allCheckboxClicked){
          $scope.showAll = false;
          ivhTreeviewMgr.deselect($scope.postFormatted.dataStore, "All");
          _.forEach($scope.treeDataStore, function(eachNode) {
            ivhTreeviewMgr.select($scope.postFormatted.dataStore, eachNode.name);
          });
        }
        else{
          $scope.showAll = true;
          ivhTreeviewMgr.select($scope.postFormatted.dataStore, "All");
        }

        $scope.treeInputUnclicked = 'mTree-input-clicked';
        if ($scope.toggleValue === "open") {
          $scope.hideScroll = false;
          $scope.toggleValue = "close";
        } else {
          if (TreeServiceUtils.ifInInitialState($scope.treeDataStore)) {
            $scope.treeInputUnclicked = "mTree-div";
            $scope.showAll = true;
          }
          $scope.hideScroll = true;
          $scope.toggleValue = "open";
        }
      }
    };

  }

}());
