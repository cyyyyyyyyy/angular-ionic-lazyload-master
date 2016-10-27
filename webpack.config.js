/**
 * Created by chengyang on 2016/10/27.
 */
require ('webpack');
module.exports = {
    entry: {
        bundle: './app/main.js',
        vendor: [
            'angular',
            './bower_components/angular-animate/angular-animate.min',
            './bower_components/angular-sanitize/angular-sanitize.min',
            './bower_components/angular-ui-router/release//angular-ui-router.min',
            './bower_components/ionic/release/js/ionic.min',
            './bower_components/ionic/release/js/ionic-angular.min'
        ]
    },
    output: {
        path: './build',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    plugins: []
};
