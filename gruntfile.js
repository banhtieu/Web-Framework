
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    livereload: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.ts'],
                tasks: ['exec:tsc']
            },
            javascripts: {
                files: ['**/*.js', '**/*.html'],
                options: {
                    livereload: true
                }
            },
            options: {
                livereload: {
                    host: 'localhost',
                    port: 9000
                }
            }
        },
        exec: {
            web: {
                cmd: 'dnx kestrel &'
            },
            tsc: {
                cmd: 'tsc'
            }
        }
    });

    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('start', ['exec:web', 'watch']);

};