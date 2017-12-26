(function() {
  'use strict';

  angular
    .module('angularjsInfoRequest')
    .controller('MainController', MainController);

  MainController.$inject = ['$scope', '$timeout', 'AXContextService', 'AXBrowserService'];

  function MainController($scope, $timeout, AXContextService, AXBrowserService) {
    var vm = this;

    vm.geodata  = {};
    vm.geomap   = '';
    vm.browser  =  AXBrowserService.browserInfo();

    /**
     * Events
     * 
     */
    vm.onLoaded = function() {
      $timeout(function() {
        $scope.$apply(function(){
            vm.geodata = AXContextService.geodataInfo();
            
            getStaticMapImageUrl();
        });
      });
    }
    

    /**
     *  Methods
     * 
     */
    function getStaticMapImageUrl() {
      var lat = vm.geodata.latitude;
      var lon = vm.geodata.longitude;
      var key = 'AIzaSyC_kYu80NWbRqad_f4iMhWDmI_8ypvxj9A';
      var zoom = 10;
      vm.geomap = 'https://maps.googleapis.com/maps/api/staticmap?center=' + lat + ',' + lon + '&zoom=' + zoom + '&size=400x400&key='+key;
    }


    
  }
})();
