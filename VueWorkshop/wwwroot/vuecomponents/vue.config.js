module.exports = {
    configureWebpack: config => {
        delete config.entry.app;

        config.entry = {
            user: './src/views/user/main.ts',
            //log: './src/views/log/main.ts'
        };
        config.output.filename = 'js/[name].bundle.js';
        config.output.chunkFilename = 'js/[name].bundlechunk.js';
    },
    chainWebpack: config => {
        config.plugin('extract-css').tap(args => {
            args[0].filename = 'css/[name].css';
            args[0].chunkFilename = 'css/[name].css';
            return args;
        });
    }
}