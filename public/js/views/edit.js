define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

var EditView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'render', 'fetchPageInfo', 'fetchPageServices');
    this.on('pageInfoLoaded', this.fetchPageServices, this)
    this.on('pageServicesLoaded', this.render, this)
    this.fetchPageInfo();
  },

  render: function() {
    console.log('hello');
    console.log(this.pageServices);
    return this;
  },

  fetchPageInfo: function() {
    var url = $(location).attr('pathname').split("/").slice(-1);
    console.log(url);
    var req = "http://"+$(location).attr('host')+"/page/"+url;
    console.log(req);

    var self = this;    
    $.ajax({
      type: "GET",
      url: req,
      dataType: "json",
      success: function(data) {
        self.pageInfo = data.page;
        self.trigger('pageInfoLoaded');
      }
    });
  },

  fetchPageServices: function() {
    console.log("PageServices "+this.pageInfo);
    var req = "http://"+$(location).attr('host')+"/pageservices/"+this.pageInfo.page_id;
    console.log(req);

    var self = this;
    $.ajax({
      type: "GET",
      url: req,
      dataType: "json",
      success: function(data) {
        console.log(self);
        self.pageServices = data;
        self.trigger('pageServicesLoaded');
      }
    });
  }

}); 

return EditView;

});