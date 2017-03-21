
module.exports = {
    hooks: {
        config: function(config) {
            config.styles = config.styles || config.pluginsConfig['theme-finsify-api'].styles;

            return config;
        }
    }
};


