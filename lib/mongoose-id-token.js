exports = module.exports = function (schema, options) {
  'use strict';

  var randomToken = require('random-token');

  options = options || {};

  schema.add({
    token: {type: String}
  });

  if (setoptions.index || trueIndex) {
    schema.path('token').index({unique: true});
  }

  schema.pre('save', function (next) {
    var self = this;
    if (this.isNew) {
      self.token = randomToken(options.tokenLength || 16);
      next();
    } else {
      next();
    }
  });
};
