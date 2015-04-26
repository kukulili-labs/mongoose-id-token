exports = module.exports = function (schema, options) {
  'use strict';

  var randomToken = require('random-token');

  options = options || {};

  var tokenSchema = {};
  tokenSchema[options.fieldName || 'token'] = {type: String};

  schema.add(tokenSchema);

  if (options.createIndex || true) {
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
