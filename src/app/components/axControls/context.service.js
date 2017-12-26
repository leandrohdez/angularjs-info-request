(function() {
    'use strict'

    angular
        .module('angularjsInfoRequest')
        .service('AXContextService', AXContextService);

    AXContextService.$inject = [];

    function AXContextService() {

        return {
            geodataInfo: geodataInfo
        }


        /**
         *  Geoplugin methods
         * 
         */
        function geodataInfo() {
            return {
                ip: geoplugin_request(),
                city: geoplugin_city(),
                region: geoplugin_region(),
                area: geoplugin_areaCode(),
                country: geoplugin_countryName() + '(' + geoplugin_countryCode() + ')',
                continent: geoplugin_continentCode(),
                latitude: geoplugin_latitude(),
                longitude: geoplugin_longitude(),
                currency_code: geoplugin_currencyCode(),
                currency_symbol: geoplugin_currencySymbol()
            }
          
        }
          

    }

})();