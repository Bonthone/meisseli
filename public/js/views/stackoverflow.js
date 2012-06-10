define([
  'jquery',
  'underscore',
  'backbone',
  'models',
  'text!/templates/stackoverflow.html'
], function($, _, Backbone, models, template_text) {

  var template = Handlebars.compile(template_text);

var StackOverFlowView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render', 'printModel');
    this.model = new models.StackOverFlowProfile({user_id: '22656'});
    this.model.fetch({success: this.printModel});
  },

  render: function() {
    return this;
  },

  printModel: function() {
    $(this.el).html(template(this.model.attributes));
    console.log('StackOverFlow');
    console.log(this.model.attributes);
  }

}); 

return StackOverFlowView;

});