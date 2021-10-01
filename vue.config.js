module.exports = {
    // publicPath: '/frontend',
    // outputDir: 'dist/frontend',
    devServer: {
        port: 3000
    },
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => {
                options.compiler = require('vue-template-babel-compiler');
                return options;
            });
    }
};
