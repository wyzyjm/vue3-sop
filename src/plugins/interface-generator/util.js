const axios = require('axios')
module.exports = {
    toCamel: function toCamel(str) {
        str = str.replace(/-/g, '/').replace(/:/g, '')
        return str.replace(/([^/])(?:\/+([^/]))/g, function ($0, $1, $2) {
            return $1 + $2.toUpperCase();
        });
    },
    fetch: axios.create()
}