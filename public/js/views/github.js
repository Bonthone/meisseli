define([
  'jquery',
  'underscore',
  'backbone',
  'models',
  'text!/templates/github.html'
], function($, _, Backbone, models, template_text) {

  var template = Handlebars.compile(template_text);

var GithubView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render', 'printModel');
    this.model = new models.GitHubProfile({user_name: "defunkt"});
    this.model.fetch({success: this.printModel});
  },

  render: function() {
    $(this.el).html(template(this.model));
    return this;
  },

  printModel: function() {
    console.log('Github');
    console.log(this.model);
  }

}); 

return GithubView;

});