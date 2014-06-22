'use strict';

module.exports = function(grunt){

    grunt.initConfig({

        bower: {
            install: {
                options: {
                    layout: 'byComponent',
                    cleanBowerDir: true
                }
            }
        },

        concat: {
            dist: {
                src: [
                    'lib/seedrandom/js/seedrandom.min.js',
                    'src/ng-dummy.js'
                ],
                dest: 'dist/ng-dummy.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-bower-task');


    grunt.registerTask('default', ['concat']);
}
