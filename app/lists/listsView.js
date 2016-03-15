var Torso = require('torso');
var _ = require('underscore');

module.exports = new (Torso.ListView.extend({
  template: require('./lists-template.hbs'),
  className: 'lists',

  itemView: require('./ItemView'),
  itemContainer: 'item-views',

  collection: new Torso.Collection([new Torso.Model({name: 'Bar'}), new Torso.Model({name: 'Camp'})])
}))();
