define([
  'jquery',
  'underscore',
  'backbone',
  'models',
  'views/twitter',
  'views/github',
  'views/stackoverflow',
  'views/reddit',
  'text!/templates/widget.html'
], function($, _, Backbone, models, TwitterView, GitHubView, StackOverFlowView, RedditView, widgetTemplate) {

  var services = {
    "1": TwitterView,
    "2": GitHubView,
    "3": StackOverFlowView,
    "4": RedditView
  };

  var widgetTemplate = Handlebars.compile(widgetTemplate);

  var Widget = Backbone.View.extend({
    className: "tile span4",
    serviceView: null,

    initialize: function(options) {
      _.bindAll(this, 'render');
      this.serviceId = options.service_id;
      this.user_name = options.user_name_in_service;
    },

    render: function() {
      this.serviceView = new services[this.serviceId]({identifier: this.user_name});
      $(this.el).html(widgetTemplate({service: this.serviceId}));
      $(this.el).find('.content').append(this.serviceView.el);
      return this;
    }

  });

  return Widget;

});