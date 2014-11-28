'use strict';

module.exports = {
  name: 'ember-cli-md5',
  included: function(app) {
    this._super.included(app);

    app.import('bower_components/blueimp-md5/js/md5.min.js');
  }
};
