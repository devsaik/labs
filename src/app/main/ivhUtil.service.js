/**
 * Created by Sai on 10/16/15.
 */
(function() {
  'use strict';

  angular.module('labs')
    .factory ('TreeServiceUtils', function () {
    var returnObj={},
        treeFormattedJSON={};
    /* Initialization */
    treeFormattedJSON['name'] = 'All';
    /* Internal Methods */
    function findChild(givenArray,name){
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
        childFound=findChild(parent.children,child.name);
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
      buildJSONTree: function(facebookDataStore){
        _.forEach(facebookDataStore,function(value,key){
          if(_.isArray(value['path'] ) && value['path'].length>1){
            var result;
            _.forEach(value['path'],function(pathValue,index){
              var pathObj={};
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
