"use strict";

var $ = require("jquery"),
	_ = require("lodash"),
	
	divgrid = function (config) {

		// config.size
		// config.el
		// config.$target
		
		var create_str = function () {
				return "<" + config.el + ">" + "</" + config.el + ">";
			},
			grid_str = _.times(config.length * config.length, create_str).join(""),
			el_size = config.$target.width() / config.length;

		config
			.$target.append(grid_str);
		config
			.$target
			.children(config.el)
			.css({
				"width": el_size,
				"height": el_size,
				"box-sizing": "border-box",
				"float": "left"
			});

		return {
			get: function (x, y) {
				return $(config.$target.children()[x + (y * 10)]);
			}
		}

	};

module.exports = divgrid;