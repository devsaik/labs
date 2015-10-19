/**
 * Created by rca733 on 10/16/15.
 */
(function() {
  'use strict';
  angular
    .module('labs')
    .controller('TreeSelectController', TreeSelectController);
  function TreeSelectController($timeout,$scope,ivhTreeviewMgr,ivhTreeviewBfs,TreeServiceUtils){
    $scope.treeInputUnclicked = 'mtree-div';
    $scope.hideScroll=true;
    $scope.showAll=true;
    $scope.treeDataStore=[];
    $scope.checkboxClicked = false;
    $scope.toggleValue="open";
    $scope.toggleClass="select-placeholder";
    $scope.preFormatted={};
    $scope.preFormatted.dataStore=$scope.preFormattedData;
    $scope.postFormatted={};
    $scope.postFormatted.dataStore=[];
    $scope.treeInputBlur = function(){
      //$scope.treeInputUnclicked = 'mtree-input';
      if(!$scope.showAll)
        $scope.hideScroll=true;
      if(TreeServiceUtils.ifInInitialState($scope.treeDataStore)){
        $scope.treeInputUnclicked="mtree-div";
        $scope.showAll=true;
      }
    };
    $timeout(function(){
      $('.mtree').slimScroll({
        height: '200px',
        railVisible: true,
        alwaysVisible: false
      });
    });
    TreeServiceUtils.buildJSONTree($scope.preFormatted.dataStore);
   $scope.postFormatted.dataStore.push(TreeServiceUtils.getTreeFormattedJSON());
    function checkIfAnyChildrenIsInList(selectedNode,ivhTree){
      var startChecking =false;
      ivhTreeviewBfs(ivhTree,function(node,parentNodes) {
        if(selectedNode.name==node.name){
          startChecking=true;
        }
        if(startChecking){
          // todo:optimize little bit here by hitting only children but not start at siblings
          _.forEach(parentNodes,function(currentNode){
            if(currentNode.name==selectedNode.name){
              $scope.treeDataStore = TreeServiceUtils.removeFromDataStore($scope.treeDataStore,node);
            }
          });
        }
      });
    }
    function checkIfParentIsSelected(selectedNode,ivhTree){
      ivhTreeviewBfs(ivhTree,function(node,parentNodes){
        if(selectedNode.name==node.name){
          if(parentNodes[0].selected ){
            if(parentNodes[0].name!="All"){
              _.forEach(parentNodes[0].children,function(childNode){
                $scope.treeDataStore = TreeServiceUtils.removeFromDataStore($scope.treeDataStore,childNode);
              });
              $scope.treeDataStore.push(parentNodes[0]);
              checkIfParentIsSelected(parentNodes[0],ivhTree);
            }
            else{
              $scope.showAll=true;
              $scope.treeDataStore=[];
            }
          }
        }
      });
    }
    function checkForSelectedSiblings(unSelectedNode,ivhTree){
      var nodeObj;
      ivhTreeviewBfs(ivhTree,function(node,parentNodes){
        if(unSelectedNode.name==node.name){
          _.forEach(parentNodes,function(eachParentNode){
            //if parent is in dataStore  then removeIt
            $scope.treeDataStore = TreeServiceUtils.removeFromDataStore($scope.treeDataStore,eachParentNode);

            //taking care of sibling selected nodes below
            _.forEach(eachParentNode.children,function(sibblingNode){
              if(sibblingNode.selected){
                if(!(TreeServiceUtils.isDuplicate( $scope.treeDataStore,sibblingNode))){
                  nodeObj={name:sibblingNode.name,label:sibblingNode.name,selectedNode:'selected'};
                  $scope.treeDataStore.push(sibblingNode);
                }
              }
            });
          });
        }
      });
    }
    $scope.changeCallback= function(node,isSelected,ivhTree){
      //todo: need to remove/add element(s) from addBehaviorNodes
      if(node.name=="All"){
        $scope.treeDataStore=[];
        if(node.selected){
          $scope.showAll=true;
        }
        else{
          $scope.showAll=false;
        }
      }
      else{
        $scope.showAll=false;
        var nodeObj={name:node.name,label:node.name,selectedNode:'selected'};
        if(node.selected){
          checkIfAnyChildrenIsInList(node,ivhTree);
          if(!(TreeServiceUtils.isDuplicate( $scope.treeDataStore,nodeObj)))
            $scope.treeDataStore.push(nodeObj);
          checkIfParentIsSelected(node,ivhTree);
        }
        else{
          $scope.removeNodeItem(nodeObj);
          checkForSelectedSiblings(node,ivhTree);
          $scope.showAll=false;
        }
      }
    };
    $scope.removeNodeItem= function(behavior){
      //todo: need to remove/add element(s) from addBehaviorNodes
      $scope.treeDataStore = TreeServiceUtils.removeFromDataStore($scope.treeDataStore,behavior);
      ivhTreeviewMgr.deselect($scope.postFormatted.dataStore,behavior.name);
    };
    $scope.keyUpSearch = function(){
      var text=$scope.behaviorSearch;
      ivhTreeviewMgr.expandRecursive($scope.postFormatted.dataStore,$scope.postFormatted.dataStore);
      if(text.length<=0){
        ivhTreeviewMgr.collapseRecursive($scope.postFormatted.dataStore,$scope.postFormatted.dataStore);
        ivhTreeviewMgr.expandTo($scope.postFormatted.dataStore,$scope.postFormatted.dataStore[0].children[$scope.postFormatted.dataStore[0].children.length-1]);
      }
    };
    $scope.treeInputClicked = function(event){

      if(event.target.id ==="list-all" || event.target.id==="selectedItems" || event.target.id==="item-choices"
        || event.target.id==="list-placeholder"){
        $scope.showAll=false;
        ivhTreeviewMgr.deselect($scope.postFormatted.dataStore,"All");
        _.forEach($scope.treeDataStore,function(eachNode){
          ivhTreeviewMgr.select($scope.postFormatted.dataStore,eachNode.name);
        });
        $scope.treeInputUnclicked='mtree-input-clicked';
        if($scope.toggleValue==="open"){
          $scope.hideScroll  = false;
          $scope.toggleValue = "close";
        }
        else{
          if(TreeServiceUtils.ifInInitialState($scope.treeDataStore)){
            $scope.treeInputUnclicked="mtree-div";
            $scope.showAll=true;
          }
          $scope.hideScroll=true;
          $scope.toggleValue = "open";
        }
      }
    };

  }

}());
