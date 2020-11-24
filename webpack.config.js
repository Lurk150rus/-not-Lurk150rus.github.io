const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const fs = require('fs');
const templates = [];

module.exports = function (){
/*  const htmlTemplate = fs.readdirSync("src/").forEach((file) => {
    if (file.match(/\.html$/)) {
        let filename = file.substring(0, file.length - 4);
        templates.push(
            new HTMLWebpackPlugin({
                filename: filename + ".html",
            })
        );
    }
});
    });*/
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
        ...templates
    ]
    };
}