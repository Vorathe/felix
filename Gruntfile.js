module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
					outputStyle: 'compact',
					noLineComments: true
				}
			}
		},
		watch: {
			scss: {
				files: [ '**/*.scss' ],
				tasks: [ 'compass' ]
			},
			scripts: {
				files: [ 'Gruntfile.js' ],
				tasks: [ 'default' ]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [ 'compass', 'watch' ]);
};