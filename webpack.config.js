var path = require('path');
module.exports = {
    mode: 'development',
    entry: './water.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'water.minimized.js'
    }
};