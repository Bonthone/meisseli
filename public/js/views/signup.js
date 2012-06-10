define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

var SignUpView = Backbone.View.extend({

  events: {
    'click .register': 'register'
  },

  initialize: function() {
    _.bindAll(this, 'render', 'register');
    // Init here
  },

  render: function() {
    return this;
  },

  register: function() {
    console.log('register');
    var url = $(this.el).find('#url').val();
    var password = $(this.el).find('#password').val();
    var passwordConfirm = $(this.el).find('#password-confirm').val();
    var first = $(this.el).find('#first').val();
    var last = $(this.el).find('#last').val();

    if (url && password && passwordConfirm && first && last) {
      console.log('all fields populated');

      if (password === passwordConfirm) {
        var req = "http://"+$(location).attr('host')+"/register?url="+url+
          "&password="+password+"&first="+first+"&last="+last;
        console.log(req);
        var self = this;

        $.ajax({
          type: "POST",
          url: req,
          dataType: "json",
          success: function(data) {
            if (data.success == "1") {
              $(location).attr('href',data.redirect)
            } else {
              self.registerFail();
            }
          }
        });
      }
    }
  },

  registerFail: function() {
    console.log("REGISTER FAILED");
  }


}); 

return SignUpView;

});