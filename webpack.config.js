/**
 * Created by yan on 16-3-3.
 */
var path = require('path');

path.join()

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        filename: '[name].js'
    }
}