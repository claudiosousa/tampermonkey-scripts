// ==UserScript==
// @name         Octave-online
// @match        http://octave-online.net/
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        unsafeWindow
// ==/UserScript==

(function(){
    'use strict';
    var add_time_container;
    var tryExtendTimeout = ()=>add_time_container.is(':visible') && add_time_container.click();

    var initialize = ()=> {
        unsafeWindow.$('#change-skin').click();
        add_time_container = unsafeWindow.$('#add_time_container');
        setInterval(tryExtendTimeout, 1000);
    };



    setTimeout(initialize, 200);
})();
