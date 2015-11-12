var webpack = require('webpack');
var path = require('path');

module.exports = {
    //context: __dirname + "/src",
    entry: "./src/index.js",
    output: {
        path:  "./bin",
        filename: "reduxTinyRouter.js"
    },
    externals: {
        'react': 'React',
        'redux': 'redux'
   //     'query-string':queryStringExternal
    },
  //  target:'node',

 //   exclude:'React',
 //   devtool:'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
              //  loader:'babel?stage=0',
               loader:'babel?optional[]=runtime&stage=0',
         //       loader:'babel?optional[]=runtime&stage=0&ignore=buffer',
                include:[path.resolve('src')],
                exclude: /node_modules/
            }
        ]
    }
};

