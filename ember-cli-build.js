/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    vendorFiles: {
      'handlebars.js': null
    }
  });

  app.import(app.bowerDirectory + '/one-nexus/assets/js/accordion.js');

  return app.toTree();
}
