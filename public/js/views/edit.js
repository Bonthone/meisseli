define([
  'jquery',
  'underscore',
  'backbone',
  'views/widget',
  'text!/templates/row.html'
], function($, _, Backbone, Widget, rowTemplate) {

var EditView = Backbone.View.extend({

  currentRow: null,

  initialize: function() {
    _.bindAll(this, 'render', 'addWidget', 'fetchPageInfo', 'fetchPageServices');
    this.on('pageInfoLoaded', this.fetchPageServices, this)
    this.on('pageServicesLoaded', this.render, this)
    this.widgets = [];
    this.counter = 0;
    this.rowCount = 0;

    this.fetchPageInfo();
  },

  render: function() {
    var self = this;
    $.each(this.pageServices,function(foo, service) {
      var widget = new Widget(service.page_service).render();
      self.addWidget(widget);
    })
  },

  addWidget: function(widget) {
    console.log(this.rowCount + " " + this.counter);
    if (this.counter == 3) {
        this.counter = 0;
        this.rowCount++;
    }
    if (this.counter == 0) {
      $(this.el).append(rowTemplate);
      this.currentRow = $(this.el).find('.row')[this.rowCount];
    }
    this.widgets.push(widget);
    console.log(this.currentRow);
    $(this.currentRow).append(widget.el);
    this.counter++;
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