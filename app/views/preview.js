var Backbone = require("backbone");
var Stickit = require("backbone.stickit");

var Preview = Backbone.View.extend({

  bindings: {
    '.name': 'name',
    '.email': 'email',
    '.street': 'street',
    '.zip': 'zip',
    '.city': 'city',
    '.country': 'country',
    '.phone': 'phone',
    '.web': 'web'
  },

  render: function() {
    this.$el.html('<div class="name"></div>\
      <hr /> \
      <div class="column"> \
        <div class="email"></div> \
        <div class="street"></div> \
        <span class="zip"></span><span class="city"></span> \
      </div> \
      <div class="country"></div> \
      <div class="phone"></div> \
      <div class="web"></div> \
   ');
    this.stickit();
    return this;
  }

});

module.exports = Preview;
