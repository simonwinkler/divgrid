"use strict";

var $ = require("jquery"),
	_ = require("lodash"),
	
	divgrid = function (config) {
		
		var create_el = function () {
				return "<" + config.el + ">" + "</" + config.el + ">";
			},
			grid_str = _.times(config.length * config.length, create_el).join("");


	};

	divgrid({
		length: 2,
		el: "div"
	});

module.exports = divgrid;