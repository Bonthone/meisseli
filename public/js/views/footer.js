define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  var FooterView = Backbone.View.extend({

    events: {
      'click .login': 'login',
      'click .logout': 'logout'
    },

    initialize: function() {
      _.bindAll(this, 'login', 'logout', 'loginFail');
    },

    login: function() {
      var url = $(this.el).find('#url').val();
      var password = $(this.el).find('#password').val();

      var req = "http://"+$(location).attr('host')+"/login?"+"url="+url+"&password="+password;
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
            self.loginFail();
          }
        }
      });
    },

    loginFail: function() {
      console.log("login failed");
    },

    logout: function() {
      $(location).attr('href','/logout')
    }

  });

  return FooterView;

});