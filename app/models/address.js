var Backbone = require("backbone");


var Address = Backbone.Model.extend({

  defaults: {
    "name": "Baloo The Bear",
    "email": "balu@junglebook.com",
    "street": "Middle of Nowhere 1",
    "zip": "12345",
    "city": "Amazon Delta",
    "country": "Brasil",
    "phone": "555-123123",
    "web": "https://www.youtube.com/watch?v=lz0J88gnINc"
  }

});

module.exports = Address;
