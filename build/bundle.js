(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var kao = require('../test2');

console.log('in test');
kao.myfun();
},{"../test2":3}],2:[function(require,module,exports){
var kao = 1;

var test1fun = function() {
    kao ++;
    console.log('test1 ' + kao);
};

module.exports = test1fun;
},{}],3:[function(require,module,exports){
var test2fun = require('./test1');

module.exports = {
    myfun: test2fun
};

test2fun();
test2fun();
test2fun();
test2fun();
},{"./test1":2}]},{},[1]);
