/**
 * Created by Sai on 10/16/15.
 */
(function() {
  'use strict';

  angular.module('labs')
    .factory ('TreeServiceUtils', function (ivhTreeviewBfs) {
    var returnObj = {},
        allLeafNodeDataStore=[],
        treeFormattedJSON={};
    /* Initialization */
    treeFormattedJSON['name'] = 'All';

    function findIfNodeExists(givenArray,name){
      var returnObject =  _.find(givenArray, function(obj) {
        return obj.name == name;
      });
      return returnObject
    }
    function organizeParents(parent,child,leafAudienceSize){
      var childFound;
      if(! _.isArray(parent.children)){
        parent.children=[];
      }
      else{
        childFound=findIfNodeExists(parent.children,child.name);
      }
      if(parent.audienceSize)
        parent.audienceSize=(parseInt(parent.audienceSize)+parseInt(leafAudienceSize));
      else
        parent.audienceSize=parseInt(leafAudienceSize);
      // array is defined
      if(!childFound){
        child.children=[];
        parent.children.push(child);
        return parent.children[parent.children.length-1];
      }
      return childFound;
    }

    returnObj={
      getTreeFormattedJSON: function(){
        return treeFormattedJSON;
      },
      addAllLeafNodes:function(ivhTree,treeDataStore){
        ivhTreeviewBfs(ivhTree,function(node,parentNodes){
          if(typeof node.children == "undefined"){
            _.forEach(parentNodes,function(parentNode){
              if(findIfNodeExists(treeDataStore,parentNode.name)){
                allLeafNodeDataStore.push(node);
              }
            });
          }
        });
      },
      getAllLeafNodesDataStore: function(){
        return allLeafNodeDataStore;
      },
      removeLeafFromLeafNodesDataStore: function(node){
        //todo:remove by traversing  this will not help
        returnObj.removeFromDataStore(allLeafNodeDataStore,node);
      },
      buildJSONTree: function(facebookDataStore){
        _.forEach(facebookDataStore,function(value,key){
          if(_.isArray(value['path'] ) && value['path'].length>1){
            var result;
            var pathObj;
            _.forEach(value['path'],function(pathValue,index){
              pathObj={};
              pathObj={'name':pathValue,label:pathValue,selectedNode:true};
              if(index==0){
                // first element in the path
                result = organizeParents(treeFormattedJSON,pathObj,value.audienceSize);
              }
              else if((value['path'].length-1)!= index){
                // not first , not last element, Some where in middle
                result = organizeParents(result,pathObj,value.audienceSize);
              }
              else{
                // last element in the path
                if(!_.isArray(result.children)){
                  result.children=[];
                }
                value.selectedNode=true;
                if(result.audienceSize)
                  result.audienceSize = parseInt(result.audienceSize)+parseInt(value.audienceSize);
                else
                  result.audienceSize = parseInt(value.audienceSize);
                result.children.push(value);
              }
            });
          }
        });
      },
      isDuplicate: function(sourceArray,element){
        return _.some(sourceArray,function(currentElement){
          return element.name === currentElement.name;
        });
      },
      removeFromDataStore: function(dataStore,node){
        _.remove(dataStore, function(currentNode){
          return currentNode.name === node.name;
        });
        return dataStore;
      },
      ifInInitialState:function(dataStore){
          return dataStore.length<=0?true:false;
      }
    };
    return returnObj;
  });
}());
