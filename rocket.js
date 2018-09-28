class Easing {
 
 constructor(){
     var easings , baseEasings;
    easings = {
        linear : function linear(p) {
            return p
        }
    }
    baseEasings = {};
    ["Quad", "Cubic", "Quart", "Quint", "Expo"].map(function(name, i) {
		baseEasings[name] = function(p) {
			return Math.pow(p, i + 2);
		}
 })
 Object.assign(baseEasings, {
    Sine: function Sine(p) {
        return 1 - Math.cos(p * Math.PI / 2);
    },
    Circ: function Circ(p) {
        return 1 - Math.sqrt(1 - p * p);
    },
    Elastic: function Elastic(p) {
        return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
    },
    Back: function Back(p) {
        return p * p * (3 * p - 2);
    },
    Bounce: function Bounce(p) {
        var pow2, bounce = 4;
        while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}
        return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
    }
});
Object.keys(baseEasings).forEach(function(name) {
    var easeIn = baseEasings[name];
    easings["easeIn" + name] = easeIn;
    easings["easeOut" + name] = function(p) {
        return 1 - easeIn(1 - p);
    };
    easings["easeInOut" + name] = function(p) {
        return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
    };
});
}}




// code class tween 
class Tween {
    constructor(duration , from , to , easing){
        this.duration = duration;
        this.from = from;
        this.to = to;
        this.easing = easing;
        
    }
    start() {
        this.time = Data.now()
    }
    tween(){
        if
    }
}
var Tween = function() {
	function Tween() {
		var duration = arguments.length <= 0 || arguments[0] === undefined ? 1000 : arguments[0];
		var from = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
		var to = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
		var easing = arguments.length <= 3 || arguments[3] === undefined ? 'linear' : arguments[3];
		_classCallCheck(this, Tween);
		this.from = from;
		this.to = to;
		this.duration = duration;
		this.easing = easing;
		this.start = this.start.bind(this);
	}
	_createClass(Tween, [{
		key: 'start',
		value: function start() {
			this.time = Date.now();
		}
	}, {
		key: 'tween',
		get: function get() {
			if (!this.time) return this.from;
			var now = Date.now();
			var lapsed = Math.min(now - this.time, this.duration);
			return this.from + Easing[this.easing](lapsed / this.duration) * (this.to - this.from);
		}
	}]);
	return Tween;
}();