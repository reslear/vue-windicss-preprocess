// vue.config.js
module.exports = {
    configureWebpack: (config) => {
        config.module.rules.push({
            test: /\.vue$/,
            use: [{
                loader: '../../src/index.js',
                options: {
                    compile: false,
                    globalPreflight: true,
                    globalUtility: true,
                    prefix: 'windi-',
                }
            }]
        })
    }
}