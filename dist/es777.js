/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./rocket.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./rocket.js":
/*!*******************!*\
  !*** ./rocket.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _typeof2(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nvar _typeof = typeof Symbol === \"function\" && _typeof2(Symbol.iterator) === \"symbol\" ? function (obj) {\n  return _typeof2(obj);\n} : function (obj) {\n  return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : _typeof2(obj);\n}; // (() => {\n// TWEEN CLASS\n\n\nvar Tween =\n/*#__PURE__*/\nfunction () {\n  function Tween(duration, from, to, easing) {\n    _classCallCheck(this, Tween);\n\n    this.duration = duration;\n    this.from = from;\n    this.to = to;\n    this.easing = easing;\n    this.start = this.start.bind(this);\n  }\n\n  _createClass(Tween, [{\n    key: \"start\",\n    value: function start() {\n      this.time = Date.now();\n    }\n  }, {\n    key: \"tween\",\n    get: function get() {\n      if (!this.time) return this.from;\n      var now = Date.now();\n      var lapsed = Math.min(now - this.time, this.duration);\n      return this.from + Easing[this.easing](lapsed / this.duration) * (this.to - this.from);\n    }\n  }]);\n\n  return Tween;\n}();\n\nfunction Sequence(actions) {\n  // _classCallCheck(this, Sequence);\n  Object.keys(actions).forEach(function (delay) {\n    setTimeout(actions[delay], delay === 'init' ? 0 : parseInt(delay));\n  });\n}\n\n;\n\nvar Easing = function () {\n  var easings = {\n    linear: function linear(p) {\n      return p;\n    }\n  };\n  var baseEasings = {};\n  [\"Quad\", \"Cubic\", \"Quart\", \"Quint\", \"Expo\"].forEach(function (name, i) {\n    baseEasings[name] = function (p) {\n      return Math.pow(p, i + 2);\n    };\n  });\n  Object.assign(baseEasings, {\n    Sine: function Sine(p) {\n      return 1 - Math.cos(p * Math.PI / 2);\n    },\n    Circ: function Circ(p) {\n      return 1 - Math.sqrt(1 - p * p);\n    },\n    Elastic: function Elastic(p) {\n      return p === 0 || p === 1 ? p : -Math.pow(2, 8 * (p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);\n    },\n    Back: function Back(p) {\n      return p * p * (3 * p - 2);\n    },\n    Bounce: function Bounce(p) {\n      var pow2,\n          bounce = 4;\n\n      while (p < ((pow2 = Math.pow(2, --bounce)) - 1) / 11) {}\n\n      return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - p, 2);\n    }\n  });\n  Object.keys(baseEasings).forEach(function (name) {\n    var easeIn = baseEasings[name];\n    easings[\"easeIn\" + name] = easeIn;\n\n    easings[\"easeOut\" + name] = function (p) {\n      return 1 - easeIn(1 - p);\n    };\n\n    easings[\"easeInOut\" + name] = function (p) {\n      return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn(p * -2 + 2) / 2;\n    };\n  });\n  return easings;\n}(); // VECTOR\n// code class tween \n// PARTICLE\n\n\nvar Vector =\n/*#__PURE__*/\nfunction () {\n  function Vector(x, y) {\n    _classCallCheck(this, Vector);\n\n    this.x = x;\n    this.y = y;\n  }\n\n  _createClass(Vector, [{\n    key: \"add\",\n    value: function add(v) {\n      if (v instanceof Vector) {\n        this.x += v.x;\n        this.y += v.y;\n      } else {\n        this.x += v;\n        this.y += v;\n      }\n\n      return this;\n    }\n  }, {\n    key: \"substract\",\n    value: function substract(v) {\n      if (v instanceof Vector) {\n        this.x -= v.x;\n        this.y -= v.y;\n      } else {\n        this.x -= v;\n        this.y -= v;\n      }\n\n      return this;\n    }\n  }, {\n    key: \"multiply\",\n    value: function multiply(v) {\n      if (v instanceof Vector) {\n        this.x *= v.x;\n        this.y *= v.y;\n      } else {\n        this.x *= v;\n        this.y *= v;\n      }\n\n      return this;\n    }\n  }, {\n    key: \"divide\",\n    value: function divide(v) {\n      if (v instanceof Vector) {\n        this.x /= v.x;\n        this.y /= v.y;\n      } else {\n        this.x /= v;\n        this.y /= v;\n      }\n\n      return this;\n    }\n  }, {\n    key: \"clone\",\n    value: function clone() {\n      return new Vector(this.x, this.y, this.z);\n    }\n  }], [{\n    key: \"deg2rad\",\n    value: function deg2rad(deg) {\n      return deg * (Math.PI / 180);\n    }\n  }, {\n    key: \"rad2deg\",\n    value: function rad2deg(rad) {\n      return rad * (180 / Math.PI);\n    }\n  }, {\n    key: \"fromAngle\",\n    value: function fromAngle(deg, radius) {\n      return new Vector(radius * Math.cos(this.deg2rad(deg)), radius * Math.sin(this.deg2rad(deg)));\n    }\n  }, {\n    key: \"randomRange\",\n    value: function randomRange(from, to) {\n      return from + Math.random() * (to - from);\n    }\n  }]);\n\n  return Vector;\n}();\n/*  ------------------------ ES6 Particle  ------------------- */\n\n\nvar Particle =\n/*#__PURE__*/\nfunction () {\n  function Particle(canvas, x, y, props) {\n    _classCallCheck(this, Particle);\n\n    this.props = props;\n    this.canvas = canvas;\n    this.context = this.canvas.getContext('2d');\n    this.life = 1;\n    this.size = Vector.randomRange(props.size / 2, props.size);\n    this.angle = Vector.randomRange(props.angle - props.spread / 2, props.angle + props.spread / 2);\n    this.speed = Vector.randomRange(props.speed * 1.1, props.speed / 1.1);\n    this.pos = new Vector(x, y);\n    this.acc = new Vector();\n    this.vel = Vector.fromAngle(this.angle, this.speed);\n    this.color = this.getRandomColor();\n  }\n\n  _createClass(Particle, [{\n    key: \"setForce\",\n    value: function setForce(force) {\n      this.acc = force; // trong luc\n    }\n  }, {\n    key: \"loop\",\n    value: function loop() {\n      this.life = Math.max(0, this.life - this.props.fade / 1000);\n      this.radius = this.size * (this.props.invert ? (1.05 - this.life) * 0.95 : this.life);\n      this.vel.add(this.acc);\n      if (this.pos.x > this.canvas.width || this.pos.x <= 0) this.vel.x *= this.props.bounceX || 0;\n      if (this.pos.y > this.canvas.height || this.pos.y <= 0) this.vel.y *= this.props.bounceY || 0;\n      this.pos.add(this.vel);\n      if (this.pos.x - this.size > this.canvas.width || this.pos.x + this.size <= 0) this.life = 0;\n      if (this.pos.y - this.size > this.canvas.height) this.life = 0;\n      this.render();\n    } // loop () {\n    //     this.life = Math.max( 0 , this.life - this.props.fade / 1000) \n    //     this.radius = this.size * ( this.props.invert  ? (1.05 - this.life) * 0.95  : this.life)\n    //     this.vel.add(this.acc) \n    //     if(this.pos.x > this.canvas || this.pos.x <= 0 ) this.vel.x *  this.props.bounceX || 0\n    // }\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      // console.log(this.pos.y)\n      if (this.pos.y - this.size > this.canvas.height || this.pos.y + this.size <= 0) return this;\n      this.context.beginPath();\n      this.context.arc(Math.round(this.pos.x), Math.round(this.pos.y), Math.round(this.radius), 0, 360);\n      this.context.fillStyle = this.color;\n      this.context.fill();\n    }\n  }, {\n    key: \"getRandomColor\",\n    value: function getRandomColor() {\n      var letters = '0123456789ABCDEF';\n      var color = '#';\n\n      for (var i = 0; i < 6; i++) {\n        color += letters[Math.floor(Math.random() * 16)];\n      }\n\n      return color;\n    }\n  }]);\n\n  return Particle;\n}();\n\nvar refineParticle = function refineParticle(canvas, x, y, props) {\n  _classCallCheck(this, refineParticle);\n\n  this.props = props;\n  this.canvas = canvas;\n  this.context = this.canvas.getContext('2d');\n  this.life = 1;\n  this.size = Vector.randomRange(props.size / 2, props, size);\n};\n/*  ------------------------ ES6 Particle  ------------------- */\n//EMITTER\n// it 's render clould or ...\n\n\nvar Emitter =\n/*#__PURE__*/\nfunction () {\n  function Emitter(canvas, x, y, props) {\n    var _this = this;\n\n    _classCallCheck(this, Emitter);\n\n    this.canvas = canvas; // this.props = props\n\n    this.props = Object.assign({\n      size: 200,\n      count: 4,\n      rate: 50,\n      speed: 4,\n      fade: 3,\n      invert: 1,\n      angle: -100,\n      spread: 15,\n      bounceX: 1,\n      bounceY: 1,\n      windAngle: 0,\n      windSpeed: 0.03\n    }, props);\n    this.pos = new Vector(x, y); // console.log(\"log \",this.pos)\n\n    this.canvas = canvas;\n    this.particles = []; // window.par = this.Particle\n\n    this.lastTime = 0;\n    this.context = canvas.getContext('2d');\n    this.emitting = true;\n    ['add', 'loop', 'prop', 'start', 'stop'].forEach(function (fn) {\n      return _this[fn] = _this[fn].bind(_this);\n    });\n  }\n\n  _createClass(Emitter, [{\n    key: \"prop\",\n    value: function prop(key, val) {\n      var _this2 = this;\n\n      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) == 'object') {\n        Object.keys(key).forEach(function (k) {\n          return _this2.prop(k, key[k]);\n        });\n        return this;\n      }\n\n      this.props[key] = val;\n      return this;\n    }\n  }, {\n    key: \"add\",\n    value: function add() {\n      this.particles.push(new Particle(this.canvas, this.pos.x, this.pos.y, this.props));\n      return this;\n    }\n  }, {\n    key: \"loop\",\n    value: function loop() {\n      var _this3 = this;\n\n      this.particles = this.particles.filter(function (p) {\n        p.setForce(Vector.fromAngle(_this3.props.windAngle, _this3.props.windSpeed));\n        p.loop(); // console.log(p.life)\n\n        return p.life > 0;\n      });\n      if (!this.emitting) return this;\n\n      if (Date.now() - this.lastTime > this.props.rate) {\n        for (var i = 0; i < this.props.count; i++) {\n          this.add(); // call function add . add is function push array particles\n        }\n\n        this.lastTime = Date.now();\n      }\n\n      return this;\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.emitting = true;\n      return this;\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.emitting = false;\n      return this;\n    }\n  }, {\n    key: \"x\",\n    get: function get() {\n      return this.pos.x;\n    },\n    set: function set(value) {\n      this.pos.x = value;\n    }\n  }, {\n    key: \"y\",\n    get: function get() {\n      return this.pos.y;\n    },\n    set: function set(value) {\n      this.pos.y = value;\n    }\n  }]);\n\n  return Emitter;\n}();\n\nconsole.log('aaa'); // window.easing = Easing()\n\nwindow.Tween = Tween;\nwindow.Emitter = Emitter;\nwindow.Tween = Tween;\nwindow.Particle = Particle; // window.Vector = Vector\n\n//# sourceURL=webpack:///./rocket.js?");

/***/ })

/******/ });