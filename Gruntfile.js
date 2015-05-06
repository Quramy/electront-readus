'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    'build-atom-shell': {
      tag: 'v0.25.2',
      nodeVersion: '0.25.0',
      buildDir: '.tmp/atom-shell',
      projectName: 'mycoolapp',
      productName: 'MyCoolApp'
    }
  });

  grunt.loadNpmTasks('grunt-build-atom-shell');

  grunt.registerTask('default', ['build-atom-shell']);
};
