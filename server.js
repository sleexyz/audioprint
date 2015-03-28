var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");

var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname + "/dist/",
    publicPath: config.output.publicPath,
    hot: (process.env.NODE_ENV !== "production"),
    historyApiFallback: true
});

server.listen(8080, "localhost", function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log("Listening at localhost:8080");
});

