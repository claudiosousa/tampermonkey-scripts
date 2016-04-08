// ==UserScript==
// @name         FSM
// @namespace    https://gitlab.com/claudio.sousa/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://madebyevan.com/fsm/
// @require      http://code.jquery.com/jquery-2.2.3.min.js
// @grant GM_setClipboard
// ==/UserScript==
/* jshint -W097 */
'use strict';

$(function(){

    var container = $('<div style="position: absolute;right: 20px;top: 20px;"></div>').appendTo('body');
    $('<button>Export</buttton>').appendTo(container).click(exportFsm);
    $('<button>Import</buttton>').appendTo(container).click(importFsm);
    $('<button>Reset</buttton>').appendTo(container).click(resetFsm);
});

var exportFsm = function (){
    GM_setClipboard(localStorage.getItem('fsm'), 'text');
    alert("FSM copied to the clipboard");
}

var importFsm = function (){
    var fsm = prompt("Paste the FSM script");
    if (!fsm)
        return;
    localStorage.setItem('fsm', fsm);
    location.reload();
}

var resetFsm = function (){
    localStorage.setItem('fsm', null);
    location.reload();
}
