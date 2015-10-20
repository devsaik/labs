/**
 * Created by Sai on 10/16/15.
 */
(function() {
  'use strict';

  angular.module('labs')
    .factory ('TreeServiceUtils', function (ivhTreeviewBfs) {
    var returnObj = {},
        resultDataStore={},
        treeFormattedJSON={},
        mode = 'behaviors';
    /* Initialization */
    treeFormattedJSON['name'] = 'All';
    resultDataStore[mode]=[];


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
      setMode: function(newmode){
        mode = newmode;
      },
      getTreeFormattedJSON: function(){
        return treeFormattedJSON;
      },
      addToResultDataStore:function(ivhTree,treeDataStore,addNode,allFlag){
        if(treeDataStore.length<=0){
          // UnSelect All happened
          returnObj.emptyResultDataStore();
        }
        if( typeof addNode.children == "undefined" ){
          resultDataStore[mode].push(addNode);
        }
        else{
          ivhTreeviewBfs(ivhTree,function(node,parentNodes){
            if(typeof node.children == "undefined"){
              if(allFlag){
                resultDataStore[mode].push(node);
              }
              else{
                _.forEach(parentNodes,function(parentNode){
                  if(findIfNodeExists(treeDataStore,parentNode.name)){
                    //todo: take care of duplicates here
                    resultDataStore[mode].push(node);
                  }
                });
              }

            }
          });
        }
      },
      emptyResultDataStore: function(){
        resultDataStore[mode]=[];
      },
      getResultDataStore: function(){
        return  resultDataStore[mode];
      },
      removeFromResultDataStore: function(ivhTree,removedNode){
       if(findIfNodeExists( resultDataStore[mode],removedNode.name)){
         // removedNode that is a leafNode
         resultDataStore[mode]=returnObj.removeFromDataStore( resultDataStore[mode],removedNode);
       }
         //removedNode is a parentNode, so remove all its children
         ivhTreeviewBfs(ivhTree,function(node){
            if(node.children){
              // now only non-leaf nodes are touched
              if(removedNode.name===node.name){
                // now only removed node is accessed
                _.forEach(node.children,function(eachNode){
                  // each child of removed node should be removed
                  if(typeof eachNode.children == "undefined"){
                    if(findIfNodeExists( resultDataStore[mode],eachNode.name)){
                      resultDataStore[mode] = returnObj.removeFromDataStore( resultDataStore[mode],eachNode);
                    }
                  }
                  else{
                    returnObj.removeFromResultDataStore(ivhTree,eachNode);
                  }
                });
              }
            }
         });
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
