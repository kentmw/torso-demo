var Torso = require('torso');
var bus = require('../bus');
var _ = require('underscore');

module.exports = new (Torso.View.extend({
  className: 'nav-view',
  template: require('./nav-template.hbs'),

  initialize: function() {
    this.set('activeTab', 'home');
    this.listenTo(this.viewState, 'change:activeTab', this.render);

  },

  setHomeViewListener: function(homeView) {
    this.listenTo(homeView.viewState, 'change:currentMainViewName', this.newMainView);
  },

  newMainView: function(homeViewState, mainViewName) {
    this.set('activeTab', mainViewName);
  }

}))();
