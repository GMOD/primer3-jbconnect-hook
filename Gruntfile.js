module.exports = function(grunt) {

  grunt.initConfig({
        jshint: {
          files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
          options: {
            globals: {
              jQuery: true
            }
          }
        },

        watch: {
          files: ['<%= jshint.files %>'],
          tasks: ['jshint']
        }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  //grunt.loadNpmTasks('grunt-bump');
  //grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-publish');
  grunt.registerTask('default', ['jshint']);
  
  //grunt.registerTask('bump-publish',['bump','publish:jbh_jblast','publish:jblast_simtool']);
};
