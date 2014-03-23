
/* 
 * rui.core.js 0.2
 *
 * Copyright 2014.2 shangrui
 *
 */

(function(factory){
	factory(window);
}(function(win, undefined){
	var Rui = function(id){
		return new rui(id);
	};

	var rui = function(id){
		this[0] = document.getElementById(id);
		this.length = 1;
	};

	rui.prototype = Rui.prototype = {
		constructor: Rui,
		addClass:function(className){
			this[0].className += ' '+ className;
		},
		getAttr: function(val){
	 		return this[0].getAttribute(val);
	 	},
	 	setAttr: function(){
	 		var length = arguments.length;
	 		if( length == 1){
		 		for(var i in arguments[0]){
		 			if(arguments[0][i] != null){
		 				this[0].setAttribute(i, arguments[0][i]);
		 			} else {
		 				return;
		 			}
		 		}
	 		} else if( length == 2 ) {
	 			return this[0].setAttribute(arguments[0], arguments[1]);
	 		} else if( length > 2 ){
	 			return;
	 		}
	 	},
	 	getRandomString: function(length){
	 		var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
	 		if(!length){
	 			length = Math.floor(Math.random() * chars.length);
	 		};
	 		var str = '', i = 0;
	 		for(; i < length; i++){
	 			str += chars[Math.floor(Math.random() * chars.length)];
	 		}
	 		return str;
	 	}
	};
	rui.extend = Rui.extend = function(Child, Parent){
 		var F = function(){};
 		F.prototype = Parent.prototype;
 		Child.prototype = new F();
 		Child.prototype.constructor = Child;
 		Child.uber = Parent.prototype; 
 		//为子对象设一个uber属性，这个属性直接指向父对象的prototype属性，备用。
 	};
	win.$ = win.Rui = Rui;
}));