module.exports = function (grunt) {
  'use strict';

  var pkg = grunt.file.readJSON('package.json');
  require('load-grunt-tasks')(grunt, undefined, pkg);

  grunt.initConfig({
    pkg: pkg,

    clean: {
      webfont: ['icons/jtn-light-ui.less']
    },

    webfont: {
        icons: {
            src: 'icons/optimized/*.svg',
            dest: 'icons/',
            options: {
                font: 'jtn-light-ui',
                engine: 'node',
                styles: ['font','icon','base'],
                types: 'woff',
                embed: true,
                htmlDemo: false,
                template: './icons/template.less',
                stylesheet: 'less'
            }
        }
    }
  });

  // Development environment
  grunt.registerTask('fonts', ['clean:webfont', 'webfont:icons']);
  grunt.registerTask('default', ['fonts']);
};
