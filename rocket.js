


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
};

// (() => {
// TWEEN CLASS
class Tween {
    constructor(duration, from, to, easing) {
        this.duration = duration;
        this.from = from;
        this.to = to;
        this.easing = easing;
        this.start = this.start.bind(this)
    }
    start () {
        this.time = Date.now()
    }
    get tween() {
        if (!this.time) return this.from
        var now = Date.now();
        var lapsed = Math.min(now - this.time, this.duration);
        return this.from + Easing[this.easing](lapsed / this.duration) * (this.to - this.from);
    }
}

function Sequence(actions) {
    // _classCallCheck(this, Sequence);
    Object.keys(actions).forEach(function (delay) {
        setTimeout(actions[delay], delay === 'init' ? 0 : parseInt(delay));
    });
};
var Easing = function () {
    var easings = {
        linear: function linear(p) {
            return p;
        }
    };
    var baseEasings = {};
    ["Quad", "Cubic", "Quart", "Quint", "Expo"].forEach(function (name, i) {
        baseEasings[name] = function (p) {
            return Math.pow(p, i + 2);
        };
    });
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
            while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) { }
            return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);
        }
    });
    Object.keys(baseEasings).forEach(function (name) {
        var easeIn = baseEasings[name];
        easings["easeIn" + name] = easeIn;
        easings["easeOut" + name] = function (p) {
            return 1 - easeIn(1 - p);
        };
        easings["easeInOut" + name] = function (p) {
            return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;
        };
    });
    return easings;
}();
// VECTOR

// code class tween 

// PARTICLE
class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(v) {
        if (v instanceof Vector) {
            this.x += v.x;
            this.y += v.y;
        } else {
            this.x += v;
            this.y += v;
        }
        return this;
    }
    substract(v) {
        if (v instanceof Vector) {
            this.x -= v.x;
            this.y -= v.y;
        } else {
            this.x -= v;
            this.y -= v;
        }
        return this;
    }
    multiply(v) {
        if (v instanceof Vector) {
            this.x *= v.x;
            this.y *= v.y;
        } else {
            this.x *= v;
            this.y *= v;
        }
        return this;
    }
    divide(v) {
        if (v instanceof Vector) {
            this.x /= v.x;
            this.y /= v.y;
        } else {
            this.x /= v;
            this.y /= v;
        }
        return this;
    }
    clone() {
        return new Vector(this.x, this.y, this.z);
    }
    static deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    static rad2deg(rad) {
        return rad * (180 / Math.PI);
    }
    static fromAngle(deg  , radius) {
        return new Vector(radius * Math.cos(this.deg2rad(deg)), radius * Math.sin(this.deg2rad(deg)));
    }
    static randomRange(from, to) {
        return from + Math.random() * (to - from);
    }

}

/*  ------------------------ ES6 Particle  ------------------- */
class Particle {
    constructor(canvas, x, y, props) {
        this.props = props
        this.canvas = canvas;
        this.context =  this.canvas.getContext('2d')
        this.life = 1;
        this.size = Vector.randomRange(props.size / 2, props.size);
        this.angle = Vector.randomRange(props.angle - props.spread / 2, props.angle + props.spread / 2);
        this.speed = Vector.randomRange(props.speed * 1.1, props.speed / 1.1);
        this.pos = new Vector(x, y);
        this.acc = new Vector();
        this.vel = Vector.fromAngle(this.angle, this.speed);
        this.color = this.getRandomColor()
    }
    setForce(force) {
        this.acc = force; // trong luc
    }
    loop() {
        this.life = Math.max(0, this.life - this.props.fade / 1000);
        this.radius = this.size * (this.props.invert ? (1.05 - this.life) * 0.95 : this.life);
        this.vel.add(this.acc);
        if (this.pos.x > this.canvas.width || this.pos.x <= 0) this.vel.x *= this.props.bounceX || 0;
        if (this.pos.y > this.canvas.height || this.pos.y <= 0) this.vel.y *= this.props.bounceY || 0;
        this.pos.add(this.vel);
        if (this.pos.x - this.size > this.canvas.width || this.pos.x + this.size <= 0) this.life = 0;
        if (this.pos.y - this.size > this.canvas.height) this.life = 0;
        this.render();
    }
    // loop () {
    //     this.life = Math.max( 0 , this.life - this.props.fade / 1000) 
    //     this.radius = this.size * ( this.props.invert  ? (1.05 - this.life) * 0.95  : this.life)
    //     this.vel.add(this.acc) 
    //     if(this.pos.x > this.canvas || this.pos.x <= 0 ) this.vel.x *  this.props.bounceX || 0
    // }
    render() {
        // console.log(this.pos.y)
        if (this.pos.y - this.size > this.canvas.height || this.pos.y + this.size <= 0) return this;
        this.context.beginPath();
        this.context.arc(Math.round(this.pos.x), Math.round(this.pos.y), Math.round(this.radius), 0, 360);
        this.context.fillStyle = this.color
        this.context.fill();
    }
     getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
}
class refineParticle {
    constructor(canvas , x , y , props ) {
        this.props = props 
        this.canvas = canvas
        this.context = this.canvas.getContext('2d')
        this.life = 1
        this.size = Vector.randomRange(props.size /2 , props , size)
    }
}

/*  ------------------------ ES6 Particle  ------------------- */
//EMITTER

  // it 's render clould or ...
class Emitter {
    constructor(canvas, x, y, props) {
        this.canvas = canvas
        // this.props = props
        this.props = Object.assign(
            {
                size: 200,
                count: 4,
                rate: 50,
                speed: 4,
                fade: 3,
                invert: 1,
                angle: -100,
                spread: 15,
                bounceX: 1,
                bounceY: 1,
                windAngle: 0,
                windSpeed: 0.03
            }, props
        )
        this.pos = new Vector(x, y);
        // console.log("log ",this.pos)
        this.canvas = canvas;
        this.particles = [];
        // window.par = this.Particle
        this.lastTime = 0;
        this.context = canvas.getContext('2d');
        this.emitting = true;
        ['add', 'loop', 'prop', 'start', 'stop'].forEach( fn =>  {
            return this[fn] = this[fn].bind(this);
        });
    
    }
    prop(key, val) {

        if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object') {
            Object.keys(key).forEach(k => {
                return this.prop(k, key[k]);
            });
            return this;
        }
        this.props[key] = val;
        return this;
    }
    add() {
        this.particles.push(new Particle(this.canvas, this.pos.x, this.pos.y, this.props));
        return this
    }
    loop() {
        this.particles = this.particles.filter(p => {
            p.setForce(Vector.fromAngle(this.props.windAngle, this.props.windSpeed));
            p.loop();
            // console.log(p.life)
            return p.life > 0;
        });
        if (!this.emitting) return this;
        if (Date.now() - this.lastTime > this.props.rate) {
            for (var i = 0; i < this.props.count; i++) {
                this.add(); // call function add . add is function push array particles
            }
            this.lastTime = Date.now();
        }
        return this;
    }
    
    start() {
        this.emitting = true;
        return this;
    }
    stop() {
        this.emitting = false;
        return this;

    }
    get x() {
        return this.pos.x
    }
    set x(value) {
         this.pos.x = value
    }
    get y() {
        return this.pos.y
    }
    set y(value) {
         this.pos.y  = value
    }
}
console.log('aaa')
// window.easing = Easing()
window.Tween = Tween
window.Emitter = Emitter;
window.Tween = Tween
window.Particle = Particle;
// window.Vector = Vector
