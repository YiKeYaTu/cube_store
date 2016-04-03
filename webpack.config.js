var webpack = require("webpack");
module.exports = {
    entry: {
        bundle_main: "./build/main/main/entry",
        bundle_index: "./build/main/index/entry",
        bundle_detail: "./build/main/detail/entry",
        vendor: ["react", "react-dom"],
    },
    output: {
        path: __dirname + '/www/static/js/',
        filename: "[name].js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style!css" 
            },
            { 
                test: /\.js?$/, 
                loader: "babel", 
                exclude: /node_modules/, 
                query: {
                    presets: ['es2015', 'react']
                }
            },
            { 
                test: /\.jsx?$/, 
                loader: "babel", 
                exclude: /node_modules/, 
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /png|jpg$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [ new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.index.js') ]
};