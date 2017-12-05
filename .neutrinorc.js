const webpack = require('webpack');

module.exports = {
  use: [
    'neutrino-preset-web',
    neutrino => {
      neutrino.config.plugins
        .delete('runtime-chunk')
        .delete('vendor-chunk')
        .delete('named-modules')
        .delete('named-chunks')
        .delete('name-all');

      neutrino.config.plugin('dll').use(webpack.DllReferencePlugin, [{
        manifest: require('./dll/build/runtimedeps.manifest.json')
      }]);
    }
  ]
};

