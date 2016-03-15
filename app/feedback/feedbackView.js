var Torso = require('torso');
var _ = require('underscore');
var $ = require('jquery');

module.exports = new (Torso.View.extend({
  template: require('./feedback-template.hbs'),
  className: 'feedback',

  feedback: [

    // Make Barcamp Green!
    {
      when: {
        '#make-green': ['mouseover', 'mouseout']
      },
      then: function(e) {
        var changes = {};
        if (e.type == 'mouseover') {
          changes.addClass = 'green';
        } else {
          changes.removeClass = 'green';
        }
        return changes;
      },
      to: 'barcamp'
    },

    // Update name
    {
      when: {
        '#name': ['keyup']
      },
      then: function(e) {
        return {
          text: $(e.currentTarget).val()
        };
      },
      to: 'name'
    },

  ]
}))();
