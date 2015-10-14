(function() {
  'use strict';

  angular
    .module('labs')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr,$scope,ivhTreeviewMgr,ivhTreeviewBfs) {
    var vm = this;
    $scope.treeInputUnclicked = 'mtree-div';
    $scope.hideScroll=true;
    $scope.showAll=true;
    $scope.obj={};
    $scope.obj.field="ALL";
    $scope.toggleClass="select-placeholder";
    $scope.treeInputClicked = function(){
      $scope.treeInputUnclicked='mtree-input-clicked';

      if($scope.toggleClass === "select-placeholder"){
        $scope.toggleClass = "select-placeholder-toggle";
        $scope.hideScroll=false;
      }
      else{
        $scope.toggleClass = "select-placeholder";
        $scope.hideScroll=true;
      }
    };
    $scope.treeInputBlur = function(){
      //$scope.treeInputUnclicked = 'mtree-input';
      $scope.hideScroll=true;
    };
    $timeout(function(){
      $('.mtree').slimScroll({
        height: '200px',
        railVisible: true,
        alwaysVisible: false
      });
    });
    $scope.multipleDemo = {};
    $scope.people = [
      { name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
      { name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
      { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
      { name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
      { name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
      { name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
      { name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
      { name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
      { name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
      { name: 'Nicolás',   email: 'nicolas@email.com',    age: 43, country: 'Colombia' }
    ];
    $scope.someGroupFn = function (item){

      if (item.name[0] >= 'A' && item.name[0] <= 'M')
        return 'ALL';

      if (item.name[0] >= 'N' && item.name[0] <= 'Z')
        return 'From N - Z';

    };
    $scope.doNothing = function(event){
      event.preventDefault();
      console.log($item+$model);
    };
    $scope.multipleDemo.selectedPeopleWithGroupBy = [$scope.people[8], $scope.people[6]];


    vm.unfancy={};

    vm.unfancy.bag=[
      {
        "id": null,
        "internalId": "6002714895372",
        "name": "All frequent travelers",
        "description": "People whose activities on Facebook suggest they are Frequent travelers.",
        "audienceSize": "289866522",
        "type": "behaviors",
        "path": [
          "Travel",
          "All frequent travelers"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6002714898572",
        "name": "Small business owners",
        "description": "People who list themselves as small business owners or own small business pages on Facebook",
        "audienceSize": "59964359",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Small business owners"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6002764392172",
        "name": "FB Payments (All)",
        "description": "People who have used Facebook Payments platform in the past 90 days",
        "audienceSize": "10294826",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "FB Payments (All)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6003050295572",
        "name": "Photo uploaders",
        "description": "Users who uploaded >50 photos on Facebook in last month. ",
        "audienceSize": "66804605",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Photo uploaders"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6003050229172",
        "name": "Event creators",
        "description": "People who have recently created a Facebook event.",
        "audienceSize": "6472982",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Event creators"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6003808923172",
        "name": "Technology early adopters",
        "description": "People who are likely to be a Technology Early Adopter",
        "audienceSize": "112579426",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Technology early adopters"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6003986707172",
        "name": "Primary OS Windows 7",
        "description": "People who primarily connect to Facebook using Windows 7.",
        "audienceSize": "394709264",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Operating System Used",
          "Primary OS Windows 7"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6003966451572",
        "name": "Primary OS Mac OS X",
        "description": "People who primarily connect to Facebook using Mac OS X.",
        "audienceSize": "51462150",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Operating System Used",
          "Primary OS Mac OS X"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6003966450972",
        "name": "Primary OS Windows Vista",
        "description": "People who tend to connect to Facebook using Windows Vista",
        "audienceSize": "12980484",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Operating System Used",
          "Primary OS Windows Vista"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6003966466972",
        "name": "Primary OS Windows XP",
        "description": "People who primarily connect to Facebook using Windows XP.",
        "audienceSize": "118178315",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Operating System Used",
          "Primary OS Windows XP"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004386303972",
        "name": "iPhone 4S",
        "description": "People who access the Internet through a iPhone 4S mobile device",
        "audienceSize": "32388129",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 4S"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004383941372",
        "name": "iPhone 4",
        "description": "People who access the Internet through a iPhone 4 mobile device",
        "audienceSize": "23929191",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 4"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004386044572",
        "name": "All Android devices",
        "description": "People who access the Internet through an Android mobile device",
        "audienceSize": "902937259",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Operating System",
          "All Android devices"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004383149972",
        "name": "Feature phones",
        "description": "People who access the Internet through a feature phone",
        "audienceSize": "45897875",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Feature phones"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004383890572",
        "name": "iPod Touch",
        "description": "People who access the Internet through an iPod Touch mobile device",
        "audienceSize": "4028800",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPod Touch"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004385895772",
        "name": "Windows Phones",
        "description": "People who access the Internet through Windows phones.",
        "audienceSize": "11716689",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Operating System",
          "Windows Phones"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004384041172",
        "name": "All iOS devices",
        "description": "People who access the Internet through an Apple mobile device",
        "audienceSize": "301257070",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Operating System",
          "All iOS devices"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004383806772",
        "name": "iPad 3",
        "description": "People who access the Internet through an iPad 3",
        "audienceSize": "11864159",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPad 3"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004383808772",
        "name": "iPad 2",
        "description": "People who access the Internet through an iPad 2",
        "audienceSize": "22752889",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPad 2"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004383767972",
        "name": "iPad 1",
        "description": "People who access the Internet through an iPad 1",
        "audienceSize": "5245797",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPad 1"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004386010572",
        "name": "Samsung",
        "description": "People who access the Internet through a Samsung Android mobile device",
        "audienceSize": "522046997",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004385934572",
        "name": "BlackBerry",
        "description": "People who access the Internet through a Blackberry mobile device",
        "audienceSize": "14401949",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "BlackBerry"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004385886572",
        "name": "HTC",
        "description": "People who access the Internet through an HTC Android mobile device",
        "audienceSize": "28470252",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "HTC"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004385868372",
        "name": "LG",
        "description": "People who access the Internet through an LG Android mobile device",
        "audienceSize": "74757627",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "LG"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004385865172",
        "name": "Sony",
        "description": "People who access the Internet through a Sony Android mobile device",
        "audienceSize": "53925971",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004382299972",
        "name": "All mobile devices",
        "description": "People who access the Internet through mobile devices",
        "audienceSize": "1332110754",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All mobile devices"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004383049972",
        "name": "Smartphones and tablets",
        "description": "People who access the Internet through a smart phone or tablet device.",
        "audienceSize": "1226037021",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Smartphones and tablets"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004385879572",
        "name": "Motorola",
        "description": "People who access the Internet through a Motorola Android mobile device",
        "audienceSize": "46208810",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Motorola"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004854404172",
        "name": "Technology late adopters",
        "description": "People who access Facebook on older devices or operating systems before Windows 7, Mac OS X or Windows NT 6.2.",
        "audienceSize": "332476746",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Technology late adopters"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004883585572",
        "name": "iPhone 5",
        "description": "People who access the Internet through an iPhone 5",
        "audienceSize": "309462056",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 5"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004948896972",
        "name": "FB Payments (Recent)",
        "description": "People who have used Facebook Payments platform in the past 30 days.",
        "audienceSize": "2571292",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "FB Payments (Recent)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004948896772",
        "name": "FB Payments (Higher than average spend)",
        "description": "People who have spent more than $100 on Facebook Payments platform in the past 3 months.",
        "audienceSize": "923189",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "FB Payments (Higher than average spend)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004982581772",
        "name": "Unity Plugin",
        "description": "People who have the unity plug in installed.",
        "audienceSize": "71554851",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Unity Plugin"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6006298077772",
        "name": "Primary OS Windows 8",
        "description": "People who primarily connect to Facebook using Windows 8.",
        "audienceSize": "137610661",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Operating System Used",
          "Primary OS Windows 8"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007078565383",
        "name": "New smartphone and tablet owners",
        "description": "People who are new smartphone or tablet users.",
        "audienceSize": "289728653",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "New smartphone and tablet owners"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007101597783",
        "name": "Business travelers",
        "description": "People who frequently take trips over 300 miles during the week, which indicates they likely travel for business.",
        "audienceSize": "842767",
        "type": "behaviors",
        "path": [
          "Travel",
          "Business travelers"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007103770983",
        "name": "Intender - New York",
        "description": "People whose activities on Facebook suggest they are interested in travel to New York.",
        "audienceSize": "96776",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - New York"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155225983",
        "name": "Intender - Germany",
        "description": "People whose activities on Facebook suggest they are interested in travel to Germany.",
        "audienceSize": "814464",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Germany"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155246383",
        "name": "Intender - France",
        "description": "People whose activities on Facebook suggest they are interested in travel to France.",
        "audienceSize": "849630",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - France"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155263583",
        "name": "Intender - Italy",
        "description": "People whose activities on Facebook suggest they are interested in travel to Italy.",
        "audienceSize": "1451137",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Italy"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155272983",
        "name": "Intender - Mexico",
        "description": "People whose activities on Facebook suggest they are interested in travel to Mexico.",
        "audienceSize": "2250783",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Mexico"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155299383",
        "name": "Intender - Dubai",
        "description": "People whose activities on Facebook suggest they are interested in travel to Dubai.",
        "audienceSize": "122761",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Dubai"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155301583",
        "name": "Intender - Netherlands",
        "description": "People whose activities on Facebook suggest they are interested in travel to the Netherlands.",
        "audienceSize": "86953",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Netherlands"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155302983",
        "name": "Intender - Spain",
        "description": "People whose activities on Facebook suggest they are interested in travel to Spain.",
        "audienceSize": "464017",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Spain"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155306783",
        "name": "Intender - Brazil",
        "description": "People whose activities on Facebook suggest they are interested in travel to Brazil.",
        "audienceSize": "4191747",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Brazil"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155309183",
        "name": "Intender - Thailand",
        "description": "People whose activities on Facebook suggest they are interested in travel to Thailand.",
        "audienceSize": "701355",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Thailand"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155315383",
        "name": "Intender - England",
        "description": "People whose activities on Facebook suggest they are interested in travel to England.",
        "audienceSize": "673273",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - England"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007157439983",
        "name": "Intender - Australia",
        "description": "People whose activities on Facebook suggest they are interested in travel to Australia.",
        "audienceSize": "311315",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Australia"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007157438583",
        "name": "Intender - Las Vegas",
        "description": "People whose activities on Facebook suggest they are interested in travel to Las Vegas.",
        "audienceSize": "147365",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Las Vegas"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007155404383",
        "name": "Intender - Orlando",
        "description": "People whose activities on Facebook suggest they are interested in travel to Orlando.",
        "audienceSize": "33757",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Orlando"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007157427183",
        "name": "Intender - (Any Destination)",
        "description": "People whose activities on Facebook suggest they are interested in travel to any destination.",
        "audienceSize": "14886885",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - (Any Destination)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007178219583",
        "name": "Used travel app (2 weeks)",
        "description": "People who have used a travel app in the past 2 weeks.",
        "audienceSize": "2142637",
        "type": "behaviors",
        "path": [
          "Travel",
          "Used travel app (2 weeks)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007178249383",
        "name": "Used travel app (1 month)",
        "description": "People who have used a travel app in the last month.",
        "audienceSize": "3523553",
        "type": "behaviors",
        "path": [
          "Travel",
          "Used travel app (1 month)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007207881183",
        "name": "Intender - San Francisco",
        "description": "People whose activities on Facebook suggest they are interested in travel to San Francisco.",
        "audienceSize": "64535",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - San Francisco"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007207903583",
        "name": "Intender - Los Angeles",
        "description": "People whose activities on Facebook suggest they are interested in travel to Los Angeles.",
        "audienceSize": "68446",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Los Angeles"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007384133183",
        "name": "Currently traveling",
        "description": "People whose activities on Facebook suggest they are Currently traveling.",
        "audienceSize": "28980904",
        "type": "behaviors",
        "path": [
          "Travel",
          "Currently traveling"
        ],
        "realTimeCluster": true,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007481031783",
        "name": "Galaxy S III",
        "description": "People who are likely to own Samsung Galaxy S III devices.",
        "audienceSize": "27569987",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy S III"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6007847947183",
        "name": "Console gamers",
        "description": "People whoâ€™ve connected to Facebook from gaming consoles, like pages related to console games or gaming systems, and other console gaming related activities",
        "audienceSize": "77892262",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Console gamers"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6008261969983",
        "name": "Returned from trip 1 week ago",
        "description": "People whose activities on Facebook suggest they returned from traveling within one week.",
        "audienceSize": "29982505",
        "type": "behaviors",
        "path": [
          "Travel",
          "Returned from trip 1 week ago"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6008297697383",
        "name": "Returned from trip 2 weeks ago",
        "description": "People whose activities on Facebook suggest they returned from traveling within 2 weeks.",
        "audienceSize": "36314093",
        "type": "behaviors",
        "path": [
          "Travel",
          "Returned from trip 2 weeks ago"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6008312782183",
        "name": "Intender - Beach",
        "description": "People whose activities on Facebook suggest they are interested in travel to the Beach.",
        "audienceSize": "95259",
        "type": "behaviors",
        "path": [
          "Travel",
          "Planning to travel",
          "Intender - Beach"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6008868254383",
        "name": "Kindle Fire",
        "description": "People who are likely to own a Kindle Fire",
        "audienceSize": "1257062",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Amazon",
          "Kindle Fire"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6010095777183",
        "name": "iPhone 5S",
        "description": "People who access the internet through an iPhone 5S",
        "audienceSize": "54752412",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 5S"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6010095794383",
        "name": "iPhone 5C",
        "description": "People who access the internet through an iPhone 5C.",
        "audienceSize": "20334277",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 5C"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6010231666183",
        "name": "LG G2",
        "description": "People who are likely to own LG G2 devices.",
        "audienceSize": "3372555",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "LG",
          "LG G2"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6011191254383",
        "name": "iPad 4",
        "description": null,
        "audienceSize": "14180441",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPad 4"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6011191259183",
        "name": "iPad Mini 1",
        "description": null,
        "audienceSize": "21421482",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPad Mini 1"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6011244513583",
        "name": "iPad Air",
        "description": null,
        "audienceSize": "15155625",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPad Air"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6011244510983",
        "name": "iPad Mini 2",
        "description": null,
        "audienceSize": "6947072",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPad Mini 2"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6011071878583",
        "name": "Lumia 900",
        "description": "People who are likely to own a Lumia 900",
        "audienceSize": "186019",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Lumia 900"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6011071906183",
        "name": "Lumia 920",
        "description": "People who are likely to own a Lumia 920",
        "audienceSize": "882787",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Lumia 920"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6011390267783",
        "name": "Nokia",
        "description": null,
        "audienceSize": "53886274",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6011390261383",
        "name": "Huawei",
        "description": null,
        "audienceSize": "33799853",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Huawei"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013023098583",
        "name": "Galaxy Ace",
        "description": null,
        "audienceSize": "7316677",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Ace"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015852294783",
        "name": "Galaxy Y",
        "description": "People who are likely to own Galaxy Y devices.",
        "audienceSize": "9631382",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Y"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013016790183",
        "name": "Galaxy S4",
        "description": null,
        "audienceSize": "49051720",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy S4"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013016790983",
        "name": "C3",
        "description": null,
        "audienceSize": "6145603",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "C3"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017211983",
        "name": "Galaxy S III Mini",
        "description": null,
        "audienceSize": "18548354",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy S III Mini"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017213583",
        "name": "Curve 8520",
        "description": null,
        "audienceSize": "2785496",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "BlackBerry",
          "Curve 8520"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017214183",
        "name": "X2-01",
        "description": null,
        "audienceSize": "6144996",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "X2-01"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017235183",
        "name": "Galaxy Note II",
        "description": null,
        "audienceSize": "130187",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Note II"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017235783",
        "name": "Galaxy S Duos",
        "description": null,
        "audienceSize": "6819266",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy S Duos"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017236583",
        "name": "Galaxy Grand",
        "description": null,
        "audienceSize": "8651037",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Grand"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017237183",
        "name": "C1-01",
        "description": null,
        "audienceSize": "3455458",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "C1-01"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017247383",
        "name": "Asha 200",
        "description": null,
        "audienceSize": "2870254",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Asha 200"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017270583",
        "name": "Asha 311",
        "description": null,
        "audienceSize": "3085459",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Asha 311"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017271383",
        "name": "Curve 9320",
        "description": null,
        "audienceSize": "2127318",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "BlackBerry",
          "Curve 9320"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017271983",
        "name": "Galaxy Y Duos",
        "description": null,
        "audienceSize": "2950959",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Y Duos"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017273183",
        "name": "Optimus L5",
        "description": null,
        "audienceSize": "3021781",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "LG",
          "Optimus L5"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017273383",
        "name": "Asha 302",
        "description": null,
        "audienceSize": "2690104",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Asha 302"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017273783",
        "name": "Galaxy Mini",
        "description": null,
        "audienceSize": "2105227",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Mini"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017273983",
        "name": "Lumia 520",
        "description": null,
        "audienceSize": "7935679",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Lumia 520"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017274183",
        "name": "Asha",
        "description": null,
        "audienceSize": "32876411",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Asha"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017274383",
        "name": "Optimus L3",
        "description": null,
        "audienceSize": "1979011",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "LG",
          "Optimus L3"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017284183",
        "name": "Galaxy Note",
        "description": null,
        "audienceSize": "2997400",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Note"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017284783",
        "name": "Bold 9700",
        "description": null,
        "audienceSize": "1732380",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "BlackBerry",
          "Bold 9700"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017285383",
        "name": "5130 XpressMusic",
        "description": null,
        "audienceSize": "901141",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "5130 XpressMusic"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017295783",
        "name": "Asha 305",
        "description": null,
        "audienceSize": "2697256",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Asha 305"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017296583",
        "name": "2700 Classic",
        "description": null,
        "audienceSize": "1001791",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "2700 Classic"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017297383",
        "name": "Curve 9220",
        "description": null,
        "audienceSize": "1223975",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "BlackBerry",
          "Curve 9220"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017297983",
        "name": "Galaxy Ace 2",
        "description": null,
        "audienceSize": "2665500",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Ace 2"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017298183",
        "name": "Galaxy Pocket Duos",
        "description": null,
        "audienceSize": "567217",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Pocket Duos"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017298783",
        "name": "Galaxy S Advance",
        "description": null,
        "audienceSize": "2133623",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy S Advance"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017308783",
        "name": "Galaxy S 4 Mini",
        "description": null,
        "audienceSize": "12750135",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy S 4 Mini"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017309783",
        "name": "Champ",
        "description": "People who likely to own a Champ device (c3300k).",
        "audienceSize": "1020266",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Champ"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017310583",
        "name": "Optimus L7",
        "description": null,
        "audienceSize": "1114118",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "LG",
          "Optimus L7"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017310783",
        "name": "Galaxy Pocket Plus",
        "description": null,
        "audienceSize": "3694717",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Pocket Plus"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013023097583",
        "name": "Galaxy S II",
        "description": null,
        "audienceSize": "3626309",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy S II"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013279353983",
        "name": "Galaxy Note 3",
        "description": "People who likely own Galaxy Note 3 from Samsung.",
        "audienceSize": "15810844",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Note 3"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013516370183",
        "name": "Commuters",
        "description": "People likely to commute from home to their workplace on weekdays.",
        "audienceSize": "49486817",
        "type": "behaviors",
        "path": [
          "Travel",
          "Commuters"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6014808618583",
        "name": "Galaxy S5",
        "description": "People who are likely to own Samsung Galaxy S5 devices.",
        "audienceSize": "37262499",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy S5"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6014809400783",
        "name": "Nexus 5",
        "description": null,
        "audienceSize": "2378776",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Google",
          "Nexus 5"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6014809859183",
        "name": "HTC One",
        "description": "People who are likely to own HTC One devices.",
        "audienceSize": "10577013",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "HTC",
          "HTC One"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015235368383",
        "name": "4G (US)",
        "description": "People who primarily access Facebook using a 4G connection",
        "audienceSize": "225253004",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Network Connection",
          "4G (US)"
        ],
        "realTimeCluster": null,
        "countryAccess": {
          "include": [
            "US"
          ],
          "exclude": null
        },
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015235450983",
        "name": "3G (US)",
        "description": "People who primarily access Facebook using a 3G connection",
        "audienceSize": "672118604",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Network Connection",
          "3G (US)"
        ],
        "realTimeCluster": null,
        "countryAccess": {
          "include": [
            "US"
          ],
          "exclude": null
        },
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015235462383",
        "name": "2G (US)",
        "description": "People who primarily access Facebook using a 2G connection",
        "audienceSize": "153022891",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Network Connection",
          "2G (US)"
        ],
        "realTimeCluster": null,
        "countryAccess": {
          "include": [
            "US"
          ],
          "exclude": null
        },
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015235495383",
        "name": "WiFi Connection",
        "description": "People who primarily access Facebook using a WiFi connection",
        "audienceSize": "878874341",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Network Connection",
          "WiFi Connection"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015441244983",
        "name": "Galaxy Grand 2",
        "description": "People who are likely to own a Samsung Galaxy Grand 2",
        "audienceSize": "8662471",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Grand 2"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015547847583",
        "name": "Primary Browser: Firefox",
        "description": "People who primarily connect to Facebook using Firefox.",
        "audienceSize": "99542301",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Internet Browser Used",
          "Primary Browser: Firefox"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015547900583",
        "name": "Primary Browser: Chrome",
        "description": "People who primarily connect to Facebook using Google Chrome.",
        "audienceSize": "716186975",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Internet Browser Used",
          "Primary Browser: Chrome"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015559470583",
        "name": "Expats (All)",
        "description": "People whose original country of residence is different from the current country/countries selected above",
        "audienceSize": "101604505",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (All)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015593608983",
        "name": "Primary Browser: Safari",
        "description": "People who primarily connect to Facebook using Safari.",
        "audienceSize": "398330373",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Internet Browser Used",
          "Primary Browser: Safari"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015593652183",
        "name": "Primary Browser: Opera",
        "description": "People who primarily connect to Facebook using Opera.",
        "audienceSize": "73506255",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Internet Browser Used",
          "Primary Browser: Opera"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015593776783",
        "name": "Primary Browser: Internet Explorer",
        "description": "People who primarily connect to Facebook using Internet Explorer.",
        "audienceSize": "42227375",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Internet Browser Used",
          "Primary Browser: Internet Explorer"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6015683810783",
        "name": "Facebook Page Admins",
        "description": "People who are an admin of at least 1 page.",
        "audienceSize": "219937843",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Facebook Page Admins"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016286031583",
        "name": "Smartphone Owners",
        "description": "People who connect to Facebook using a Smartphone",
        "audienceSize": "1158470116",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Smartphone Owners"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016286626383",
        "name": "Tablet Owners",
        "description": "People who connect to Facebook using a Tablet",
        "audienceSize": "211811892",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Tablet Owners"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016916298983",
        "name": "Expats (India)",
        "description": "People from India whose current country of residence is outside of India.",
        "audienceSize": "5793044",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (India)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016920243183",
        "name": "Nexus 7",
        "description": "People who are likely to own a Nexus 7",
        "audienceSize": "2403806",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Google",
          "Nexus 7"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925022783",
        "name": "Nexus 10",
        "description": "People who are likely to own a Nexus 10",
        "audienceSize": "240874",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Google",
          "Nexus 10"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925131183",
        "name": "Transformer Pad",
        "description": "People who are likely to own an Asus Transformer Pad",
        "audienceSize": "569498",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Asus",
          "Transformer Pad"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925182583",
        "name": "MeMO Pad",
        "description": "People who are likely to own an Asus MeMO Pad",
        "audienceSize": "2364074",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Asus",
          "MeMO Pad"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925196783",
        "name": "Fonepad",
        "description": "People who are likely to own an Asus Fonepad",
        "audienceSize": "1458274",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Asus",
          "Fonepad"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925328983",
        "name": "Galaxy Tab S",
        "description": "People who are likely to own a Samsung Galaxy Tab S",
        "audienceSize": "2896329",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Tab S"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925394583",
        "name": "Galaxy Tab Pro",
        "description": "People who are likely to own a Samsung Galaxy Tab Pro",
        "audienceSize": "1113303",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Tab Pro"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925404783",
        "name": "Galaxy Tab 4",
        "description": "People who are likely to own a Samsung Galaxy Tab 4",
        "audienceSize": "13317935",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Tab 4"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925643983",
        "name": "Galaxy Tab 3",
        "description": "People who are likely to own a Galaxy Tab 3",
        "audienceSize": "27348568",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Tab 3"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925657183",
        "name": "Galaxy Tab 2",
        "description": "People who are likely to own a Galaxy Tab 2",
        "audienceSize": "12824538",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Tab 2"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016925667383",
        "name": "Galaxy Tab",
        "description": "People who are likely to own a Samsung Galaxy Tab ",
        "audienceSize": "1211",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Tab"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926242183",
        "name": "Xperia E",
        "description": "People who are likely to own a Sony Xperia E",
        "audienceSize": "1718733",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia E"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926254583",
        "name": "Xperia M",
        "description": "People who are likely to own a Sony Xperia M",
        "audienceSize": "3007899",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia M"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926390583",
        "name": "Xperia P",
        "description": "People who are likely to own a Sony Xperia P",
        "audienceSize": "491770",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia P"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017857337983",
        "name": "Xperia S",
        "description": "People who are likely to own a Sony Xperia S",
        "audienceSize": "759128",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia S"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926310383",
        "name": "Xperia SL",
        "description": "People who are likely to own a Sony Xperia SLs",
        "audienceSize": "136651",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia SL"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926446983",
        "name": "Xperia SP",
        "description": "People who are likely to own a Sony Xperia SP",
        "audienceSize": "1458275",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia SP"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926471583",
        "name": "Xperia T",
        "description": "People who are likely to own a Sony Xperia T",
        "audienceSize": "302335",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia T"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926484183",
        "name": "Xperia U",
        "description": "People who are likely to own a Sony Xperia U",
        "audienceSize": "536481",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia U"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926528983",
        "name": "Xperia Z",
        "description": "People who are likely to own a Sony Xperia Z",
        "audienceSize": "2638476",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia Z"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926651383",
        "name": "Xperia Z Ultra",
        "description": "People who are interested in Xperia Z Ultra",
        "audienceSize": "784447",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia Z Ultra"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926801183",
        "name": "Xperia Z1",
        "description": "People who are likely to own a Sony Xperia Z1",
        "audienceSize": "1540141",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia Z1"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926826583",
        "name": "Xperia ZL",
        "description": "People who are likely to own a Sony Xperia ZL",
        "audienceSize": "418702",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia ZL"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6016926911983",
        "name": "Xperia ZR",
        "description": "People who are likely to own a Sony Xperia ZR",
        "audienceSize": "280421",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia ZR"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017521096783",
        "name": "Gmail Users",
        "description": "People who use Gmail",
        "audienceSize": "265758192",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Primary email domain",
          "Gmail Users"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017251892583",
        "name": "Apple Email Addresses",
        "description": "People who use Apple for email (icloud, me, mac domains)\n",
        "audienceSize": "4131602",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Primary email domain",
          "Apple Email Addresses"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017550419583",
        "name": "Yahoo Email Addresses",
        "description": "People who use Yahoo for email\n",
        "audienceSize": "221999014",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Primary email domain",
          "Yahoo Email Addresses"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017521108383",
        "name": "MSN.com Email Addresses",
        "description": "People with MSN.Com as their primary email ",
        "audienceSize": "4454234",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Primary email domain",
          "MSN.com Email Addresses"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017521095183",
        "name": "Hotmail Email Addresses",
        "description": "People who use Hotmail for email\n",
        "audienceSize": "309292323",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Primary email domain",
          "Hotmail Email Addresses"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017253486583",
        "name": "2G Connection",
        "description": "People who primarily access Facebook using a 2G connection",
        "audienceSize": "150776773",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Network Connection",
          "2G Connection"
        ],
        "realTimeCluster": null,
        "countryAccess": {
          "include": null,
          "exclude": [
            "US"
          ]
        },
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017253511583",
        "name": "3G Connection",
        "description": "People who primarily access Facebook using a 3G connection",
        "audienceSize": "661999349",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Network Connection",
          "3G Connection"
        ],
        "realTimeCluster": null,
        "countryAccess": {
          "include": null,
          "exclude": [
            "US"
          ]
        },
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017253531383",
        "name": "4G Connection",
        "description": "People who primarily access Facebook using a 4G connection",
        "audienceSize": "220865578",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "Network Connection",
          "4G Connection"
        ],
        "realTimeCluster": null,
        "countryAccess": {
          "include": null,
          "exclude": [
            "US",
            "AR"
          ]
        },
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017567248583",
        "name": "AOL Email Addressees ",
        "description": "People who use AOL email\n",
        "audienceSize": "12893777",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Primary email domain",
          "AOL Email Addressees "
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017447523583",
        "name": "Fans of 3 or more Teams",
        "description": "Fans of 3 or more Teams",
        "audienceSize": "3756878",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Fall Football (US)",
          "Fans of 3 or more Teams"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017447625983",
        "name": "Fans of 1 or more Teams",
        "description": "Fans of 1 or more Teams",
        "audienceSize": "48058025",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Fall Football (US)",
          "Fans of 1 or more Teams"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017535283383",
        "name": "G3",
        "description": "People who are likely to own an LG G3",
        "audienceSize": "6306274",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "LG",
          "G3"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017831560783",
        "name": "iPhone 6 Plus",
        "description": "People who are likely to own an Apple iPhone 6 Plus",
        "audienceSize": "20300422",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 6 Plus"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017831572183",
        "name": "iPhone 6",
        "description": "People who are likely to own an iPhone 6",
        "audienceSize": "64322274",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 6"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6018796980983",
        "name": "Expats (Kenya)",
        "description": "Expats (Kenya)",
        "audienceSize": "255035",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Kenya)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6018797004183",
        "name": "Expats (Nigeria)",
        "description": "Expats (Nigeria)",
        "audienceSize": "627536",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Nigeria)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6018797036783",
        "name": "Expats (Cameroon)",
        "description": "Expats (Cameroon)",
        "audienceSize": "206982",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Cameroon)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6018797091183",
        "name": "Expats (Philippines)",
        "description": "People from Philippines living abroad.",
        "audienceSize": "4050721",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Philippines)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6018797165983",
        "name": "Expats (Ethiopia)",
        "description": "Expats (Ethiopia)",
        "audienceSize": "311959",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Ethiopia)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6018995113183",
        "name": "iPad Air 2",
        "description": "People who are likely to own an iPad Air 2",
        "audienceSize": "6558456",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPad Air 2"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019221024783",
        "name": "Played game yesterday",
        "description": "People who played canvas games yesterday",
        "audienceSize": "34756751",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Played game yesterday"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019221038183",
        "name": "Played game in last 7 days",
        "description": "People who have a played a canvas game in the last 7 days",
        "audienceSize": "75793223",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Played game in last 7 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019221046583",
        "name": "Played game in last 14 days",
        "description": "People who have played a canvas game in the last 14 days",
        "audienceSize": "102893189",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Played game in last 14 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019098117583",
        "name": "iPad Mini 3",
        "description": "People who are likely to own an iPad Mini 3",
        "audienceSize": "1893723",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPad Mini 3"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019098214783",
        "name": "Galaxy Note 4",
        "description": "People who are likely to own a Galaxy Note 4",
        "audienceSize": "10292709",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy Note 4"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019113139183",
        "name": "Lumia 625",
        "description": "People who are likely to own a Lumia 625",
        "audienceSize": "2021380",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Lumia 625"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019113243783",
        "name": "Lumia 1520",
        "description": "People who are likely to own a Lumia 1520",
        "audienceSize": "223128",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Lumia 1520"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019113801783",
        "name": "Lumia 630",
        "description": "People who are likely to own a Lumia 630",
        "audienceSize": "3594827",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Lumia 630"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019113851783",
        "name": "Lumia 1020",
        "description": "People who are likely to own a Lumia 1020",
        "audienceSize": "882787",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Lumia 1020"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019113909383",
        "name": "Lumia 720",
        "description": "People who are likely to own a Lumia 720",
        "audienceSize": "779367",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Lumia 720"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019113975583",
        "name": "Lumia 1320",
        "description": "People who are likely to own a Lumia 1320",
        "audienceSize": "589458",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Nokia",
          "Lumia 1320"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019164544783",
        "name": "Karbonn",
        "description": "People who are likely to own a Karbonn Device",
        "audienceSize": "3280897",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Karbonn"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019164556983",
        "name": "Lava",
        "description": "People who are likely to own a Lava device",
        "audienceSize": "9837851",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Lava"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019164586183",
        "name": "Micromax",
        "description": "People who are likely to own a Micromax device",
        "audienceSize": "19129094",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Micromax"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019164599783",
        "name": "XOLO",
        "description": "People who are likely to own a XOLO device",
        "audienceSize": "2090873",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "XOLO"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019164630583",
        "name": "Xiaomi",
        "description": "People who are likely to own a Xiaomi device",
        "audienceSize": "6061905",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Xiaomi"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019246164583",
        "name": "Played game in last 3 days",
        "description": "People who have played a canvas game in the last 3 days",
        "audienceSize": "61664334",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Played game in last 3 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019366943583",
        "name": "Expats (Spain)",
        "description": "People from Spain living abroad.",
        "audienceSize": "1852916",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Spain)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019366994183",
        "name": "Expats (Turkey)",
        "description": "People from Turkey living abroad.",
        "audienceSize": "1648458",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Turkey)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019367014383",
        "name": "Expats (France)",
        "description": "People from France living abroad.",
        "audienceSize": "2807675",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (France)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019367052983",
        "name": "Expats (Germany)",
        "description": "People from Germany living abroad.",
        "audienceSize": "1464063",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Germany)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019377644783",
        "name": "Expats (Switzerland)",
        "description": "People from Switzerland living abroad",
        "audienceSize": "290652",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Switzerland)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019396657183",
        "name": "Expats (Poland)",
        "description": "People from Poland living abroad.",
        "audienceSize": "1356437",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Poland)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019396654583",
        "name": "Expats (Italy)",
        "description": "People from Italy living abroad.",
        "audienceSize": "1699304",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Italy)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019396650783",
        "name": "Expats (Ireland)",
        "description": "Irish Expats Living Abroad",
        "audienceSize": "396165",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Ireland)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019396638383",
        "name": "Expats (Hungary)",
        "description": "People from Hungary living abroad",
        "audienceSize": "326614",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Hungary)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019396764183",
        "name": "Expats (Canada)",
        "description": "People from Canada living abroad.",
        "audienceSize": "1107252",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Canada)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019452369983",
        "name": "Expats (China)",
        "description": "People from China whose current country of residence is outside of China.",
        "audienceSize": "1841633",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (China)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019451459783",
        "name": "Plays 0 out of 7 days",
        "description": "People who play 0 out of 7 days on average",
        "audienceSize": "48157770",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Average Engagement",
          "Plays 0 out of 7 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019450979983",
        "name": "Plays 1 out of 7 days",
        "description": "People who play 1 out of 7 days on average",
        "audienceSize": "8560791",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Average Engagement",
          "Plays 1 out of 7 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019450987783",
        "name": "Plays 2 out of 7 days",
        "description": "People who play 2 out of 7 days on average",
        "audienceSize": "3126371",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Average Engagement",
          "Plays 2 out of 7 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019450995783",
        "name": "Plays 3 out of 7 days",
        "description": "People who play 3 out of 7 days on average",
        "audienceSize": "1618022",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Average Engagement",
          "Plays 3 out of 7 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019450996183",
        "name": "Plays 4 out of 7 days",
        "description": "People who play 4 out of 7 days on average",
        "audienceSize": "847964",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Average Engagement",
          "Plays 4 out of 7 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019450997383",
        "name": "Plays 5 out of 7 days",
        "description": "People who play 5 out of 7 days on average",
        "audienceSize": "568151",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Average Engagement",
          "Plays 5 out of 7 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019451000983",
        "name": "Plays 6 out of 7 days",
        "description": "People who play 6 out of 7 days on average",
        "audienceSize": "457818",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Average Engagement",
          "Plays 6 out of 7 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019451002383",
        "name": "Plays 7 out of 7 days",
        "description": "People who play 7 out of 7 days on average",
        "audienceSize": "522203",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Canvas Gaming",
          "Average Engagement",
          "Plays 7 out of 7 days"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019520122583",
        "name": "Expats (Puerto Rico)",
        "description": "People from Puerto Rico living abroad.",
        "audienceSize": "925124",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Puerto Rico)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019564340583",
        "name": "Expats (Brazil)",
        "description": "People from Brazil whose current country of residence is outside of Brazil.\n",
        "audienceSize": "1899005",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Brazil)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019564344583",
        "name": "Expats (Indonesia)",
        "description": "People from Indonesia whose current country of residence is outside of Indonesia.\n",
        "audienceSize": "1913431",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Indonesia)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019564383383",
        "name": "Expats (South Africa)",
        "description": "People from South Africa whose current country of residence is outside of South Africa.",
        "audienceSize": "582054",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (South Africa)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019673525983",
        "name": "Expats (Colombia)",
        "description": "People from Colombia living abroad.",
        "audienceSize": "1550425",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Colombia)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6019905873383",
        "name": "Alpha",
        "description": "People likely to own a Samsung Alpha.",
        "audienceSize": "1742172",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Alpha"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6021354152983",
        "name": "Expats (UK)",
        "description": "UK expats living abroad.",
        "audienceSize": "3257518",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (UK)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6021354857783",
        "name": "Expats (Australia)",
        "description": "Australian Expats Living Abroad",
        "audienceSize": "737375",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Australia)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6021354882783",
        "name": "Expats (Portugal)",
        "description": "People from Portugal living abroad.",
        "audienceSize": "1002788",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Portugal)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6022191434383",
        "name": "Cricket 2015",
        "description": "People who are engaging with content related to the big tournament.",
        "audienceSize": "118905788",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Cricket 2015"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6022430905583",
        "name": "Xperia Z2",
        "description": "People who are likely to own a Xperia Z2",
        "audienceSize": "287651",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia Z2"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6022430911783",
        "name": "Xperia Z3",
        "description": "People who are likely to own a Sony Z3.",
        "audienceSize": "2185301",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia Z3"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6022788483583",
        "name": "Frequent International Travelers",
        "description": "People who have traveled abroad more than once in the past six months",
        "audienceSize": "108715636",
        "type": "behaviors",
        "path": [
          "Travel",
          "Frequent International Travelers"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023356562783",
        "name": "Expats (Bangladesh)",
        "description": "People from Bangladesh living abroad.",
        "audienceSize": "1401327",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Bangladesh)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023356955383",
        "name": "Expats (Nepal)",
        "description": "People from Nepal living abroad.",
        "audienceSize": "1033643",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Nepal)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023357000583",
        "name": "Expats (Senegal)",
        "description": "People from Senegal living abroad",
        "audienceSize": "241481",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Senegal)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023460563383",
        "name": "Alcatel",
        "description": "People who are likely to own an Alcatel device",
        "audienceSize": "26252824",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Alcatel"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023460572383",
        "name": "ZTE",
        "description": "People who are likely to own a ZTE device",
        "audienceSize": "13878015",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "ZTE"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023460579583",
        "name": "Tecno",
        "description": "People who are likely to own a Tecno device",
        "audienceSize": "6030804",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Tecno"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023460590583",
        "name": "Cherry Mobile",
        "description": "People who are likely to own a Cherry Mobile device",
        "audienceSize": "5029908",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Cherry Mobile"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023516338783",
        "name": "Expats (Morocco)",
        "description": "People from Morocco living abroad.",
        "audienceSize": "903626",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Morocco)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023516430783",
        "name": "Expats (UAE)",
        "description": "People from United Arab Emirates living abroad",
        "audienceSize": "495348",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (UAE)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023516368383",
        "name": "Expats (New Zealand)",
        "description": "People from New Zealand living abroad",
        "audienceSize": "472085",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (New Zealand)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023516403783",
        "name": "Expats (Singapore)",
        "description": "People from Singapore living abroad",
        "audienceSize": "238610",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Singapore)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023620475783",
        "name": "Expats (US)",
        "description": "Expats from the U.S.",
        "audienceSize": "9757216",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (US)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023675997383",
        "name": "Expats (Austria)",
        "description": "People from Austria living abroad",
        "audienceSize": "178214",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Austria)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023676017583",
        "name": "Expats (Greece)",
        "description": "People from Greece living abroad",
        "audienceSize": "6086",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Greece)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023676022783",
        "name": "Expats (Hong Kong)",
        "description": "People from Hong Kong living abroad",
        "audienceSize": "387025",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Hong Kong)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023676028783",
        "name": "Expats (Japan)",
        "description": "People from Japan living abroad.",
        "audienceSize": "752120",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Japan)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023676072183",
        "name": "Expats (Mexico)",
        "description": "People from Mexico living abroad.",
        "audienceSize": "5254450",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Mexico)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6023739659183",
        "name": "Baseball 2015",
        "description": "People who are engaging with content related to Baseball",
        "audienceSize": "119027513",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Baseball 2015"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6025000826583",
        "name": "Expats (Argentina)",
        "description": "People from Argentina living abroad.",
        "audienceSize": "1026309",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Argentina)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6025000823583",
        "name": "Expats (Israel)",
        "description": "People from Israel living abroad.",
        "audienceSize": "256411",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Israel)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6025000815983",
        "name": "Expats (Russia)",
        "description": "People from Russia living abroad.",
        "audienceSize": "989824",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Russia)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6025000813183",
        "name": "Expats (Saudi Arabia)",
        "description": "People from Saudi Arabia living abroad.",
        "audienceSize": "474235",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Saudi Arabia)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6025054896983",
        "name": "Expats (Chile)",
        "description": "People from Chile living abroad",
        "audienceSize": "397611",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Chile)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6025960845783",
        "name": "Ramadan 2015",
        "description": "Users engaging in Ramadan",
        "audienceSize": "656632",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Ramadan 2015"
        ],
        "realTimeCluster": null,
        "countryAccess": {
          "include": [
            "EG",
            "PK",
            "ID",
            "MY",
            "TR",
            "IQ",
            "DZ",
            "MA",
            "TN",
            "SA",
            "JO",
            "AE",
            "LY",
            "PS",
            "LB",
            "YE",
            "KW",
            "QA",
            "OM",
            "AZ",
            "MR",
            "SO",
            "CY",
            "DJ",
            "GE",
            "EH",
            "AM"
          ],
          "exclude": null
        },
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6026404871583",
        "name": "Expats (Venezuela)",
        "description": "People from Venezuela living abroad",
        "audienceSize": "632615",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Venezuela)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6026660740983",
        "name": "Galaxy S6",
        "description": "People who are likely to own Samsung Galaxy S6 devices.",
        "audienceSize": "14153326",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Samsung",
          "Galaxy S6"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6027147189983",
        "name": "Expats (Pakistan)",
        "description": "People from Pakistan living abroad.",
        "audienceSize": "2146774",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Pakistan)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6027147160983",
        "name": "Expats (Malaysia)",
        "description": "People from Malaysia living abroad.",
        "audienceSize": "794091",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Malaysia)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6027148953383",
        "name": "Expats (Egypt)",
        "description": "People from Egypt living abroad.",
        "audienceSize": "1412240",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Egypt)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6027148962983",
        "name": "Expats (Romania)",
        "description": "People from Romania living abroad.",
        "audienceSize": "1621599",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Romania)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6027148973583",
        "name": "Expats (South Korea)",
        "description": "People from South Korea living abroad.",
        "audienceSize": "1218459",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (South Korea)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6027149004983",
        "name": "Expats (Serbia)",
        "description": "People from Serbia living abroad.",
        "audienceSize": "816764",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Serbia)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6027149006383",
        "name": "Expats (Vietnam)",
        "description": "People from Vietnam living abroad.",
        "audienceSize": "886036",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Vietnam)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6027149008183",
        "name": "Expats (Peru)",
        "description": "People from Peru living abroad.",
        "audienceSize": "901175",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Peru)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6028004362783",
        "name": "Professional Football (US)",
        "description": "People who have engaged with content related to US Professional Football",
        "audienceSize": "51262148",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Professional Football (US)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6028705804183",
        "name": "Rugby (2015)",
        "description": "People who are engaging with content related to Rugby (2015)",
        "audienceSize": "29040143",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Rugby (2015)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6028956336383",
        "name": "College Football (US) ",
        "description": "People who are engaging with College Football related content",
        "audienceSize": "15500764",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "College Football (US) "
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6029587661983",
        "name": "Primary OS Windows 10",
        "description": "People who primarily connect to Facebook using Windows 10.",
        "audienceSize": "46187812",
        "type": "behaviors",
        "path": [
          "Digital activities",
          " Operating System Used",
          "Primary OS Windows 10"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004386007372",
        "name": "Other Android devices",
        "description": "People who access the Internet through other Android mobile devices",
        "audienceSize": "194947824",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Other Android devices"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004854404172",
        "name": "Technology late adopters",
        "description": "People who access Facebook on older devices or operating systems before Windows 7, Mac OS X or Windows NT 6.2.",
        "audienceSize": "332476746",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Technology late adopters"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004883585572",
        "name": "iPhone 5",
        "description": "People who access the Internet through an iPhone 5",
        "audienceSize": "309462056",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 5"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004948896972",
        "name": "FB Payments (Recent)",
        "description": "People who have used Facebook Payments platform in the past 30 days.",
        "audienceSize": "2571292",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "FB Payments (Recent)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004948896772",
        "name": "FB Payments (Higher than average spend)",
        "description": "People who have spent more than $100 on Facebook Payments platform in the past 3 months.",
        "audienceSize": "923189",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "FB Payments (Higher than average spend)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6004982581772",
        "name": "Unity Plugin",
        "description": "People who have the unity plug in installed.",
        "audienceSize": "71554851",
        "type": "behaviors",
        "path": [
          "Digital activities",
          "Unity Plugin"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013017295183",
        "name": "Curve 9300",
        "description": "People who likely own Curve 9300 from Blackberry.",
        "audienceSize": "170840",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "BlackBerry",
          "Curve 9300"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6013516370183",
        "name": "Commuters",
        "description": "People likely to commute from home to their workplace on weekdays.",
        "audienceSize": "49486817",
        "type": "behaviors",
        "path": [
          "Travel",
          "Commuters"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017857337983",
        "name": "Xperia S",
        "description": "People who are likely to own a Sony Xperia S",
        "audienceSize": "759128",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Sony",
          "Xperia S"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017626138983",
        "name": "Casual Fans",
        "description": "People who are likely to engage with Football (US) related content",
        "audienceSize": "25950471",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Fall Football (US)",
          "Casual Fans"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017625561183",
        "name": "Super Fans",
        "description": "People who are very likely to engage with Football (US) related content",
        "audienceSize": "19931",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Fall Football (US)",
          "Super Fans"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017831560783",
        "name": "iPhone 6 Plus",
        "description": "People who are likely to own an Apple iPhone 6 Plus",
        "audienceSize": "20300422",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 6 Plus"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6017831572183",
        "name": "iPhone 6",
        "description": "People who are likely to own an iPhone 6",
        "audienceSize": "64322274",
        "type": "behaviors",
        "path": [
          "Mobile Device User",
          "All Mobile Devices by Brand",
          "Apple",
          "iPhone 6"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6022191434383",
        "name": "Cricket 2015",
        "description": "People who are engaging with content related to the big tournament.",
        "audienceSize": "118905788",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Cricket 2015"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6022681584383",
        "name": "The Big Tournament",
        "description": "People engaging with content related to The Big Tournament",
        "audienceSize": "48788470",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Basketball",
          "The Big Tournament"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6024396317983",
        "name": "Hockey Playoffs",
        "description": "People engaging with content related to Hockey Playoffs",
        "audienceSize": "7261244",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Hockey Playoffs"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6025026916383",
        "name": "Graduates (2015)",
        "description": "Students who are graduating from High School, College or Grad School",
        "audienceSize": "16791966",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Graduation",
          "Graduates (2015)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6025027588583",
        "name": "Parents of Graduates (2015)",
        "description": "Parents with children graduating from High School, College, or Grad School.",
        "audienceSize": "6811200",
        "type": "behaviors",
        "path": [
          "Seasonal and Events",
          "Graduation",
          "Parents of Graduates (2015)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      },
      {
        "id": null,
        "internalId": "6026404871583",
        "name": "Expats (Venezuela)",
        "description": "People from Venezuela living abroad",
        "audienceSize": "632615",
        "type": "behaviors",
        "path": [
          "Expats",
          "Expats (Venezuela)"
        ],
        "realTimeCluster": null,
        "countryAccess": null,
        "source": null,
        "partner": null,
        "country": null
      }
    ];

    vm.formattedBehaviors={};
    vm.formattedBehaviors['name'] = 'All';
    function findInArray(givenArray,name){
     var resultObject =  _.find(givenArray, function(obj) {
       return obj.name == name;
     });
      return resultObject

    }
    function arrangeParents(parent,child){
      var childFound;
     if(! _.isArray(parent.children)){
       parent.children=[];
     }
     else{
       childFound=findInArray(parent.children,child.name);
     }
       // array is defined
       if(!childFound){
           child.children=[];
           parent.children.push(child);
           return parent.children[parent.children.length-1];
       }
       return childFound;
    }
    _.forEach(vm.unfancy.bag,function(value,key){
        if(_.isArray(value['path'] ) && value['path'].length>1){
            var result;
          _.forEach(value['path'],function(pathValue,index){
            var pathObj={};
            pathObj={'name':pathValue,label:pathValue,selected:true};
            if(index==0){
              result = arrangeParents(vm.formattedBehaviors,pathObj);
            }
            else if((value['path'].length-1)!= index){
              result = arrangeParents(result,pathObj);
            }
            else{
              if(!_.isArray(result.children)){
                result.children=[];
              }
              value.selectedNode=true;
              result.children.push(value);

            }

          });
        }
    });

    vm.track={};
    vm.track.behaviors=[];
    vm.track.behaviors.push(vm.formattedBehaviors);

    $scope.someGroupFn = function (item){

      if (item.name[0] >= 'A' && item.name[0] <= 'M')
        return 'From A - M';

      if (item.name[0] >= 'N' && item.name[0] <= 'Z')
        return 'From N - Z';

    };
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
              _.remove($scope.addBehaviorNodes, function(currentBehavior){
                return currentBehavior.name === node.name;
              });
            }
          });
        }

      });
    }
    function checkIfParentIsSelected(selectedNode,ivhTree){
      ivhTreeviewBfs(ivhTree,function(node,parentNodes){
        if(selectedNode.name==node.name){
          console.log("Node act"+node.name);
          console.log("Parent Node"+parentNodes[0].name);
          if(parentNodes[0].selected ){
            if(parentNodes[0].name!="All"){
              _.forEach(parentNodes[0].children,function(childNode){
                _.remove($scope.addBehaviorNodes, function(currentObject){
                  return currentObject.name === childNode.name;
                });
              });
              $scope.addBehaviorNodes.push(parentNodes[0]);
              checkIfParentIsSelected(parentNodes[0],ivhTree);
            }
            else{
              $scope.showAll=true;
              $scope.addBehaviorNodes=[];
            }

          }
        }
      });
    }
    function checkForSelectedSiblings(unSelectedNode,ivhTree){
      var nodeObj;
      ivhTreeviewBfs(ivhTree,function(node,parentNodes){
        if(unSelectedNode.name==node.name){
          _.forEach(parentNodes[0].children,function(sibblingNode){
              if(sibblingNode.selected){
                if(!isDuplicate( $scope.addBehaviorNodes,sibblingNode)){
                   nodeObj={name:sibblingNode.name,label:sibblingNode.name,selectedNode:'selected'};
                   $scope.addBehaviorNodes.push(sibblingNode);
                }
              }
          });
        }
      });
    }
    function isDuplicate(sourceArray,element){

      return _.some(sourceArray,function(currentElement){
          return element.name === currentElement.name;
      });
      
    }
    $scope.changeCallback= function(node,isSelected,ivhTree){
      //todo: need to remove/add element(s) from addBehaviorNodes
      if(node.name=="All"){
        $scope.addBehaviorNodes=[];
       if(node.selected){
         $scope.showAll=true;
       }
        else{
         $scope.showAll=false;

       }
      }
      else{

        var nodeObj={name:node.name,label:node.name,selectedNode:'selected'};
        if(node.selected){
          checkIfAnyChildrenIsInList(node,ivhTree);
          if(!isDuplicate( $scope.addBehaviorNodes,nodeObj))
            $scope.addBehaviorNodes.push(nodeObj);
          checkIfParentIsSelected(node,ivhTree);
        }
        else{
          $scope.removeBehaviorItem(nodeObj);
          checkForSelectedSiblings(node,ivhTree);
          $scope.showAll=false;

        }
      }

    };

    $scope.addBehaviorNodes=[];
    //$scope.addBehaviorNodes.push({name:"All"});
    $scope.removeBehaviorItem= function(behavior){
      //todo: need to remove/add element(s) from addBehaviorNodes
      _.remove($scope.addBehaviorNodes, function(currentObject){
        return currentObject.name === behavior.name;
      });
      //ivhTreeviewMgr.deselect(vm.track.behaviors,behavior.name);
    }
  }
})();
