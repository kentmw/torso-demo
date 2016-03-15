var Torso = require('backbone-torso');
var _ = require('underscore');

module.exports = Torso.FormModel.extend({
  validation: {
    name: {
      required: true,
      inlineFn: function(value) {
        return value == 'Jim' ? 'Jim isn\'t your name!' : '';
      }
    }
  },

  mapping: {
    user: 'name'
  }
});