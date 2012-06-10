define([
  'jquery',
  'underscore',
  'backbone',
], 

function($, _, Backbone) {

  var Model = Backbone.Model.extend({
    parse: function(response) {
      return response;
    },
    sync: function(method, model, options) {
      var that = this;
      var params = _.extend({
        type: 'GET',
        dataType: 'jsonp',
        url: that.url(),
        processData: true
      }, options);
      return $.ajax(params);
    }
  });

  var TwitterProfile = Model.extend({
    screen_name: 'TwitterAPI',
    url: function() {
      return 'https://api.twitter.com/1/users/show.json?screen_name='+this.screen_name;
    },
    initialize: function(options) {
      _.bindAll(this, 'url');
      this.screen_name = options.screen_name;
    }
  });

  var GitHubProfile = Model.extend({
    user_name: 'defunkt',
    url: function() {
      return 'http://github.com/api/v2/json/user/show/'+this.user_name;
    },
    initialize: function(options) {
      _.bindAll(this, 'url');
      this.user_name = options.user_name;
    }
  });

  var StackOverFlowProfile = Model.extend({
    user_id: '1893',
    url: function() {
      return 'https://api.stackexchange.com/2.0/users/'+this.user_id+'?site=stackoverflow';
    },
    initialize: function(options) {
      _.bindAll(this, 'url');
      this.user_id = options.user_id;
    }
  });

  return {
    TwitterProfile: TwitterProfile,
    GitHubProfile: GitHubProfile,
    StackOverFlowProfile: StackOverFlowProfile
  };

});