
module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 1600,
            suffix: '_large_2x',
            quality: 75
          }, {
            width: 800,
          suffix: '_large_1x',
          quality: 75
        }]
        },

        /*
        Only cange this part if you change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['images'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['images']
        },
      },
    },

    /* Copy the "fixed" images that don't go through processing into the images/directory */
    copy: {
      dev: {
        files: [{
          expand: true,
          src: 'images_src/fixed/*.{gif,jpg,png}',
          dest: 'images/'
        }]
      },
    },
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      dist: {
        src: [
            'js/*.js', // All JS in the libs folder
            // 'js/bootstrap.js',
            // 'js/script.js',
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

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['clean', 'mkdir', 'copy', 'responsive_images', 'concat', 'uglify']);

};
