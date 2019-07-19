module.exports = {
     entry : './index.ts',
     output: {
         filename: 'bundle.js'
     },
     resolve:{
         extensions : [ 'ts' , 'js']
     },
     module : {
        rules: [
            {
              test: /\.(ts)$/,
              exclude: /node_modules/,
              use: {
                loader: "ts-loader"
              }
            }
          ]
        }
}