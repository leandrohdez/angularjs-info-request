(function() {
    'use strict'

    angular
        .module('angularjsInfoRequest')
        .service('AXBrowserService', AXBrowserService);

    AXBrowserService.$inject = [];

    function AXBrowserService() {

        return {
            isOpera: isOpera,
            isFirefox: isFirefox,
            isSafari: isSafari,
            isSafariIOS: isSafariIOS,
            isInternetExplorer: isInternetExplorer,
            isEdge: isEdge,
            isChrome: isChrome,
            isBlink: isBlink, 
            browserInfo: getBrowserInfo
        }

        function isOpera() {
            // Opera 8.0+
            return (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        }

        function isFirefox() {
            // Firefox 1.0+
            return typeof InstallTrigger !== 'undefined';
        }

        function isSafari() {
            // Safari 3.0+ "[object HTMLElementConstructor]"
            return /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
        }

        function isSafariIOS() {
            // Safari en iOS
            return (window.navigator.userAgent.match(/iPad/i) || window.navigator.userAgent.match(/iPhone/i)) ? true : false;
        }

        function isInternetExplorer() {
            // Internet Explorer 6-11
            return /*@cc_on!@*/false || !!document.documentMode;
        }

        function isEdge() {
            // Edge 20+
            return !isInternetExplorer() && !!window.StyleMedia;
        }

        function isChrome() {
            // Chrome 1+
            return !!window.chrome;
        }

        function isBlink() {
            // Blink engine detection
            return (isChrome || isOpera) && !!window.CSS;
        }

        function getBrowserInfo() {
            var result = {name: '', icon: '', is_blink: false};
            if(isOpera()) {
                result.name     = 'Opera Browser';
                result.icon     = 'https://cdn.worldvectorlogo.com/logos/opera-2.svg';
            }
            else if(isFirefox()) {
                result.name     = 'Mozilla Firefox';
                result.icon     = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Antu_firefox.svg/128px-Antu_firefox.svg.png';
            }
            else if(isSafari()) {
                result.name     = 'Safari';
                result.icon     = 'https://cdn.worldvectorlogo.com/logos/safari-3.svg';
            }
            else if(isSafariIOS()) {
                result.name     = 'Safari (iOS)';
                result.icon     = 'https://cdn.worldvectorlogo.com/logos/safari-3.svg';
            }
            else if(isInternetExplorer()) {
                result.name     = 'Microsoft Internet Explorer';
                result.icon     = 'https://cdn.worldvectorlogo.com/logos/internet-explorer-4.svg';
            }
            else if(isEdge()) {
                result.name     = 'Microsoft Edge';
                result.icon     = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Microsoft_Edge_logo.svg/128px-Microsoft_Edge_logo.svg.png';
            }
            else if(isChrome()) {
                result.name     = 'Google Chrome';
                result.icon     = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Google_Chrome_icon_%282011%29.svg/128px-Google_Chrome_icon_%282011%29.svg.png';
            }

            result.is_blink = isBlink();
            return result;
        }

    }


})();