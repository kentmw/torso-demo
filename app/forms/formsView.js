var Torso = require('torso');
var _ = require('underscore');
var BarcampFormModel = require('./BarcampFormModel');

module.exports = new (Torso.FormView.extend({
  template: require('./forms-template.hbs'),
  className: 'forms',

  events: {
    'click #save': 'save'
  },

  initialize: function() {
    this.userModel = new Torso.Model({name: 'Kent'});

    this.model = new BarcampFormModel();
    this.model.setTrackedModel('user', this.userModel);
    this.model.pull();

    this.listenTo(this.userModel, 'change:name', this.updateCurrentName);
    this.updateCurrentName();
  },

  feedback: [

    {
      when: {
        '@name': ['keyup']
      },
      then: function(e) {
        return {
          text: this.model.preValidate('name')
        }
      },
      to: 'name'
    }

  ],

  save: function() {
    this.model.push();
  },

  updateCurrentName: function() {
    this.set('name', this.userModel.get('name'));
    this.render();
  }
}))();
