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
    function findIfNodeExists(givenArray,name){
      var returnObject =  _.find(givenArray, function(obj) {
        return obj.name == name;
      });
      return returnObject
    }
    function organizeParents(parent,child){
      var childFound;
      if(! _.isArray(parent.children)){
        parent.children=[];
      }
      else{
        childFound=findIfNodeExists(parent.children,child.name);
      }
      // array is defined
      if(!childFound){
        child.children=[];
        parent.children.push(child);
        return parent.children[parent.children.length-1];
      }
      return childFound;
    }

    returnObj={
      buildJSONTree: function(facebookDataStore){
        _.forEach(facebookDataStore,function(value,key){
          if(_.isArray(value['path'] ) && value['path'].length>1){
            var result;
            var pathObj;
            var existingChild;
            _.forEach(value['path'],function(pathValue,index){
              pathObj={};
              pathObj={'name':pathValue,label:pathValue,selectedNode:true};
              if(index==0){
                // first element in the path
                result = organizeParents(treeFormattedJSON[mode],pathObj);
              }
              else if((value['path'].length-1)!= index){
                // not first , not last element, Some where in middle
                result = organizeParents(result,pathObj);
              }
              else{
                // last element in the path
                if(!_.isArray(result.children)){
                  result.children=[];
                }
                 existingChild = findIfNodeExists(result.children,value.name);
                if(existingChild){
                 for(var prop in value){
                   existingChild[prop] =value[prop];
                 }
                }else{
                  value.selectedNode=true;
                  result.children.push(value);
                }

              }
            });
          }
        });
      },
      setMode: function(newmode){
        mode = newmode;
        resultDataStore[mode]=[];
        treeFormattedJSON[mode]={};
        treeFormattedJSON[mode]['name'] = 'All';
      },
      getTreeFormattedJSON: function(){
        return treeFormattedJSON[mode];
      },
      addToResultDataStore:function(ivhTree,treeDataStore,addNode,allFlag,mode){
        if(treeDataStore.length<=0){
          // UnSelect All
          returnObj.emptyResultDataStore();
        }
        if(mode === "interests"){
          resultDataStore[mode].push(addNode);
        }
        else{
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
                      if(! returnObj.isDuplicate(resultDataStore[mode],node))
                        resultDataStore[mode].push(node);
                    }
                  });
                }

              }
            });
          }

        }
      },
      emptyResultDataStore: function(){
        resultDataStore[mode]=[];
      },
      getResultDataStore: function(mode){
        return  resultDataStore[mode];
      },
      removeFromResultDataStore: function(ivhTree,removedNode,mode){

        if(findIfNodeExists( resultDataStore[mode],removedNode.name)){
          // removedNode that is a leafNode
          resultDataStore[mode]=returnObj.removeFromDataStore( resultDataStore[mode],removedNode);
        }
        if(mode !== "interests") {
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
        }
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
