module.exports = function( grunt ) {

    grunt.config.merge({

        // browserify
        browserify: {
            build: {
                src: 'js/kao/test.js',
                dest: 'build/bundle.js'
            }
        },

        // uglify
        uglify: {
            build: {
               src: 'build/bundle.js',
               dest: 'build/bundle.min.js' 
            }
        }

    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', 'build project.', ['browserify:build', 'uglify:build']);

};