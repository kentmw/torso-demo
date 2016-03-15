var Torso = require('torso');
var _ = require('underscore');

module.exports = new (Torso.View.extend({
  template: require('./intro-template.hbs'),
  className: 'intro'

}))();
