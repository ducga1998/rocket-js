!function(t){var e={};function n(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r="function"==typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":o(t)},a=function(){function t(e,i,s,o){n(this,t),this.duration=e,this.from=i,this.to=s,this.easing=o,this.start=this.start.bind(this)}return s(t,[{key:"start",value:function(){this.time=Date.now()}},{key:"tween",get:function(){if(!this.time)return this.from;var t=Date.now(),e=Math.min(t-this.time,this.duration);return this.from+u[this.easing](e/this.duration)*(this.to-this.from)}}]),t}();var u=function(){var t={linear:function(t){return t}},e={};return["Quad","Cubic","Quart","Quint","Expo"].forEach(function(t,n){e[t]=function(t){return Math.pow(t,n+2)}}),Object.assign(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}}),Object.keys(e).forEach(function(n){var i=e[n];t["easeIn"+n]=i,t["easeOut"+n]=function(t){return 1-i(1-t)},t["easeInOut"+n]=function(t){return t<.5?i(2*t)/2:1-i(-2*t+2)/2}}),t}(),h=function(){function t(e,i){n(this,t),this.x=e,this.y=i}return s(t,[{key:"add",value:function(e){return e instanceof t?(this.x+=e.x,this.y+=e.y):(this.x+=e,this.y+=e),this}},{key:"substract",value:function(e){return e instanceof t?(this.x-=e.x,this.y-=e.y):(this.x-=e,this.y-=e),this}},{key:"multiply",value:function(e){return e instanceof t?(this.x*=e.x,this.y*=e.y):(this.x*=e,this.y*=e),this}},{key:"divide",value:function(e){return e instanceof t?(this.x/=e.x,this.y/=e.y):(this.x/=e,this.y/=e),this}},{key:"clone",value:function(){return new t(this.x,this.y,this.z)}}],[{key:"deg2rad",value:function(t){return t*(Math.PI/180)}},{key:"rad2deg",value:function(t){return t*(180/Math.PI)}},{key:"fromAngle",value:function(e,n){return new t(n*Math.cos(this.deg2rad(e)),n*Math.sin(this.deg2rad(e)))}},{key:"randomRange",value:function(t,e){return t+Math.random()*(e-t)}}]),t}(),c=function(){function t(e,i,s,o){n(this,t),this.props=o,this.canvas=e,this.context=this.canvas.getContext("2d"),this.life=1,this.size=h.randomRange(o.size/2,o.size),this.angle=h.randomRange(o.angle-o.spread/2,o.angle+o.spread/2),this.speed=h.randomRange(1.1*o.speed,o.speed/1.1),this.pos=new h(i,s),this.acc=new h,this.vel=h.fromAngle(this.angle,this.speed),this.color=this.getRandomColor()}return s(t,[{key:"setForce",value:function(t){this.acc=t}},{key:"loop",value:function(){this.life=Math.max(0,this.life-this.props.fade/1e3),this.radius=this.size*(this.props.invert?.95*(1.05-this.life):this.life),this.vel.add(this.acc),(this.pos.x>this.canvas.width||this.pos.x<=0)&&(this.vel.x*=this.props.bounceX||0),(this.pos.y>this.canvas.height||this.pos.y<=0)&&(this.vel.y*=this.props.bounceY||0),this.pos.add(this.vel),(this.pos.x-this.size>this.canvas.width||this.pos.x+this.size<=0)&&(this.life=0),this.pos.y-this.size>this.canvas.height&&(this.life=0),this.render()}},{key:"render",value:function(){if(this.pos.y-this.size>this.canvas.height||this.pos.y+this.size<=0)return this;this.context.beginPath(),this.context.arc(Math.round(this.pos.x),Math.round(this.pos.y),Math.round(this.radius),0,360),this.context.fillStyle=this.color,this.context.fill()}},{key:"getRandomColor",value:function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}}]),t}(),f=function(){function t(e,i,s,o){var r=this;n(this,t),this.canvas=e,this.props=Object.assign({size:200,count:4,rate:50,speed:4,fade:3,invert:1,angle:-100,spread:15,bounceX:1,bounceY:1,windAngle:0,windSpeed:.03},o),this.pos=new h(i,s),this.canvas=e,this.particles=[],this.lastTime=0,this.context=e.getContext("2d"),this.emitting=!0,["add","loop","prop","start","stop"].forEach(function(t){return r[t]=r[t].bind(r)})}return s(t,[{key:"prop",value:function(t,e){var n=this;return"object"==(void 0===t?"undefined":r(t))?(Object.keys(t).forEach(function(e){return n.prop(e,t[e])}),this):(this.props[t]=e,this)}},{key:"add",value:function(){return this.particles.push(new c(this.canvas,this.pos.x,this.pos.y,this.props)),this}},{key:"loop",value:function(){var t=this;if(this.particles=this.particles.filter(function(e){return e.setForce(h.fromAngle(t.props.windAngle,t.props.windSpeed)),e.loop(),e.life>0}),!this.emitting)return this;if(Date.now()-this.lastTime>this.props.rate){for(var e=0;e<this.props.count;e++)this.add();this.lastTime=Date.now()}return this}},{key:"start",value:function(){return this.emitting=!0,this}},{key:"stop",value:function(){return this.emitting=!1,this}},{key:"x",get:function(){return this.pos.x},set:function(t){this.pos.x=t}},{key:"y",get:function(){return this.pos.y},set:function(t){this.pos.y=t}}]),t}();console.log("aaa"),window.Tween=a,window.Emitter=f,window.Tween=a,window.Particle=c}]);