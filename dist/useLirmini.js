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
/******/ 	return __webpack_require__(__webpack_require__.s = "./useLir.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./useLir.js":
/*!*******************!*\
  !*** ./useLir.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n  var frameTime = 0;\n  var frameRate = 60;\n  var canvas = document.getElementById('canvasId');\n  var wHeight = window.innerHeight;\n  var mouseX = window.innerWidth / 2;\n  var ctx = canvas.getContext('2d');\n  var rocketAnim = new Tween(5000, 200, 0, 'easeOutElastic');\n  var smokeAnim = new Tween(7000, 0, -canvas.height * 2, 'easeOutExpo');\n  var cloudAnim = new Tween(3000, 0, 1, 'linear');\n  var btn = document.getElementsByClassName('go');\n  var rocket = document.getElementById('rocket');\n  var dragging = false;\n  document.body.addEventListener('mousedown', function (event) {\n    console.log(\"ahihi\");\n    dragging = true;\n  });\n  document.body.addEventListener('mousemove', function (e) {\n    // console.log(e.pageX , e.pageY)\n    if (dragging) {\n      // console.log(e.pageX , e.pageY) \n      mouseX = canvas.width / 4 + e.pageX; // console.log(mouseX)\n    }\n  });\n  document.body.addEventListener('mouseup', function (event) {\n    dragging = false;\n  });\n  canvas.width = window.innerWidth - 40;\n  canvas.height = wHeight * 1; // welcome[0].style.height = wHeight * 0.45 - 60 + 'px';\n\n  var rocketY = canvas.height - 600;\n  console.log(rocketY);\n  var cloud = new Emitter(canvas, canvas.width / 2, canvas.height - 20, {\n    \"size\": 1,\n    \"count\": 1,\n    \"rate\": 10000,\n    \"speed\": 2,\n    \"fade\": 2,\n    // vecticole small animate\n    \"angle\": -90,\n    // goc tha \n    \"spread\": 100000,\n    // lan tran \n    \"bounceX\": 100,\n    \"bounceY\": -0.8,\n    \"windAngle\": 120,\n    \"windSpeed\": 0.1,\n    invert: 0\n  }).stop();\n  var smoke = new Emitter(canvas, canvas.width / 2, canvas.height - 180, {\n    \"size\": 120,\n    \"count\": 2,\n    \"rate\": 30,\n    \"speed\": 6,\n    \"fade\": 7,\n    \"angle\": 90,\n    \"spread\": 15,\n    \"bounceX\": 1,\n    \"bounceY\": 2,\n    \"windAngle\": 180,\n    \"windSpeed\": 0.1,\n    invert: 0\n  }).stop();\n  window.cloud = cloud;\n  new Sequence({\n    init: function init() {\n      (function draw(time) {\n        var cloudTween = cloudAnim.tween;\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\n        smoke.y = 0;\n        smoke.x = smoke.x * 0.99 + mouseX * 0.01;\n        cloud.x = cloud.x * 0.99 + mouseX * 0.01;\n        cloud.y = 100;\n        cloud.prop({\n          size: 60 + cloudTween * 250,\n          speed: 4 + cloudTween * 4,\n          rate: 70 + cloudTween * 70\n        });\n        cloud.loop(); // smoke.loop();\n\n        var tilt = (mouseX - smoke.x) / canvas.width * 45;\n        rocket.style.top = smoke.y + 'px';\n        rocket.style.left = smoke.x + 20 + 'px';\n        rocket.style.transform = \"translate3d(-50%,-75%,0) rotate3d(0,0,1,\" + tilt + \"deg)\";\n        if (frameTime) frameRate = frameRate * 0.99 + 1000 / (time - frameTime) * 0.01;\n        frameTime = time;\n        requestAnimationFrame(draw);\n      })(300);\n    },\n    100: function _() {\n      return canvas.classList.add('show');\n    },\n    105: function _() {\n      return rocket.classList.add('show');\n    },\n    110: cloud.start,\n    200: smoke.start,\n    190: rocketAnim.start // 800: function _() {\n    // \tlogo[0].classList.add('in');\n    // \ttitle[0].classList.add('in');\n    // },\n    // 950: function _() {\n    // \tslogan[0].classList.add('in');\n    // },\n    // 1100: function _() {\n    // \tbtn[0].classList.add('in');\n    // \tfooter[0].classList.add('in');\n    // }\n\n  });\n  var launched = false;\n\n  window.rocketFly = function (e) {\n    if (launched) return;\n    launched = true;\n    new Sequence({\n      // init: function init() {\n      // \tsmoke.prop({\n      // \t\tsize: 250,\n      // \t\tspread: 45,\n      // \t\tcount: 8,\n      // \t\tspeed: 7\n      // \t});\n      // },\n      // 900: function _() {\n      // \treturn cloud.prop({\n      // \t\twindSpeed: 0.4,\n      // \t\tbounceY: -0.1\n      // \t});\n      // },\n      // 1000: function _() {\n      // \tsmoke.prop({\n      // \t\tsize: 100,\n      // \t\trate: 20,\n      // \t\tspread: 8,\n      // \t\tspeed: 5,\n      // \t\tcount: 5\n      // \t});\n      // \tcloud.prop({\n      // \t\twindSpeed: 0.05,\n      // \t\tbounceY: -0.6,\n      // \t\tfade: 5\n      // \t});\n      // },\n      1010: smokeAnim.start,\n      1060: cloudAnim.start,\n      1100: function _() {\n        return cloud.prop({\n          spread: 180,\n          fade: 1\n        });\n      },\n      3000: function _() {\n        welcome[0].classList.add('rocket-fade');\n      },\n      4000: function _() {\n        return canvas.classList.add('rocket-fade');\n      },\n      4200: function _() {\n        footer[0].classList.add('rocket-fade');\n      },\n      5000: smoke.stop,\n      5600: function _() {\n        window.location = \"http://nitro.woorockets.com\";\n      }\n    });\n  };\n\n  window.onresize = function (e) {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight * 0.55;\n    cloud.y = canvas.height - 20;\n    rocketY = canvas.height - 180;\n    mouseX = canvas.width / 4 + canvas.width / 2;\n  };\n})();\n\n//# sourceURL=webpack:///./useLir.js?");

/***/ })

/******/ });