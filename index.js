'use strict';

var remote = require('remote');
var fileUtil = remote.require('./lib/fileUtil');
var win = remote.getCurrentWindow();
var ngModule = angular.module('readUs', []);

var matched = location.search.match(/baseDir=([^&]*)/);
var baseDir = matched && decodeURIComponent(matched[1]);

ngModule.controller('MainController', function ($scope) {
  var main = this;

  main.getFile = function(file) {
    main.fileText = fileUtil.getAsText(file.filepath);
  };

  fileUtil.fetchReadmeList(baseDir, function (err, fileList) {
    if(err) console.error(err);
    $scope.$apply(function () {
      main.fileList = fileList;
    });
  });
});

ngModule.directive('mdPreview', function () {
  return function ($scope, $elem, $attrs) {
    $scope.$watch($attrs.mdPreview, function(source) {
      $elem.html(marked(source));
    });
  };
});
