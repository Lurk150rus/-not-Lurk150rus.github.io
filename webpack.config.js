const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs');
const templates = [];
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = function (){
    let arrTemplates = fs.readdirSync("src/pug/");
    arrTemplates.forEach((file) => {
        if (file.match(/\.pug$/)) {
            let filename = file.substring(0, file.length - 4);
            templates.push(
                new HTMLWebpackPlugin({
                    template: "src/pug/" + filename + '.pug',
                    filename: filename + '.html',
                }),
                new MiniCssExtractPlugin({
                    // Options similar to the same options in webpackOptions.output
                    // all options are optional
                    filename: '[name].css',                    chunkFilename: '[id].css',
                    ignoreOrder: false, // Enable to remove warnings about conflicting order
                }),
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
        optimization: {
            splitChunks: {
                chunks: "all"
            }
        },
        devServer: {
            port: 3010,

        },
        plugins: [
            ...templates,
            new CleanWebpackPlugin(),
        ],
        module: {
            rules: [
                {
                    test: /\.pug$/,
                    use: ["raw-loader", "pug-html-loader"],
                },
                {
                    test: /\.css$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                                publicPath: ''
                            }
                        },
                        'css-loader',
                    ]
                },
                {
                    type: "javascript/auto",
                    test: /\.(jpe?g|png|gif|svg)$/,
                    loader: "file-loader",
                    options: {
                        name: "./images/" + "[name].[ext]",
                    }
                },
                {
                    test: /\.(ttf|woff|woff2|eot)$/,
                    loader: "file-loader",
                    options: {
                        name: "./fonts/" + "[name].[ext]",
                    }
                }
            ]
        }
    };
}