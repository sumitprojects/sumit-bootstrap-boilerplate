module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/moment/min/moment.min.js',
                    'node_modules/fontawesome/js/all.min.js',
                    'node_modules/datatables.net/js/*min.js',
                    'node_modules/datatables.net-bs4/js/*min.js',
                    'node_modules/datatables.net-buttons/js/*.buttons.min.js'
                ],
                dest: 'dist/app.min.js',
            },
            js2: {
                src: [
                    'node_modules/jszip/dist/*min.js',
                    'node_modules/pdfmake/build/pdfmake.min.js',
                    'node_modules/pdfmake/build/vfs_fonts.js',
                ],
                dest: 'dist/app2.min.js'
            },
            js3: {
                src: [
                    'node_modules/datatables.net-buttons/js/buttons.colVis.min.js',
                    'node_modules/datatables.net-buttons/js/buttons.html5.min.js',
                    'node_modules/datatables.net-buttons/js/buttons.print.min.js',
                    'node_modules/datatables.net-buttons-bs4/js/*min.js',
                    'node_modules/datatables.net-colreorder/js/*min.js',
                    'node_modules/datatables.net-colreorder-bs4/js/*min.js',
                    'node_modules/datatables.net-fixedcolumns/js/*min.js',
                    'node_modules/datatables.net-fixedcolumns-bs4/js/*min.js',
                    'node_modules/datatables.net-fixedheader/js/*min.js',
                    'node_modules/datatables.net-fixedheader-bs4/js/*min.js',
                    'node_modules/datatables.net-keytable/js/*min.js',
                    'node_modules/datatables.net-keytable-bs4/js/*min.js',
                    'node_modules/datatables.net-responsive/js/*min.js',
                    'node_modules/datatables.net-responsive-bs4/js/*min.js',
                    'node_modules/datatables.net-rowgroup/js/*min.js',
                    'node_modules/datatables.net-rowgroup-bs4/js/*min.js',
                    'node_modules/datatables.net-rowreorder/js/*min.js',
                    'node_modules/datatables.net-rowreorder-bs4/js/*min.js',
                    'node_modules/datatables.net-scroller/js/*min.js',
                    'node_modules/datatables.net-scroller-bs4/js/*min.js',
                    'node_modules/datatables.net-select/js/*min.js',
                    'node_modules/datatables.net-select-bs4/js/*min.js',
                    'node_modules/datatables.net-autofill/js/*min.js',
                    'node_modules/datatables.net-autofill-bs4/js/*min.js',
                ],
                dest: 'dist/app3.min.js',
            }
        },
        uglify: {
            build: {
                src: ['dist/app2.min.js'],
                dest: 'dist/app2.min.js',
            },
            build2: {
                src: ['theme-switcher.js'],
                dest: 'dist/theme-switcher.min.js'
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/theme.min.css': [
                        'node_modules/fontawesome/css/all.min.css',
                        'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        'node_modules/datatables.net-bs4/css/*min.css',
                        'node_modules/datatables.net-autofill-bs4/css/*min.css',
                        'node_modules/datatables.net-buttons-bs4/css/*min.css',
                        'node_modules/datatables.net-colreorder-bs4/css/*min.css',
                        'node_modules/datatables.net-fixedcolumns-bs4/css/*min.css',
                        'node_modules/datatables.net-fixedheader-bs4/css/*min.cc',
                        'node_modules/datatables.net-keytable-bs4/css/*min.css',
                        'node_modules/datatables.net-responsive-bs4/css/*min.css',
                        'node_modules/datatables.net-rowgroup-bs4/css/*min.css',
                        'node_modules/datatables.net-rowreorder-bs4/css/*min.css',
                        'node_modules/datatables.net-scroller-bs4/css/*min.css',
                        'node_modules/datatables.net-select-bs4/css/*min.css',
                    ],
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/moment/min/moment.min.js',
                    'node_modules/fontawesome/js/all.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                ],
                tasks: ['concat', 'uglify', 'cssmin'],
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('develop', ['concat', 'uglify', 'cssmin']);

};