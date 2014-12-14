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
			grid_str = _.times(config.length * config.length, create_str).join("");

		config.$target.append(grid_str);

		return {
			get: function (x, y) {
				return $(config.$target.children()[x + (y * 10)]);
			}
		}

	};

module.exports = divgrid;