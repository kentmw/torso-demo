var Torso = require('backbone-torso');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Torso.View.extend({
  template: require('./item-template.hbs'),
  className: 'item',
  tagName: 'p'
});