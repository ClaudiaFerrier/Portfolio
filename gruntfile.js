module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({

    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } //options
      } //dev
    }, //compass

    uglify: {
      my_target: {  
        files: {
          '_/js/script.js': ['_/components/js/*.js']
        }
      }
    },
    watch: {
      options: { livereload: true },
      sass: {
        files: ['_/components/sass/*.scss'],
        tasks: ['compass:dev']
      }, //sass

      js: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      }, //js

      html: {
        files: ['*.html']
      } //html
    } //watch
  }); //initConfig

  grunt.registerTask('default', 'watch');

} //exports