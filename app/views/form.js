var Backbone = require("backbone");
var Stickit = require("backbone.stickit");

var NewAddress = Backbone.View.extend({

 bindings: {
    '#name': 'name',
    '#email': 'email',
    '#street': 'street',
    '#zip': 'zip',
    '#city': 'city',
    '#country': 'country',
    '#phone': 'phone',
    '#web': 'web'
 },

 render: function() {
   this.$el.html(' \
    <h2>Edit your details</h2> \
    <ul> \
    <li><label for="name">Name</label><input id="name" name="name" type="text"></li> \
    <li><label for="email">Email</label><input id="email" name="email" type="text"></li> \
    <li><label for="street">Street</label><input id="street" name="street" type="text"></li> \
    <li><label for="zip">ZIP</label><input id="zip" name="zip" type="text"></li> \
    <li><label for="city">City</label><input id="city" name="city" type="text"></li> \
    <li><label for="country">Country</label><input id="country" name="country" type="text"></li> \
    <li><label for="phone">Phone</label><input id="phone" name="phone" type="text"></li> \
    <li><label for="phone">Web</label><input id="web" name="web" type="text"></li> \
   </ul>');
   this.stickit();
   return this;
 }


});

module.exports = NewAddress;
