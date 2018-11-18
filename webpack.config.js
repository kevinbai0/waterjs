module.exports = {
    mode: 'development',
    entry: './water.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.bundle.js'
    }
};