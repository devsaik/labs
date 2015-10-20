(function() {
  'use strict';

  angular
    .module('labs')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,TreeServiceUtils) {
    $scope.preFormatted={};
   /* $scope.preFormatted.dataStore=[
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
    ];*/

    $scope.preFormatted.behaviors=[

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

    ];
    $scope.behaviorMode = "behaviors";
    $scope.interestMode = "interests";
    $scope.preFormatted.interests=[
      {
        "internalId": "6002839660079",
        "name": "Cosmetics",
        "description": null,
        "audienceSize": "466758420",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Beauty",
          "Cosmetics"
        ],
        "id": null
      },
      {
        "internalId": "6002866718622",
        "name": "Science",
        "description": null,
        "audienceSize": "345100860",
        "type": "interests",
        "path": [
          "Business and industry",
          "Science"
        ],
        "id": null
      },
      {
        "internalId": "6002867432822",
        "name": "Beauty",
        "description": null,
        "audienceSize": "719306230",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Beauty"
        ],
        "id": null
      },
      {
        "internalId": "6002868021822",
        "name": "Adventure travel",
        "description": null,
        "audienceSize": "124876193",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Adventure travel"
        ],
        "id": null
      },
      {
        "internalId": "6002868910910",
        "name": "Organic food",
        "description": null,
        "audienceSize": "76637840",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food",
          "Organic food"
        ],
        "id": null
      },
      {
        "internalId": "6002884511422",
        "name": "Small business",
        "description": null,
        "audienceSize": "42583110",
        "type": "interests",
        "path": [
          "Business and industry",
          "Small business"
        ],
        "id": null
      },
      {
        "internalId": "6002920953955",
        "name": "Interior design",
        "description": null,
        "audienceSize": "199917840",
        "type": "interests",
        "path": [
          "Business and industry",
          "Design",
          "Interior design"
        ],
        "id": null
      },
      {
        "internalId": "6002925538921",
        "name": "Acting",
        "description": null,
        "audienceSize": "105673830",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Acting"
        ],
        "id": null
      },
      {
        "internalId": "6002926108721",
        "name": "Vacations",
        "description": null,
        "audienceSize": "111732410",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Vacations"
        ],
        "id": null
      },
      {
        "internalId": "6002929380259",
        "name": "Volleyball",
        "description": null,
        "audienceSize": "165842530",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Volleyball"
        ],
        "id": null
      },
      {
        "internalId": "6002936693259",
        "name": "Soft drinks",
        "description": null,
        "audienceSize": "245798020",
        "type": "interests",
        "path": [
          "Food and drink",
          "Beverages",
          "Soft drinks"
        ],
        "id": null
      },
      {
        "internalId": "6002951587955",
        "name": "Classical music",
        "description": null,
        "audienceSize": "103931220",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Classical music"
        ],
        "id": null
      },
      {
        "internalId": "6002957026250",
        "name": "Theatre",
        "description": null,
        "audienceSize": "258095710",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events",
          "Theatre"
        ],
        "id": null
      },
      {
        "internalId": "6002960574320",
        "name": "Tablet computers",
        "description": null,
        "audienceSize": "247260980",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Tablet computers"
        ],
        "id": null
      },
      {
        "internalId": "6002963523717",
        "name": "Aviation",
        "description": null,
        "audienceSize": "129484520",
        "type": "interests",
        "path": [
          "Business and industry",
          "Aviation"
        ],
        "id": null
      },
      {
        "internalId": "6002964239317",
        "name": "Mexican cuisine",
        "description": null,
        "audienceSize": "27299030",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Mexican cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6002964500317",
        "name": "Word games",
        "description": null,
        "audienceSize": "46738300",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Word games"
        ],
        "id": null
      },
      {
        "internalId": "6002970406974",
        "name": "Concerts",
        "description": null,
        "audienceSize": "268536390",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events",
          "Concerts"
        ],
        "id": null
      },
      {
        "internalId": "6002971085794",
        "name": "Mobile phones",
        "description": null,
        "audienceSize": "1092804200",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "Mobile phones"
        ],
        "id": null
      },
      {
        "internalId": "6002971095994",
        "name": "Action games",
        "description": null,
        "audienceSize": "200405900",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Action games"
        ],
        "id": null
      },
      {
        "internalId": "6002979499920",
        "name": "Fishing",
        "description": null,
        "audienceSize": "88920780",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Outdoor recreation",
          "Fishing"
        ],
        "id": null
      },
      {
        "internalId": "6002984573619",
        "name": "Surfing",
        "description": null,
        "audienceSize": "87826590",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Outdoor recreation",
          "Surfing"
        ],
        "id": null
      },
      {
        "internalId": "6002985584323",
        "name": "Outdoor recreation",
        "description": null,
        "audienceSize": "332427600",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Outdoor recreation"
        ],
        "id": null
      },
      {
        "internalId": "6002986104968",
        "name": "Mystery fiction",
        "description": null,
        "audienceSize": "69500670",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Mystery fiction"
        ],
        "id": null
      },
      {
        "internalId": "6002991239659",
        "name": "Motherhood",
        "description": null,
        "audienceSize": "378399720",
        "type": "interests",
        "path": [
          "Family and relationships",
          "Motherhood"
        ],
        "id": null
      },
      {
        "internalId": "6002991736368",
        "name": "Reading",
        "description": null,
        "audienceSize": "824139310",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading"
        ],
        "id": null
      },
      {
        "internalId": "6002997799844",
        "name": "Singing",
        "description": null,
        "audienceSize": "240152130",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Singing"
        ],
        "id": null
      },
      {
        "internalId": "6002998078382",
        "name": "Military",
        "description": null,
        "audienceSize": "110463680",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Military"
        ],
        "id": null
      },
      {
        "internalId": "6002998123892",
        "name": "Japanese cuisine",
        "description": null,
        "audienceSize": "37605830",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Japanese cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6002998517244",
        "name": "Camcorders",
        "description": null,
        "audienceSize": "20542653",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "Camcorders"
        ],
        "id": null
      },
      {
        "internalId": "6003012185129",
        "name": "Meditation",
        "description": null,
        "audienceSize": "106657790",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Meditation"
        ],
        "id": null
      },
      {
        "internalId": "6003012317397",
        "name": "Gambling",
        "description": null,
        "audienceSize": "222819180",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Gambling"
        ],
        "id": null
      },
      {
        "internalId": "6003012461997",
        "name": "Beer",
        "description": null,
        "audienceSize": "227108470",
        "type": "interests",
        "path": [
          "Food and drink",
          "Alcoholic beverages",
          "Beer"
        ],
        "id": null
      },
      {
        "internalId": "6003020834693",
        "name": "Music",
        "description": null,
        "audienceSize": "988954820",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music"
        ],
        "id": null
      },
      {
        "internalId": "6003025268985",
        "name": "Tattoos",
        "description": null,
        "audienceSize": "302891960",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Beauty",
          "Tattoos"
        ],
        "id": null
      },
      {
        "internalId": "6003029869785",
        "name": "Arts and music",
        "description": null,
        "audienceSize": "826349040",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music"
        ],
        "id": null
      },
      {
        "internalId": "6003030029655",
        "name": "Chinese cuisine",
        "description": null,
        "audienceSize": "35003390",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Chinese cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003030519207",
        "name": "Online poker",
        "description": null,
        "audienceSize": "63240940",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Online poker"
        ],
        "id": null
      },
      {
        "internalId": "6003049202156",
        "name": "Community issues",
        "description": null,
        "audienceSize": "319420060",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Community issues"
        ],
        "id": null
      },
      {
        "internalId": "6003053056644",
        "name": "Gardening",
        "description": null,
        "audienceSize": "313687350",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Home and garden",
          "Gardening"
        ],
        "id": null
      },
      {
        "internalId": "6003054884732",
        "name": "Coupons",
        "description": null,
        "audienceSize": "296862130",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Shopping",
          "Coupons"
        ],
        "id": null
      },
      {
        "internalId": "6003059385128",
        "name": "Ecotourism",
        "description": null,
        "audienceSize": "105395767",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Ecotourism"
        ],
        "id": null
      },
      {
        "internalId": "6003059733932",
        "name": "First-person shooter games",
        "description": null,
        "audienceSize": "408809070",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "First-person shooter games"
        ],
        "id": null
      },
      {
        "internalId": "6003062205328",
        "name": "Retail banking",
        "description": null,
        "audienceSize": "15308420",
        "type": "interests",
        "path": [
          "Business and industry",
          "Banking",
          "Retail banking"
        ],
        "id": null
      },
      {
        "internalId": "6003063638807",
        "name": "Investment banking",
        "description": null,
        "audienceSize": "21439810",
        "type": "interests",
        "path": [
          "Business and industry",
          "Banking",
          "Investment banking"
        ],
        "id": null
      },
      {
        "internalId": "6003064649070",
        "name": "Mountains",
        "description": null,
        "audienceSize": "191279930",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Mountains"
        ],
        "id": null
      },
      {
        "internalId": "6003070122382",
        "name": "Toys",
        "description": null,
        "audienceSize": "156008380",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Toys"
        ],
        "id": null
      },
      {
        "internalId": "6003070856229",
        "name": "Games",
        "description": null,
        "audienceSize": "918327260",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games"
        ],
        "id": null
      },
      {
        "internalId": "6003071094715",
        "name": "Gospel music",
        "description": null,
        "audienceSize": "151737690",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Gospel music"
        ],
        "id": null
      },
      {
        "internalId": "6003074487739",
        "name": "E-books",
        "description": null,
        "audienceSize": "248996110",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "E-books"
        ],
        "id": null
      },
      {
        "internalId": "6003074954515",
        "name": "Sales",
        "description": null,
        "audienceSize": "545532700",
        "type": "interests",
        "path": [
          "Business and industry",
          "Sales"
        ],
        "id": null
      },
      {
        "internalId": "6003076016339",
        "name": "Email marketing",
        "description": null,
        "audienceSize": "10077292",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Email marketing"
        ],
        "id": null
      },
      {
        "internalId": "6003083357650",
        "name": "Manga",
        "description": null,
        "audienceSize": "101831860",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Manga"
        ],
        "id": null
      },
      {
        "internalId": "6003087413192",
        "name": "Baseball",
        "description": null,
        "audienceSize": "244634430",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Baseball"
        ],
        "id": null
      },
      {
        "internalId": "6003088846792",
        "name": "Beauty salons",
        "description": null,
        "audienceSize": "312338900",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Beauty",
          "Beauty salons"
        ],
        "id": null
      },
      {
        "internalId": "6003090714101",
        "name": "Car rentals",
        "description": null,
        "audienceSize": "93471158",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Car rentals"
        ],
        "id": null
      },
      {
        "internalId": "6003092330156",
        "name": "Mountain biking",
        "description": null,
        "audienceSize": "55836925",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Outdoor recreation",
          "Mountain biking"
        ],
        "id": null
      },
      {
        "internalId": "6003092882217",
        "name": "Trucks",
        "description": null,
        "audienceSize": "106225440",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "Trucks"
        ],
        "id": null
      },
      {
        "internalId": "6003096002658",
        "name": "Graphic design",
        "description": null,
        "audienceSize": "116994030",
        "type": "interests",
        "path": [
          "Business and industry",
          "Design",
          "Graphic design"
        ],
        "id": null
      },
      {
        "internalId": "6003101323797",
        "name": "Fatherhood",
        "description": null,
        "audienceSize": "214882470",
        "type": "interests",
        "path": [
          "Family and relationships",
          "Fatherhood"
        ],
        "id": null
      },
      {
        "internalId": "6003102729234",
        "name": "Italian cuisine",
        "description": null,
        "audienceSize": "54512830",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Italian cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003102988840",
        "name": "Latin American cuisine",
        "description": null,
        "audienceSize": "27234460",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Latin American cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003103108917",
        "name": "Boutiques",
        "description": null,
        "audienceSize": "236292390",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Shopping",
          "Boutiques"
        ],
        "id": null
      },
      {
        "internalId": "6003105618835",
        "name": "Crafts",
        "description": null,
        "audienceSize": "66618920",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Crafts"
        ],
        "id": null
      },
      {
        "internalId": "6003106813190",
        "name": "Hunting",
        "description": null,
        "audienceSize": "100725790",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Outdoor recreation",
          "Hunting"
        ],
        "id": null
      },
      {
        "internalId": "6003107699532",
        "name": "Soul music",
        "description": null,
        "audienceSize": "319795970",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Soul music"
        ],
        "id": null
      },
      {
        "internalId": "6003107902433",
        "name": "Association football (Soccer)",
        "description": null,
        "audienceSize": "772702850",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Association football (Soccer)"
        ],
        "id": null
      },
      {
        "internalId": "6003108411433",
        "name": "Rabbits",
        "description": null,
        "audienceSize": "55653260",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Pets",
          "Rabbits"
        ],
        "id": null
      },
      {
        "internalId": "6003108649035",
        "name": "Spanish cuisine",
        "description": null,
        "audienceSize": "11528175",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Spanish cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003108826384",
        "name": "Music festivals",
        "description": null,
        "audienceSize": "132825860",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events",
          "Music festivals"
        ],
        "id": null
      },
      {
        "internalId": "6003115804542",
        "name": "Desktop computers",
        "description": null,
        "audienceSize": "69842830",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Desktop computers"
        ],
        "id": null
      },
      {
        "internalId": "6003116038942",
        "name": "Computer monitors",
        "description": null,
        "audienceSize": "47934130",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Computer monitors"
        ],
        "id": null
      },
      {
        "internalId": "6003120620858",
        "name": "Coffeehouses",
        "description": null,
        "audienceSize": "198443720",
        "type": "interests",
        "path": [
          "Food and drink",
          "Restaurants",
          "Coffeehouses"
        ],
        "id": null
      },
      {
        "internalId": "6003122958658",
        "name": "Boating",
        "description": null,
        "audienceSize": "39585840",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Outdoor recreation",
          "Boating"
        ],
        "id": null
      },
      {
        "internalId": "6003125064949",
        "name": "Electric vehicle",
        "description": null,
        "audienceSize": "9928291",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "Electric vehicle"
        ],
        "id": null
      },
      {
        "internalId": "6003125948045",
        "name": "Desserts",
        "description": null,
        "audienceSize": "171748090",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food",
          "Desserts"
        ],
        "id": null
      },
      {
        "internalId": "6003126215349",
        "name": "Comics",
        "description": null,
        "audienceSize": "137205170",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Comics"
        ],
        "id": null
      },
      {
        "internalId": "6003126358188",
        "name": "TV game shows",
        "description": null,
        "audienceSize": "80497700",
        "type": "interests",
        "path": [
          "Entertainment",
          "TV",
          "TV game shows"
        ],
        "id": null
      },
      {
        "internalId": "6003127206524",
        "name": "Digital marketing",
        "description": null,
        "audienceSize": "24144115",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Digital marketing"
        ],
        "id": null
      },
      {
        "internalId": "6003129926917",
        "name": "Animated movies",
        "description": null,
        "audienceSize": "190682630",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Animated movies"
        ],
        "id": null
      },
      {
        "internalId": "6003132926214",
        "name": "Furniture",
        "description": null,
        "audienceSize": "209906690",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Home and garden",
          "Furniture"
        ],
        "id": null
      },
      {
        "internalId": "6003133486214",
        "name": "Vehicles",
        "description": null,
        "audienceSize": "509074070",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles"
        ],
        "id": null
      },
      {
        "internalId": "6003133978408",
        "name": "Chocolate",
        "description": null,
        "audienceSize": "235055280",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food",
          "Chocolate"
        ],
        "id": null
      },
      {
        "internalId": "6003134986700",
        "name": "Baking",
        "description": null,
        "audienceSize": "103453970",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cooking",
          "Baking"
        ],
        "id": null
      },
      {
        "internalId": "6003137105590",
        "name": "Volunteering",
        "description": null,
        "audienceSize": "35811570",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Volunteering"
        ],
        "id": null
      },
      {
        "internalId": "6003139266461",
        "name": "Movies",
        "description": null,
        "audienceSize": "932688820",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies"
        ],
        "id": null
      },
      {
        "internalId": "6003141785766",
        "name": "Mortgage loans",
        "description": null,
        "audienceSize": "56637570",
        "type": "interests",
        "path": [
          "Business and industry",
          "Personal finance",
          "Mortgage loans"
        ],
        "id": null
      },
      {
        "internalId": "6003142705949",
        "name": "Computer processors",
        "description": null,
        "audienceSize": "70794900",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Computer processors"
        ],
        "id": null
      },
      {
        "internalId": "6003142974961",
        "name": "Painting",
        "description": null,
        "audienceSize": "176267160",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Painting"
        ],
        "id": null
      },
      {
        "internalId": "6003143720966",
        "name": "Personal finance",
        "description": null,
        "audienceSize": "322836900",
        "type": "interests",
        "path": [
          "Business and industry",
          "Personal finance"
        ],
        "id": null
      },
      {
        "internalId": "6003146442552",
        "name": "Jazz music",
        "description": null,
        "audienceSize": "202858760",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Jazz music"
        ],
        "id": null
      },
      {
        "internalId": "6003146718552",
        "name": "Auto racing",
        "description": null,
        "audienceSize": "202218850",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Auto racing"
        ],
        "id": null
      },
      {
        "internalId": "6003146729229",
        "name": "Distilled beverage",
        "description": null,
        "audienceSize": "116965660",
        "type": "interests",
        "path": [
          "Food and drink",
          "Alcoholic beverages",
          "Distilled beverage"
        ],
        "id": null
      },
      {
        "internalId": "6003147868152",
        "name": "Parties",
        "description": null,
        "audienceSize": "179339400",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events",
          "Parties"
        ],
        "id": null
      },
      {
        "internalId": "6003148544265",
        "name": "Wine",
        "description": null,
        "audienceSize": "198570540",
        "type": "interests",
        "path": [
          "Food and drink",
          "Alcoholic beverages",
          "Wine"
        ],
        "id": null
      },
      {
        "internalId": "6003151951349",
        "name": "Computer servers",
        "description": null,
        "audienceSize": "115165670",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Computer servers"
        ],
        "id": null
      },
      {
        "internalId": "6003153672865",
        "name": "Online games",
        "description": null,
        "audienceSize": "325115160",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Online games"
        ],
        "id": null
      },
      {
        "internalId": "6003154043305",
        "name": "Performing arts",
        "description": null,
        "audienceSize": "110226790",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Performing arts"
        ],
        "id": null
      },
      {
        "internalId": "6003155333705",
        "name": "Vegetarianism",
        "description": null,
        "audienceSize": "66171600",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food",
          "Vegetarianism"
        ],
        "id": null
      },
      {
        "internalId": "6003156321008",
        "name": "Bars",
        "description": null,
        "audienceSize": "214729890",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events",
          "Bars"
        ],
        "id": null
      },
      {
        "internalId": "6003157824284",
        "name": "Bollywood movies",
        "description": null,
        "audienceSize": "199186900",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Bollywood movies"
        ],
        "id": null
      },
      {
        "internalId": "6003159378782",
        "name": "Cats",
        "description": null,
        "audienceSize": "204860370",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Pets",
          "Cats"
        ],
        "id": null
      },
      {
        "internalId": "6003159413034",
        "name": "Fish",
        "description": null,
        "audienceSize": "155720130",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Pets",
          "Fish"
        ],
        "id": null
      },
      {
        "internalId": "6003161475030",
        "name": "Comedy movies",
        "description": null,
        "audienceSize": "378341320",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Comedy movies"
        ],
        "id": null
      },
      {
        "internalId": "6003162931434",
        "name": "College football",
        "description": null,
        "audienceSize": "103979540",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "College football"
        ],
        "id": null
      },
      {
        "internalId": "6003166397215",
        "name": "Swimming",
        "description": null,
        "audienceSize": "116210190",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Swimming"
        ],
        "id": null
      },
      {
        "internalId": "6003167425934",
        "name": "Shopping and fashion",
        "description": null,
        "audienceSize": "1104500470",
        "type": "interests",
        "path": [
          "Shopping and fashion"
        ],
        "id": null
      },
      {
        "internalId": "6003172273055",
        "name": "Sustainability",
        "description": null,
        "audienceSize": "58896430",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Sustainability"
        ],
        "id": null
      },
      {
        "internalId": "6003172448161",
        "name": "TV talkshows",
        "description": null,
        "audienceSize": "62432360",
        "type": "interests",
        "path": [
          "Entertainment",
          "TV",
          "TV talkshows"
        ],
        "id": null
      },
      {
        "internalId": "6003172932634",
        "name": "TV",
        "description": null,
        "audienceSize": "729401990",
        "type": "interests",
        "path": [
          "Entertainment",
          "TV"
        ],
        "id": null
      },
      {
        "internalId": "6003176101552",
        "name": "Massively multiplayer online games",
        "description": null,
        "audienceSize": "91703060",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Massively multiplayer online games"
        ],
        "id": null
      },
      {
        "internalId": "6003176678152",
        "name": "Automobiles",
        "description": null,
        "audienceSize": "415056610",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "Automobiles"
        ],
        "id": null
      },
      {
        "internalId": "6003178374133",
        "name": "Fantasy movies",
        "description": null,
        "audienceSize": "109861200",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Fantasy movies"
        ],
        "id": null
      },
      {
        "internalId": "6003179515414",
        "name": "Dance music",
        "description": null,
        "audienceSize": "125363660",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Dance music"
        ],
        "id": null
      },
      {
        "internalId": "6003120620858",
        "name": "Coffeehouses",
        "description": null,
        "audienceSize": "198443720",
        "type": "interests",
        "path": [
          "Food and drink",
          "Restaurants",
          "Coffeehouses"
        ],
        "id": null
      },
      {
        "internalId": "6003188355978",
        "name": "Dresses",
        "description": null,
        "audienceSize": "303988000",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Fashion accessories",
          "Dresses"
        ],
        "id": null
      },
      {
        "internalId": "6003194056672",
        "name": "Fine art",
        "description": null,
        "audienceSize": "42241830",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Fine art"
        ],
        "id": null
      },
      {
        "internalId": "6003195554098",
        "name": "Rhythm and blues music",
        "description": null,
        "audienceSize": "409352570",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Rhythm and blues music"
        ],
        "id": null
      },
      {
        "internalId": "6003195797498",
        "name": "Cuisine",
        "description": null,
        "audienceSize": "199192640",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003198370967",
        "name": "Massively multiplayer online role-playing games",
        "description": null,
        "audienceSize": "91520410",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Massively multiplayer online role-playing games"
        ],
        "id": null
      },
      {
        "internalId": "6003198476967",
        "name": "Handbags",
        "description": null,
        "audienceSize": "212452286",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Fashion accessories",
          "Handbags"
        ],
        "id": null
      },
      {
        "internalId": "6003198851865",
        "name": "Dating",
        "description": null,
        "audienceSize": "140883320",
        "type": "interests",
        "path": [
          "Family and relationships",
          "Dating"
        ],
        "id": null
      },
      {
        "internalId": "6003200340482",
        "name": "Middle Eastern cuisine",
        "description": null,
        "audienceSize": "46311690",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Middle Eastern cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003206216430",
        "name": "Magazines",
        "description": null,
        "audienceSize": "295421670",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Magazines"
        ],
        "id": null
      },
      {
        "internalId": "6003206308286",
        "name": "Science fiction movies",
        "description": null,
        "audienceSize": "60364596",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Science fiction movies"
        ],
        "id": null
      },
      {
        "internalId": "6003207605030",
        "name": "Minivans",
        "description": null,
        "audienceSize": "11777350",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "Minivans"
        ],
        "id": null
      },
      {
        "internalId": "6003210799924",
        "name": "Romance novels",
        "description": null,
        "audienceSize": "69107270",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Romance novels"
        ],
        "id": null
      },
      {
        "internalId": "6003211401886",
        "name": "Air travel",
        "description": null,
        "audienceSize": "142419580",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Air travel"
        ],
        "id": null
      },
      {
        "internalId": "6003217093576",
        "name": "Insurance",
        "description": null,
        "audienceSize": "150281740",
        "type": "interests",
        "path": [
          "Business and industry",
          "Personal finance",
          "Insurance"
        ],
        "id": null
      },
      {
        "internalId": "6003220634758",
        "name": "Discount stores",
        "description": null,
        "audienceSize": "169104872",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Shopping",
          "Discount stores"
        ],
        "id": null
      },
      {
        "internalId": "6003224441249",
        "name": "Televisions",
        "description": null,
        "audienceSize": "831067920",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "Televisions"
        ],
        "id": null
      },
      {
        "internalId": "6003225325061",
        "name": "Thriller movies",
        "description": null,
        "audienceSize": "248846270",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Thriller movies"
        ],
        "id": null
      },
      {
        "internalId": "6003225556345",
        "name": "Hip hop music",
        "description": null,
        "audienceSize": "397023060",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Hip hop music"
        ],
        "id": null
      },
      {
        "internalId": "6003225930699",
        "name": "Cruises",
        "description": null,
        "audienceSize": "124106030",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Cruises"
        ],
        "id": null
      },
      {
        "internalId": "6003232518610",
        "name": "Parenting",
        "description": null,
        "audienceSize": "137172310",
        "type": "interests",
        "path": [
          "Family and relationships",
          "Parenting"
        ],
        "id": null
      },
      {
        "internalId": "6003234413249",
        "name": "Home improvement",
        "description": null,
        "audienceSize": "50722770",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Home and garden",
          "Home improvement"
        ],
        "id": null
      },
      {
        "internalId": "6003240742699",
        "name": "Seafood",
        "description": null,
        "audienceSize": "70081390",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food",
          "Seafood"
        ],
        "id": null
      },
      {
        "internalId": "6003243058188",
        "name": "Diners",
        "description": null,
        "audienceSize": "46920960",
        "type": "interests",
        "path": [
          "Food and drink",
          "Restaurants",
          "Diners"
        ],
        "id": null
      },
      {
        "internalId": "6003243604899",
        "name": "Action movies",
        "description": null,
        "audienceSize": "114468760",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Action movies"
        ],
        "id": null
      },
      {
        "internalId": "6003246168013",
        "name": "Simulation games",
        "description": null,
        "audienceSize": "119858600",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Simulation games"
        ],
        "id": null
      },
      {
        "internalId": "6003247127613",
        "name": "Ballet",
        "description": null,
        "audienceSize": "29700860",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events",
          "Ballet"
        ],
        "id": null
      },
      {
        "internalId": "6003247790075",
        "name": "Literature",
        "description": null,
        "audienceSize": "149950180",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Literature"
        ],
        "id": null
      },
      {
        "internalId": "6003247890613",
        "name": "Dancehalls",
        "description": null,
        "audienceSize": "66581540",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events",
          "Dancehalls"
        ],
        "id": null
      },
      {
        "internalId": "6003248338072",
        "name": "Casino games",
        "description": null,
        "audienceSize": "61393270",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Casino games"
        ],
        "id": null
      },
      {
        "internalId": "6003252179711",
        "name": "Engineering",
        "description": null,
        "audienceSize": "143682530",
        "type": "interests",
        "path": [
          "Business and industry",
          "Engineering"
        ],
        "id": null
      },
      {
        "internalId": "6003254590688",
        "name": "Spas",
        "description": null,
        "audienceSize": "255332350",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Beauty",
          "Spas"
        ],
        "id": null
      },
      {
        "internalId": "6003255640088",
        "name": "Sunglasses",
        "description": null,
        "audienceSize": "166810540",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Fashion accessories",
          "Sunglasses"
        ],
        "id": null
      },
      {
        "internalId": "6003257757682",
        "name": "Blues music",
        "description": null,
        "audienceSize": "245173310",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Blues music"
        ],
        "id": null
      },
      {
        "internalId": "6003263791114",
        "name": "Shopping",
        "description": null,
        "audienceSize": "935026400",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Shopping"
        ],
        "id": null
      },
      {
        "internalId": "6003266061909",
        "name": "Food",
        "description": null,
        "audienceSize": "974434260",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food"
        ],
        "id": null
      },
      {
        "internalId": "6003266225248",
        "name": "Jewelry",
        "description": null,
        "audienceSize": "413521600",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Fashion accessories",
          "Jewelry"
        ],
        "id": null
      },
      {
        "internalId": "6003266266843",
        "name": "Fashion design",
        "description": null,
        "audienceSize": "127507140",
        "type": "interests",
        "path": [
          "Business and industry",
          "Design",
          "Fashion design"
        ],
        "id": null
      },
      {
        "internalId": "6003268182136",
        "name": "TV reality shows",
        "description": null,
        "audienceSize": "234511530",
        "type": "interests",
        "path": [
          "Entertainment",
          "TV",
          "TV reality shows"
        ],
        "id": null
      },
      {
        "internalId": "6003269553527",
        "name": "Sports",
        "description": null,
        "audienceSize": "1080092430",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports"
        ],
        "id": null
      },
      {
        "internalId": "6003270811593",
        "name": "Higher education",
        "description": null,
        "audienceSize": "463033240",
        "type": "interests",
        "path": [
          "Business and industry",
          "Higher education"
        ],
        "id": null
      },
      {
        "internalId": "6003274262708",
        "name": "Fiction books",
        "description": null,
        "audienceSize": "131390870",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Fiction books"
        ],
        "id": null
      },
      {
        "internalId": "6003277229371",
        "name": "Physical fitness",
        "description": null,
        "audienceSize": "249528290",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Physical fitness"
        ],
        "id": null
      },
      {
        "internalId": "6003279598823",
        "name": "Marketing",
        "description": null,
        "audienceSize": "317533540",
        "type": "interests",
        "path": [
          "Business and industry",
          "Marketing"
        ],
        "id": null
      },
      {
        "internalId": "6003280676501",
        "name": "GPS devices",
        "description": null,
        "audienceSize": "15092666",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "GPS devices"
        ],
        "id": null
      },
      {
        "internalId": "6003280740901",
        "name": "Veterans",
        "description": null,
        "audienceSize": "20786966",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Veterans"
        ],
        "id": null
      },
      {
        "internalId": "6003283801502",
        "name": "Thai cuisine",
        "description": null,
        "audienceSize": "29090720",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Thai cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003286289697",
        "name": "Birds",
        "description": null,
        "audienceSize": "145313840",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Pets",
          "Birds"
        ],
        "id": null
      },
      {
        "internalId": "6003288647527",
        "name": "Projectors",
        "description": null,
        "audienceSize": "20578739",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "Projectors"
        ],
        "id": null
      },
      {
        "internalId": "6003289911338",
        "name": "Smartphones",
        "description": null,
        "audienceSize": "440272100",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "Smartphones"
        ],
        "id": null
      },
      {
        "internalId": "6003290005325",
        "name": "Web development",
        "description": null,
        "audienceSize": "13775438",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Web development"
        ],
        "id": null
      },
      {
        "internalId": "6003290811111",
        "name": "Current events",
        "description": null,
        "audienceSize": "516543880",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Current events"
        ],
        "id": null
      },
      {
        "internalId": "6003297396138",
        "name": "Banking",
        "description": null,
        "audienceSize": "235016760",
        "type": "interests",
        "path": [
          "Business and industry",
          "Banking"
        ],
        "id": null
      },
      {
        "internalId": "6003299204611",
        "name": "Beverages",
        "description": null,
        "audienceSize": "622129410",
        "type": "interests",
        "path": [
          "Food and drink",
          "Beverages"
        ],
        "id": null
      },
      {
        "internalId": "6003302121228",
        "name": "Guitar",
        "description": null,
        "audienceSize": "69519770",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Guitar"
        ],
        "id": null
      },
      {
        "internalId": "6003304473660",
        "name": "SUVs",
        "description": null,
        "audienceSize": "52134200",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "SUVs"
        ],
        "id": null
      },
      {
        "internalId": "6003305361460",
        "name": "TV comedies",
        "description": null,
        "audienceSize": "60163920",
        "type": "interests",
        "path": [
          "Entertainment",
          "TV",
          "TV comedies"
        ],
        "id": null
      },
      {
        "internalId": "6003306084421",
        "name": "Yoga",
        "description": null,
        "audienceSize": "148435040",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Yoga"
        ],
        "id": null
      },
      {
        "internalId": "6003306415421",
        "name": "Greek cuisine",
        "description": null,
        "audienceSize": "8696115",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Greek cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003324287371",
        "name": "Skiing",
        "description": null,
        "audienceSize": "124227650",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Skiing"
        ],
        "id": null
      },
      {
        "internalId": "6003324917336",
        "name": "Nutrition",
        "description": null,
        "audienceSize": "215916140",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Nutrition"
        ],
        "id": null
      },
      {
        "internalId": "6003325186571",
        "name": "Cameras",
        "description": null,
        "audienceSize": "205612710",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "Cameras"
        ],
        "id": null
      },
      {
        "internalId": "6003327856180",
        "name": "Dieting",
        "description": null,
        "audienceSize": "119128190",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Dieting"
        ],
        "id": null
      },
      {
        "internalId": "6003332344237",
        "name": "Dogs",
        "description": null,
        "audienceSize": "313611680",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Pets",
          "Dogs"
        ],
        "id": null
      },
      {
        "internalId": "6003332483177",
        "name": "Music videos",
        "description": null,
        "audienceSize": "514697170",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Music videos"
        ],
        "id": null
      },
      {
        "internalId": "6003341579196",
        "name": "Pop music",
        "description": null,
        "audienceSize": "641702360",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Pop music"
        ],
        "id": null
      },
      {
        "internalId": "6003342470823",
        "name": "Board games",
        "description": null,
        "audienceSize": "45323470",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Board games"
        ],
        "id": null
      },
      {
        "internalId": "6003343485089",
        "name": "Korean cuisine",
        "description": null,
        "audienceSize": "18615030",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Korean cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003343997689",
        "name": "Home Appliances",
        "description": null,
        "audienceSize": "100525810",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Home and garden",
          "Home Appliances"
        ],
        "id": null
      },
      {
        "internalId": "6003346311730",
        "name": "Vietnamese cuisine",
        "description": null,
        "audienceSize": "12316641",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Vietnamese cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003346592981",
        "name": "Online shopping",
        "description": null,
        "audienceSize": "748560770",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Shopping",
          "Online shopping"
        ],
        "id": null
      },
      {
        "internalId": "6003348453981",
        "name": "Shoes",
        "description": null,
        "audienceSize": "430682010",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Clothing",
          "Shoes"
        ],
        "id": null
      },
      {
        "internalId": "6003348604581",
        "name": "Fashion accessories",
        "description": null,
        "audienceSize": "531254740",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Fashion accessories"
        ],
        "id": null
      },
      {
        "internalId": "6003348662930",
        "name": "Camping",
        "description": null,
        "audienceSize": "80676300",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Outdoor recreation",
          "Camping"
        ],
        "id": null
      },
      {
        "internalId": "6003349175527",
        "name": "Computer memory",
        "description": null,
        "audienceSize": "9758712",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Computer memory"
        ],
        "id": null
      },
      {
        "internalId": "6003349442621",
        "name": "Entertainment",
        "description": null,
        "audienceSize": "1188283670",
        "type": "interests",
        "path": [
          "Entertainment"
        ],
        "id": null
      },
      {
        "internalId": "6003351312828",
        "name": "Musical theatre",
        "description": null,
        "audienceSize": "81212780",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Musical theatre"
        ],
        "id": null
      },
      {
        "internalId": "6003351764757",
        "name": "Triathlons",
        "description": null,
        "audienceSize": "63854219",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Triathlons"
        ],
        "id": null
      },
      {
        "internalId": "6003353550130",
        "name": "Motorcycles",
        "description": null,
        "audienceSize": "178723980",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "Motorcycles"
        ],
        "id": null
      },
      {
        "internalId": "6003355530237",
        "name": "Gyms",
        "description": null,
        "audienceSize": "178184030",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Gyms"
        ],
        "id": null
      },
      {
        "internalId": "6003359996821",
        "name": "Nature",
        "description": null,
        "audienceSize": "539883240",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Nature"
        ],
        "id": null
      },
      {
        "internalId": "6003361714600",
        "name": "Nightclubs",
        "description": null,
        "audienceSize": "226551110",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events",
          "Nightclubs"
        ],
        "id": null
      },
      {
        "internalId": "6003369240775",
        "name": "Basketball",
        "description": null,
        "audienceSize": "381708460",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Basketball"
        ],
        "id": null
      },
      {
        "internalId": "6003369521274",
        "name": "Zumba",
        "description": null,
        "audienceSize": "77109920",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Zumba"
        ],
        "id": null
      },
      {
        "internalId": "6003369782940",
        "name": "Credit cards",
        "description": null,
        "audienceSize": "231260120",
        "type": "interests",
        "path": [
          "Business and industry",
          "Personal finance",
          "Credit cards"
        ],
        "id": null
      },
      {
        "internalId": "6003370636074",
        "name": "Search engine optimization",
        "description": null,
        "audienceSize": "18490780",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Search engine optimization"
        ],
        "id": null
      },
      {
        "internalId": "6003371567474",
        "name": "Entrepreneurship",
        "description": null,
        "audienceSize": "125090460",
        "type": "interests",
        "path": [
          "Business and industry",
          "Entrepreneurship"
        ],
        "id": null
      },
      {
        "internalId": "6003372667195",
        "name": "Fast food restaurants",
        "description": null,
        "audienceSize": "52545970",
        "type": "interests",
        "path": [
          "Food and drink",
          "Restaurants",
          "Fast food restaurants"
        ],
        "id": null
      },
      {
        "internalId": "6003373175581",
        "name": "Documentary movies",
        "description": null,
        "audienceSize": "140685860",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Documentary movies"
        ],
        "id": null
      },
      {
        "internalId": "6003375422677",
        "name": "Drama movies",
        "description": null,
        "audienceSize": "140410100",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Drama movies"
        ],
        "id": null
      },
      {
        "internalId": "6003376089674",
        "name": "American football",
        "description": null,
        "audienceSize": "215485010",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "American football"
        ],
        "id": null
      },
      {
        "internalId": "6003380576181",
        "name": "Role-playing games",
        "description": null,
        "audienceSize": "136198440",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Role-playing games"
        ],
        "id": null
      },
      {
        "internalId": "6003381994165",
        "name": "Portable media players",
        "description": null,
        "audienceSize": "6678710",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "Portable media players"
        ],
        "id": null
      },
      {
        "internalId": "6003382151137",
        "name": "Reptiles",
        "description": null,
        "audienceSize": "14825270",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Pets",
          "Reptiles"
        ],
        "id": null
      },
      {
        "internalId": "6003384248805",
        "name": "Fitness and wellness",
        "description": null,
        "audienceSize": "642283380",
        "type": "interests",
        "path": [
          "Fitness and wellness"
        ],
        "id": null
      },
      {
        "internalId": "6003385141743",
        "name": "Racing games",
        "description": null,
        "audienceSize": "80185220",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Racing games"
        ],
        "id": null
      },
      {
        "internalId": "6003385609165",
        "name": "Recipes",
        "description": null,
        "audienceSize": "205082250",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cooking",
          "Recipes"
        ],
        "id": null
      },
      {
        "internalId": "6003387418453",
        "name": "Web hosting",
        "description": null,
        "audienceSize": "13079930",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Web hosting"
        ],
        "id": null
      },
      {
        "internalId": "6003387633593",
        "name": "Drums",
        "description": null,
        "audienceSize": "14496155",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Drums"
        ],
        "id": null
      },
      {
        "internalId": "6003388314512",
        "name": "Investment",
        "description": null,
        "audienceSize": "143319790",
        "type": "interests",
        "path": [
          "Business and industry",
          "Personal finance",
          "Investment"
        ],
        "id": null
      },
      {
        "internalId": "6003389760112",
        "name": "Social media marketing",
        "description": null,
        "audienceSize": "15637844",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Social media marketing"
        ],
        "id": null
      },
      {
        "internalId": "6003390752144",
        "name": "Shopping malls",
        "description": null,
        "audienceSize": "257161390",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Shopping",
          "Shopping malls"
        ],
        "id": null
      },
      {
        "internalId": "6003392512725",
        "name": "Energy drinks",
        "description": null,
        "audienceSize": "46102670",
        "type": "interests",
        "path": [
          "Food and drink",
          "Beverages",
          "Energy drinks"
        ],
        "id": null
      },
      {
        "internalId": "6003394580331",
        "name": "RVs",
        "description": null,
        "audienceSize": "12712770",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "RVs"
        ],
        "id": null
      },
      {
        "internalId": "6003395353671",
        "name": "Religion",
        "description": null,
        "audienceSize": "375608640",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Religion"
        ],
        "id": null
      },
      {
        "internalId": "6003395414271",
        "name": "Construction",
        "description": null,
        "audienceSize": "196285320",
        "type": "interests",
        "path": [
          "Business and industry",
          "Construction"
        ],
        "id": null
      },
      {
        "internalId": "6003397425735",
        "name": "Tennis",
        "description": null,
        "audienceSize": "176333520",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Tennis"
        ],
        "id": null
      },
      {
        "internalId": "6003397496347",
        "name": "Running",
        "description": null,
        "audienceSize": "132762520",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Running"
        ],
        "id": null
      },
      {
        "internalId": "6003398056603",
        "name": "Fast casual restaurants",
        "description": null,
        "audienceSize": "24236567",
        "type": "interests",
        "path": [
          "Food and drink",
          "Restaurants",
          "Fast casual restaurants"
        ],
        "id": null
      },
      {
        "internalId": "6003402305839",
        "name": "Business",
        "description": null,
        "audienceSize": "624243850",
        "type": "interests",
        "path": [
          "Business and industry",
          "Business"
        ],
        "id": null
      },
      {
        "internalId": "6003402518839",
        "name": "Web design",
        "description": null,
        "audienceSize": "21538530",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Web design"
        ],
        "id": null
      },
      {
        "internalId": "6003404634364",
        "name": "Computers",
        "description": null,
        "audienceSize": "1037309440",
        "type": "interests",
        "path": [
          "Technology",
          "Computers"
        ],
        "id": null
      },
      {
        "internalId": "6003409043877",
        "name": "Alcoholic beverages",
        "description": null,
        "audienceSize": "356121590",
        "type": "interests",
        "path": [
          "Food and drink",
          "Alcoholic beverages"
        ],
        "id": null
      },
      {
        "internalId": "6003409392877",
        "name": "Weddings",
        "description": null,
        "audienceSize": "225421310",
        "type": "interests",
        "path": [
          "Family and relationships",
          "Weddings"
        ],
        "id": null
      },
      {
        "internalId": "6003415393053",
        "name": "Children's clothing",
        "description": null,
        "audienceSize": "134127463",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Clothing",
          "Children's clothing"
        ],
        "id": null
      },
      {
        "internalId": "6003416777039",
        "name": "Horses",
        "description": null,
        "audienceSize": "119899280",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Pets",
          "Horses"
        ],
        "id": null
      },
      {
        "internalId": "6003417378239",
        "name": "Plays",
        "description": null,
        "audienceSize": "182230630",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events",
          "Plays"
        ],
        "id": null
      },
      {
        "internalId": "6003420024431",
        "name": "French cuisine",
        "description": null,
        "audienceSize": "25122081",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "French cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003420644631",
        "name": "Non-fiction books",
        "description": null,
        "audienceSize": "23561291",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Non-fiction books"
        ],
        "id": null
      },
      {
        "internalId": "6003422719241",
        "name": "Charity and causes",
        "description": null,
        "audienceSize": "94026490",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Charity and causes"
        ],
        "id": null
      },
      {
        "internalId": "6003423342191",
        "name": "Dance",
        "description": null,
        "audienceSize": "479643620",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Dance"
        ],
        "id": null
      },
      {
        "internalId": "6003423416540",
        "name": "Free software",
        "description": null,
        "audienceSize": "506415680",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Free software"
        ],
        "id": null
      },
      {
        "internalId": "6003424404140",
        "name": "Marathons",
        "description": null,
        "audienceSize": "65444732",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Marathons"
        ],
        "id": null
      },
      {
        "internalId": "6003430600057",
        "name": "Lakes",
        "description": null,
        "audienceSize": "138314750",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Lakes"
        ],
        "id": null
      },
      {
        "internalId": "6003430696269",
        "name": "Tourism",
        "description": null,
        "audienceSize": "352348330",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Tourism"
        ],
        "id": null
      },
      {
        "internalId": "6003431201869",
        "name": "Beaches",
        "description": null,
        "audienceSize": "215354740",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Beaches"
        ],
        "id": null
      },
      {
        "internalId": "6003434373937",
        "name": "Browser games",
        "description": null,
        "audienceSize": "63544300",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Browser games"
        ],
        "id": null
      },
      {
        "internalId": "6003435096731",
        "name": "Barbecue",
        "description": null,
        "audienceSize": "96383170",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food",
          "Barbecue"
        ],
        "id": null
      },
      {
        "internalId": "6003436950375",
        "name": "Restaurants",
        "description": null,
        "audienceSize": "401673120",
        "type": "interests",
        "path": [
          "Food and drink",
          "Restaurants"
        ],
        "id": null
      },
      {
        "internalId": "6003443805331",
        "name": "Fragrances",
        "description": null,
        "audienceSize": "264331910",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Beauty",
          "Fragrances"
        ],
        "id": null
      },
      {
        "internalId": "6003445506042",
        "name": "Marriage",
        "description": null,
        "audienceSize": "160811390",
        "type": "interests",
        "path": [
          "Family and relationships",
          "Marriage"
        ],
        "id": null
      },
      {
        "internalId": "6003446055283",
        "name": "Scooters",
        "description": null,
        "audienceSize": "21909400",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "Scooters"
        ],
        "id": null
      },
      {
        "internalId": "6003456330903",
        "name": "Hair products",
        "description": null,
        "audienceSize": "331294520",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Beauty",
          "Hair products"
        ],
        "id": null
      },
      {
        "internalId": "6003456388203",
        "name": "Clothing",
        "description": null,
        "audienceSize": "786663760",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Clothing"
        ],
        "id": null
      },
      {
        "internalId": "6003461162225",
        "name": "Pet food",
        "description": null,
        "audienceSize": "17508589",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Pets",
          "Pet food"
        ],
        "id": null
      },
      {
        "internalId": "6003462707303",
        "name": "Books",
        "description": null,
        "audienceSize": "597894860",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Books"
        ],
        "id": null
      },
      {
        "internalId": "6003464109203",
        "name": "Health care",
        "description": null,
        "audienceSize": "110851960",
        "type": "interests",
        "path": [
          "Business and industry",
          "Health care"
        ],
        "id": null
      },
      {
        "internalId": "6003466585319",
        "name": "Online banking",
        "description": null,
        "audienceSize": "36408720",
        "type": "interests",
        "path": [
          "Business and industry",
          "Banking",
          "Online banking"
        ],
        "id": null
      },
      {
        "internalId": "6003470511564",
        "name": "Do it yourself (DIY)",
        "description": null,
        "audienceSize": "138399410",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Home and garden",
          "Do it yourself (DIY)"
        ],
        "id": null
      },
      {
        "internalId": "6003471508663",
        "name": "Shooter games",
        "description": null,
        "audienceSize": "133702610",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Shooter games"
        ],
        "id": null
      },
      {
        "internalId": "6003473077165",
        "name": "Weight training",
        "description": null,
        "audienceSize": "92318720",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Weight training"
        ],
        "id": null
      },
      {
        "internalId": "6003476182657",
        "name": "Family",
        "description": null,
        "audienceSize": "796854870",
        "type": "interests",
        "path": [
          "Family and relationships",
          "Family"
        ],
        "id": null
      },
      {
        "internalId": "6003481391264",
        "name": "Display advertising",
        "description": null,
        "audienceSize": "10805931",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Display advertising"
        ],
        "id": null
      },
      {
        "internalId": "6003491283786",
        "name": "Tea",
        "description": null,
        "audienceSize": "361959980",
        "type": "interests",
        "path": [
          "Food and drink",
          "Beverages",
          "Tea"
        ],
        "id": null
      },
      {
        "internalId": "6003493980595",
        "name": "Country music",
        "description": null,
        "audienceSize": "306582440",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Country music"
        ],
        "id": null
      },
      {
        "internalId": "6003494675627",
        "name": "Indian cuisine",
        "description": null,
        "audienceSize": "18446510",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "Indian cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6003509171264",
        "name": "Hiking",
        "description": null,
        "audienceSize": "55014080",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Outdoor recreation",
          "Hiking"
        ],
        "id": null
      },
      {
        "internalId": "6003510075864",
        "name": "Golf",
        "description": null,
        "audienceSize": "121696860",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Golf"
        ],
        "id": null
      },
      {
        "internalId": "6003512053894",
        "name": "Snowboarding",
        "description": null,
        "audienceSize": "104403985",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Sports",
          "Snowboarding"
        ],
        "id": null
      },
      {
        "internalId": "6003526234370",
        "name": "Online advertising",
        "description": null,
        "audienceSize": "69652140",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Online advertising"
        ],
        "id": null
      },
      {
        "internalId": "6003540150873",
        "name": "Sports games",
        "description": null,
        "audienceSize": "109850750",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Sports games"
        ],
        "id": null
      },
      {
        "internalId": "6003572379887",
        "name": "Hotels",
        "description": null,
        "audienceSize": "318192270",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Hotels"
        ],
        "id": null
      },
      {
        "internalId": "6003578086487",
        "name": "Real estate",
        "description": null,
        "audienceSize": "96807920",
        "type": "interests",
        "path": [
          "Business and industry",
          "Real estate"
        ],
        "id": null
      },
      {
        "internalId": "6003582500438",
        "name": "Strategy games",
        "description": null,
        "audienceSize": "72113420",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Strategy games"
        ],
        "id": null
      },
      {
        "internalId": "6003582732907",
        "name": "Rock music",
        "description": null,
        "audienceSize": "638963300",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Rock music"
        ],
        "id": null
      },
      {
        "internalId": "6003584163107",
        "name": "Advertising",
        "description": null,
        "audienceSize": "244553000",
        "type": "interests",
        "path": [
          "Business and industry",
          "Advertising"
        ],
        "id": null
      },
      {
        "internalId": "6003586608473",
        "name": "Writing",
        "description": null,
        "audienceSize": "160333900",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Writing"
        ],
        "id": null
      },
      {
        "internalId": "6003605717820",
        "name": "Anime movies",
        "description": null,
        "audienceSize": "111229140",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Anime movies"
        ],
        "id": null
      },
      {
        "internalId": "6003626773307",
        "name": "Coffee",
        "description": null,
        "audienceSize": "394080920",
        "type": "interests",
        "path": [
          "Food and drink",
          "Beverages",
          "Coffee"
        ],
        "id": null
      },
      {
        "internalId": "6003629266583",
        "name": "Hard drives",
        "description": null,
        "audienceSize": "26232440",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Hard drives"
        ],
        "id": null
      },
      {
        "internalId": "6003633122583",
        "name": "Heavy metal music",
        "description": null,
        "audienceSize": "256506140",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Heavy metal music"
        ],
        "id": null
      },
      {
        "internalId": "6003641846820",
        "name": "Veganism",
        "description": null,
        "audienceSize": "71524536",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food",
          "Veganism"
        ],
        "id": null
      },
      {
        "internalId": "6003647522546",
        "name": "Card games",
        "description": null,
        "audienceSize": "144361040",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Card games"
        ],
        "id": null
      },
      {
        "internalId": "6003648059946",
        "name": "Bodybuilding",
        "description": null,
        "audienceSize": "81661290",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Bodybuilding"
        ],
        "id": null
      },
      {
        "internalId": "6003649983713",
        "name": "Design",
        "description": null,
        "audienceSize": "766565070",
        "type": "interests",
        "path": [
          "Business and industry",
          "Design"
        ],
        "id": null
      },
      {
        "internalId": "6003654559478",
        "name": "Politics",
        "description": null,
        "audienceSize": "168467540",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Politics"
        ],
        "id": null
      },
      {
        "internalId": "6003656063078",
        "name": "Nursing",
        "description": null,
        "audienceSize": "75584330",
        "type": "interests",
        "path": [
          "Business and industry",
          "Nursing"
        ],
        "id": null
      },
      {
        "internalId": "6003656112304",
        "name": "Economics",
        "description": null,
        "audienceSize": "216216880",
        "type": "interests",
        "path": [
          "Business and industry",
          "Economics"
        ],
        "id": null
      },
      {
        "internalId": "6003656296104",
        "name": "Network storage",
        "description": null,
        "audienceSize": "16368500",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Network storage"
        ],
        "id": null
      },
      {
        "internalId": "6003656922020",
        "name": "Horror movies",
        "description": null,
        "audienceSize": "196438630",
        "type": "interests",
        "path": [
          "Entertainment",
          "Movies",
          "Horror movies"
        ],
        "id": null
      },
      {
        "internalId": "6003659420716",
        "name": "Cooking",
        "description": null,
        "audienceSize": "360263510",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cooking"
        ],
        "id": null
      },
      {
        "internalId": "6003668857118",
        "name": "Pizza",
        "description": null,
        "audienceSize": "183721200",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food",
          "Pizza"
        ],
        "id": null
      },
      {
        "internalId": "6003668975718",
        "name": "Puzzle video games",
        "description": null,
        "audienceSize": "198519450",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Puzzle video games"
        ],
        "id": null
      },
      {
        "internalId": "6003703762913",
        "name": "Law",
        "description": null,
        "audienceSize": "257070280",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Law"
        ],
        "id": null
      },
      {
        "internalId": "6003703931713",
        "name": "Juice",
        "description": null,
        "audienceSize": "88717570",
        "type": "interests",
        "path": [
          "Food and drink",
          "Beverages",
          "Juice"
        ],
        "id": null
      },
      {
        "internalId": "6003716669862",
        "name": "Consumer electronics",
        "description": null,
        "audienceSize": "1167789400",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics"
        ],
        "id": null
      },
      {
        "internalId": "6003717247746",
        "name": "Sculpture",
        "description": null,
        "audienceSize": "150642640",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Sculpture"
        ],
        "id": null
      },
      {
        "internalId": "6003717914546",
        "name": "Hybrids",
        "description": null,
        "audienceSize": "10204470",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "Hybrids"
        ],
        "id": null
      },
      {
        "internalId": "6003729124262",
        "name": "Audio equipment",
        "description": null,
        "audienceSize": "17478183",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "Audio equipment"
        ],
        "id": null
      },
      {
        "internalId": "6003778400853",
        "name": "Retail",
        "description": null,
        "audienceSize": "385419070",
        "type": "interests",
        "path": [
          "Business and industry",
          "Retail"
        ],
        "id": null
      },
      {
        "internalId": "6003779859852",
        "name": "Horseback riding",
        "description": null,
        "audienceSize": "29305510",
        "type": "interests",
        "path": [
          "Sports and outdoors",
          "Outdoor recreation",
          "Horseback riding"
        ],
        "id": null
      },
      {
        "internalId": "6003780008652",
        "name": "Online",
        "description": null,
        "audienceSize": "538810100",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online"
        ],
        "id": null
      },
      {
        "internalId": "6003780025252",
        "name": "Drawing",
        "description": null,
        "audienceSize": "97178630",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Drawing"
        ],
        "id": null
      },
      {
        "internalId": "6003840140052",
        "name": "Agriculture",
        "description": null,
        "audienceSize": "237333750",
        "type": "interests",
        "path": [
          "Business and industry",
          "Agriculture"
        ],
        "id": null
      },
      {
        "internalId": "6003899195666",
        "name": "Photography",
        "description": null,
        "audienceSize": "684292080",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Arts and music",
          "Photography"
        ],
        "id": null
      },
      {
        "internalId": "6003902397066",
        "name": "Electronic music",
        "description": null,
        "audienceSize": "436311310",
        "type": "interests",
        "path": [
          "Entertainment",
          "Music",
          "Electronic music"
        ],
        "id": null
      },
      {
        "internalId": "6003902462066",
        "name": "Theme parks",
        "description": null,
        "audienceSize": "127981890",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel",
          "Theme parks"
        ],
        "id": null
      },
      {
        "internalId": "6003940339466",
        "name": "Video games",
        "description": null,
        "audienceSize": "817967610",
        "type": "interests",
        "path": [
          "Entertainment",
          "Games",
          "Video games"
        ],
        "id": null
      },
      {
        "internalId": "6003943667466",
        "name": "Game consoles",
        "description": null,
        "audienceSize": "369631110",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "Game consoles"
        ],
        "id": null
      },
      {
        "internalId": "6003970975896",
        "name": "Environmentalism",
        "description": null,
        "audienceSize": "32068661",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues",
          "Environmentalism"
        ],
        "id": null
      },
      {
        "internalId": "6003985771306",
        "name": "Technology",
        "description": null,
        "audienceSize": "1223946930",
        "type": "interests",
        "path": [
          "Technology"
        ],
        "id": null
      },
      {
        "internalId": "6004030160948",
        "name": "Social media",
        "description": null,
        "audienceSize": "159063500",
        "type": "interests",
        "path": [
          "Business and industry",
          "Online",
          "Social media"
        ],
        "id": null
      },
      {
        "internalId": "6004037107009",
        "name": "Boats",
        "description": null,
        "audienceSize": "56613210",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Vehicles",
          "Boats"
        ],
        "id": null
      },
      {
        "internalId": "6004037400009",
        "name": "Fast food",
        "description": null,
        "audienceSize": "178119350",
        "type": "interests",
        "path": [
          "Food and drink",
          "Food",
          "Fast food"
        ],
        "id": null
      },
      {
        "internalId": "6004037726009",
        "name": "Pets",
        "description": null,
        "audienceSize": "455638050",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Pets"
        ],
        "id": null
      },
      {
        "internalId": "6004037932409",
        "name": "Management",
        "description": null,
        "audienceSize": "185491410",
        "type": "interests",
        "path": [
          "Business and industry",
          "Management"
        ],
        "id": null
      },
      {
        "internalId": "6004043913548",
        "name": "Newspapers",
        "description": null,
        "audienceSize": "463697040",
        "type": "interests",
        "path": [
          "Entertainment",
          "Reading",
          "Newspapers"
        ],
        "id": null
      },
      {
        "internalId": "6004094205989",
        "name": "German cuisine",
        "description": null,
        "audienceSize": "9331869",
        "type": "interests",
        "path": [
          "Food and drink",
          "Cuisine",
          "German cuisine"
        ],
        "id": null
      },
      {
        "internalId": "6004100985609",
        "name": "Friendship",
        "description": null,
        "audienceSize": "713483840",
        "type": "interests",
        "path": [
          "Family and relationships",
          "Friendship"
        ],
        "id": null
      },
      {
        "internalId": "6004115167424",
        "name": "Physical exercise",
        "description": null,
        "audienceSize": "249367400",
        "type": "interests",
        "path": [
          "Fitness and wellness",
          "Physical exercise"
        ],
        "id": null
      },
      {
        "internalId": "6004140335706",
        "name": "Architecture",
        "description": null,
        "audienceSize": "354986690",
        "type": "interests",
        "path": [
          "Business and industry",
          "Architecture"
        ],
        "id": null
      },
      {
        "internalId": "6004160395895",
        "name": "Travel",
        "description": null,
        "audienceSize": "865500280",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Travel"
        ],
        "id": null
      },
      {
        "internalId": "6005609368513",
        "name": "Software",
        "description": null,
        "audienceSize": "499990630",
        "type": "interests",
        "path": [
          "Technology",
          "Computers",
          "Software"
        ],
        "id": null
      },
      {
        "internalId": "6007828099136",
        "name": "Luxury goods",
        "description": null,
        "audienceSize": "292410220",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Shopping",
          "Luxury goods"
        ],
        "id": null
      },
      {
        "internalId": "6008740787350",
        "name": "Business and industry",
        "description": null,
        "audienceSize": "953482860",
        "type": "interests",
        "path": [
          "Business and industry"
        ],
        "id": null
      },
      {
        "internalId": "6008803895164",
        "name": "Sports and outdoors",
        "description": null,
        "audienceSize": "1088493240",
        "type": "interests",
        "path": [
          "Sports and outdoors"
        ],
        "id": null
      },
      {
        "internalId": "6008832464480",
        "name": "E-book readers",
        "description": null,
        "audienceSize": "12185214",
        "type": "interests",
        "path": [
          "Technology",
          "Consumer electronics",
          "E-book readers"
        ],
        "id": null
      },
      {
        "internalId": "6009248606271",
        "name": "Food and drink",
        "description": null,
        "audienceSize": "1014075310",
        "type": "interests",
        "path": [
          "Food and drink"
        ],
        "id": null
      },
      {
        "internalId": "6009422452499",
        "name": "Home and garden",
        "description": null,
        "audienceSize": "410863540",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Home and garden"
        ],
        "id": null
      },
      {
        "internalId": "6010924093432",
        "name": "Live events",
        "description": null,
        "audienceSize": "526627630",
        "type": "interests",
        "path": [
          "Entertainment",
          "Live events"
        ],
        "id": null
      },
      {
        "internalId": "6011366104268",
        "name": "Women's clothing",
        "description": null,
        "audienceSize": "361817220",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Clothing",
          "Women's clothing"
        ],
        "id": null
      },
      {
        "internalId": "6011515350975",
        "name": "Politics and social issues",
        "description": null,
        "audienceSize": "554136600",
        "type": "interests",
        "path": [
          "Hobbies and activities",
          "Politics and social issues"
        ],
        "id": null
      },
      {
        "internalId": "6011994253127",
        "name": "Men's clothing",
        "description": null,
        "audienceSize": "230336840",
        "type": "interests",
        "path": [
          "Shopping and fashion",
          "Clothing",
          "Men's clothing"
        ],
        "id": null
      },
      {
        "internalId": "6012547807252",
        "name": "Hobbies and activities",
        "description": null,
        "audienceSize": "1036186750",
        "type": "interests",
        "path": [
          "Hobbies and activities"
        ],
        "id": null
      },
      {
        "internalId": "6012684376438",
        "name": "Family and relationships",
        "description": null,
        "audienceSize": "911414370",
        "type": "interests",
        "path": [
          "Family and relationships"
        ],
        "id": null
      }
    ];



  }
})();
