// setup deps
var $ = require("jquery-untouched");
var _ = require("underscore");
var Backbone = require("backbone");
Backbone.$ = $;

var Address = require("models/address");

var FormView = require("views/form");
var Preview = require("views/preview");


var address;
$(document).ready(function() {
  address = new Address();
  var form = $("#newForm")  ;
  console.log(form);
  var formView = new FormView({ model: address, el: form});
  formView.render();

  var preview = new Preview({model: address, el: $("#preview") });
  preview.render();
});


module.exports = {
  address: function() { return address }
}
