var d = new Date();
var date = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getHours();
var last_day = d.getFullYear() + '.' + (d.getMonth() + 1) + '.' + (d.getDate() - 1);
console.log('today is: ' + date + ":" + d.getMinutes());
console.log('yesterday is: ' + last_day);

var home_path = process.env.HOME || process.env.USERPROFILE;
console.log(home_path);

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            compile: {
                files: {
                    "public/stylesheet/mforex.css": "public/less/mforex.less"
                }
            }
        },
        watch:{
            less:{
                files:['public/less/*.less'],
                tasks:['css']
            }
        },
        concat: {
            mainCSS: {
                src: ['public/css/global.css',
                    'public/css/common.css',
                    'public/stylesheet/mforex.css'
                ],
                dest: 'public/stylesheet/mforex.css'
            },
            otherCSS: {
                src: ['public/css/libs/iview.css',
                    'public/css/libs/flex.css'
                ],
                dest: 'public/stylesheet/other.css'
            },
            mainJS: {
                src: ['public/js/util.js'],
                dest: 'public/js/dist/mforex.js'
            },
            otherJS: {
                src: ['public/js/libs/jquery.min.js',
                    'public/js/libs/ejs.js',
                    'public/js/libs/axios.min.js',
                    'public/js/libs/dateformat.js',
                    'public/js/libs/echart.min.js',
                    'public/js/libs/countUp.js',
                    'public/js/libs/captcha.js'
                ],
                dest: 'public/js/dist/other.js'
            }
        },
        cssmin: {
            css: {
                src: 'public/stylesheet/mforex.css',
                dest: 'public/stylesheet/mforex.min.css'

            },
			wechatcss: {
                src: 'public/stylesheet/other.css',
                dest: 'public/stylesheet/other.min.css'
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery', '$']
                },
                compress: {
                    drop_console: true,
                    drop_debugger: true
                }
            },
            mforexJS: {
                src: 'public/js/dist/mforex.js',
                dest: 'public/js/dist/mforex.min.js'
            },
            otherJS: {
                src: 'public/js/dist/other.js',
                dest: 'public/js/dist/other.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ssh');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['css', 'js']);
    grunt.registerTask('hx_test', ['css', 'js-uglify']);
    grunt.registerTask('watcher', ['watch']);
    grunt.registerTask('css', ['less', 'concat:mainCSS', 'concat:otherCSS', 'cssmin']);
    grunt.registerTask('js', ['concat:mainJS', 'concat:otherJS', 'uglify']);
};