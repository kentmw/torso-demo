var Torso = require('torso');
var feedbackView = require('../feedback/feedbackView');
var formsView = require('../forms/formsView');
var introView = require('../intro/introView');
var listsView = require('../lists/listsView');
var bus = require('../bus');

module.exports = new (Torso.View.extend({
  className: 'home',
  template: require('./home-template.hbs'),

  initialize: function() {
    this.navView = require('../nav/navView');
    this.navView.setHomeViewListener(this);
    this.set('currentMainViewName', 'home');
    this.listenTo(this.viewState, 'change:currentMainViewName', this.render);
    this.formsView = formsView;
    this.feedbackView = feedbackView;
    this.introView = introView;
    this.listsView = listsView;
  },

  moveToMainView: function(name) {
    this.set('currentMainViewName', name);
  },

  attachTrackedViews: function() {
    this.attachView('nav-view', this.navView);
    this.attachView('current-main-view', this.getCurrentMainView());
  },

  getCurrentMainView: function() {
    var mainViewName = this.get('currentMainViewName');
    if (mainViewName === 'home') {
      return  this.introView;
    } else if (mainViewName === 'lists') {
      return  this.listsView;
    } else if (mainViewName === 'feedback') {
      return this.feedbackView;
    } else if (mainViewName === 'forms') {
      return this.formsView;
    }
  }

}))();
