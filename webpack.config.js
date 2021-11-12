const path = require('path')

module.exports = {
    output: {
        // directory after bundling our code by webpack
        path: path.join(__dirname, '/dist'),
        // react js code will be inside our index.bundle.js
        filename: 'index.bundle.js',
    },
    // for hot reloading
    devServer: {
        // port number to run dev server on
        port: 3010,
        // watch out for file changes
        // watchContentBase: true
    },
    // now here we will declare how webpack will bundle our code intot a browser ready bundle
    module: {
        // rules to follow for handling different kind of files
        // we can define rules for handling every kind of file like .js, .css, .scss, .svg etc
        rules: [
            {
                //? match all files with extension .js or .jsx
                test: /\.(js|jsx)$/,
                // do not watch node_modules, as they are already compilled and ready to use
                exclude: /node_modules/,
                // when we match these file, what we would do?
                // we would load them in the babael-loader
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                //? match all files with extension .css
                test: /\.css$/,
                use: [
                    // this will create a style tag in our index page, containing all the styles
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //? match all files with these extensions for images 
                test: /\.(png|jpg|jpeg|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
}