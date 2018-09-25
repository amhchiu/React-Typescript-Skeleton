module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public/bundles"
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"}
        ]
    }
};