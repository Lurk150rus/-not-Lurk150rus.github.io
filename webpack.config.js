const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs');
const templates = [];
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = function (){
    let arrTemplates = fs.readdirSync("src/");
    arrTemplates.forEach((file) => {
        if (file.match(/\.html$/)) {
            let filename = file.substring();
            templates.push(
                new HTMLWebpackPlugin({
                    template: "src/" + filename,
                    filename: filename,
                })
            );
        };
    });
    return {
        mode: "development",
        entry: './src/index.js',
        output: {
            filename: '[name].[hash].js',
            path: path.resolve(__dirname, './dist')
        },
        plugins: [
            ...templates,
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader','css-loader']
                },
                {
                    type: "javascript/auto",
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: "file-loader",
                    options: {
                        name: "./images/" + "[name].[ext]",
                    }
                }
            ]
        }
    };
}