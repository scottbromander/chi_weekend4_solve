module.exports = function(grunt) {
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       uglify: {
         build: {
            src: 'client/scripts/client.js',
            dest: 'server/public/scripts/client.min.js'
         }
       },
       copy: {
         main : {
           expand: true,
           cwd: "node_modules/jquery/dist/",
           src: [
              "jquery.js"
           ],
           dest: "server/public/vendors/jquery/"
         },
         html : {
           expand: true,
           cwd: "client/views/",
           src: [
              "index.html"
           ],
           dest: "server/public/views/"
         },
         bootstrap : {
           expand: true,
           cwd: "node_modules/bootstrap/dist/",
           src: [
              "css/bootstrap.css",
              "js/bootstrap.js"
           ],
           dest: "server/public/vendors/bootstrap/"
         },
         css : {
           expand: true,
           cwd: "client/styles",
           src: [
              "style.css"
           ],
           dest: "server/public/styles/"
         }
       },
       watch: {
        files: ['client/scripts/*.js',
                'client/views/*.html',
                'client/styles/*.css'],
        tasks: ['uglify', 'copy']
      }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['copy', 'uglify', 'watch']);
};
