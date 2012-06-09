require.config({
	shim: {
		'backbone': {
			deps: ['jquery', 'underscore']
		},
		'handlebars': {
			deps: ['jquery', 'underscore']
		}
	},

	paths: {
		jquery: 'libs/jquery/jquery',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		handlebars: 'libs/handlebars/handlebars'
	}
});

require([
	'app',
	'libs/jquery/jquery-min',
	'libs/underscore/underscore-min',
	'libs/backbone/backbone-min',
	'libs/handlebars/handlebars-min'
], function(App) {

	App.initialize();

});