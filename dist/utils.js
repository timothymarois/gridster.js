/*! gridster.js - v0.8.0 - 2020-11-21 - * https://dsmorse.github.io/gridster.js/ - Copyright (c) 2020 ducksboard; Licensed MIT */ !function(a,b){"use strict";a.delay=function(a,b){var c=Array.prototype.slice.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},a.debounce=function(a,b,c){var d;return function(){var e=this,f=arguments,g=function(){d=null,c||a.apply(e,f)};c&&!d&&a.apply(e,f),clearTimeout(d),d=setTimeout(g,b)}},a.throttle=function(a,b){var c,d,e,f,g,h,i=debounce(function(){g=f=!1},b);return function(){c=this,d=arguments;var j=function(){e=null,g&&a.apply(c,d),i()};return e||(e=setTimeout(j,b)),f?g=!0:h=a.apply(c,d),i(),f=!0,h}}}(window);