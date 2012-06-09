require.config({
	shim: {
		'backbone': {
			deps: ['jquery', 'underscore']
		}
	},

	paths: {
		jquery: 'libs/jquery/jquery',
		underscore: 'libs/underscore/underscore',
		backbone: 'libs/backbone/backbone',
		text: 'libs/text/text'
	}
});

require([
	'app',
	'libs/jquery/jquery-min',
	'libs/underscore/underscore-min',
	'libs/backbone/backbone-min'
], function(App) {

	App.initialize();

});