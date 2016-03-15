var $ = require('jquery');

// Expose some globals
window.$ = $;
window.jQuery = $;

require('swiper');
require('bootstrap-sass');

require('./handlebar-helpers')(require('hbsfy/runtime'));

$(window).ready(function () {
  /**
   * The application router object
   */
  require('./router').start();
});

