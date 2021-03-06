const path = require("path");
const withImages = require('next-images')
module.exports = withImages({
    webpack(config, options) {
        config.resolve.alias['base'] = path.join(__dirname, 'base')
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['public'] = path.join(__dirname, 'public')
        return config;
    }
})