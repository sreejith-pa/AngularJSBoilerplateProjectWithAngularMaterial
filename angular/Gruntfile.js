'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-compress');

  // Configurable paths for the application
  var appConfig = {
    app: 'app',
    dist: '../dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    compress: {
        main: {
            options: {
                archive: 'dist.zip',
                mode: 'zip'
            },
            files: [
                { src: '<%= yeoman.dist %>/**' }
            ]
        }
    }
  });

  grunt.registerTask('build', [
    'compress'
  ]);
};
