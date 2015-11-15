module.exports = function(grunt) {

    // 1-2. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          dist: {
            src: [
                'js/*.js', // All JS in the libs folder
                'Gruntfile.js'  // This specific file
            ],
            dest: 'js/build/production.js',
          }

        },
        uglify: {
            build: {
              src: 'js/build/production.js',
              dest: 'js/build/production.min.js'
            }
        },
        imagemin: {
          dynamic: {
            files: [{
              expand: true,
              cwd: 'images/',
              src: ['**/*.{png,jpg,gif}'],
              dest: 'images/build/'
            }]
          }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'imagemin']);

};
