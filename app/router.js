var Torso = require('torso'),
    $ = require('jquery');

var router = new (Torso.Router.extend({
  current: null,
  routes: {
    '': 'index',
    'lists': 'lists',
    'feedback': 'feedback',
    'forms': 'forms',
    '*notFound': 'notFound'
  },

  /**
   * Stop the history if it's already started. Bind the routes, and start.
   * and start the history.
   * @method start
   */
  start: function() {
    Torso.history.stop();
    this._bindRoutes();
    Torso.history.start();
  },

  /**
   * Initialize the medicine widgets and page layout
   */
  index: function() {
    var homeView = this.getHomeView();
    this.switchPerspective(homeView);
    homeView.moveToMainView('home');
  },

  getHomeView: function() {
    return require('./home/homeView');
  },

  switchToHomeFocus: function(nameOfFocus) {
    var homeView = this.getHomeView();
    if (this.current != homeView) {
      this.switchPerspective(homeView);
    }
    homeView.moveToMainView(nameOfFocus);
  },

  lists: function() {
    this.switchToHomeFocus('lists');
  },

  feedback: function() {
    this.switchToHomeFocus('feedback');
  },

  forms: function() {
    this.switchToHomeFocus('forms');
  },

  notFound: function() {
    this.index();
    Torso.history.navigate('/');
  },

  /**
   * Switches the current perspective to be the given perspective.
   */
  switchPerspective: function(nextPerspective) {
    if (this.current) {
      this.current.detach();
    }

    this.current = nextPerspective;
    this.current.attachTo($('.app'));
  }
}))();

module.exports = router;
