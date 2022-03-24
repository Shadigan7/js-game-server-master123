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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.jpg":
/*!********************************!*\
  !*** ./src/img/background.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b51596ed97a59a3db6dd192b3ee696a1.jpg");

/***/ }),

/***/ "./src/img/bush.png":
/*!**************************!*\
  !*** ./src/img/bush.png ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8a292a5e4898b7533a9df96d6614ae3d.png");

/***/ }),

/***/ "./src/img/bush2.gif":
/*!***************************!*\
  !*** ./src/img/bush2.gif ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7b6cf2a37646913690d1d24f4fca3e3d.gif");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0225b5e0389c327ae55de6ff80fbf0b1.png");

/***/ }),

/***/ "./src/img/sun.gif":
/*!*************************!*\
  !*** ./src/img/sun.gif ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9055fdf6d4bba7f3a02b62dd6c6ef2c0.gif");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_sun_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/sun.gif */ "./src/img/sun.gif");
/* harmony import */ var _img_bush_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/bush.png */ "./src/img/bush.png");
/* harmony import */ var _img_bush2_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/bush2.gif */ "./src/img/bush2.gif");
/* harmony import */ var _img_background_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/background.jpg */ "./src/img/background.jpg");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var flag = false;
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 800;
var gravity = 0.2;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = 'red';
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;else this.velocity.y = 0;
    }
  }]);

  return Player;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.position = {
      x: x,
      y: y,
      image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
    };
    this.width = 300;
    this.height = 100;
    this.image = image;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Platform;
}();

var Floor = /*#__PURE__*/function () {
  function Floor(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, Floor);

    this.position = {
      x: x,
      y: y,
      image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
    };
    this.width = 800;
    this.height = 200;
    this.image = image;
  }

  _createClass(Floor, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Floor;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref3) {
    var x = _ref3.x,
        y = _ref3.y,
        image = _ref3.image;

    _classCallCheck(this, GenericObject);

    this.position = {
      x: x,
      y: y,
      image: createImage(_img_background_jpg__WEBPACK_IMPORTED_MODULE_4__["default"])
    };
    this.width = 1024;
    this.height = 800;
    this.image = image;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return GenericObject;
}();

var Sun = /*#__PURE__*/function () {
  function Sun(_ref4) {
    var x = _ref4.x,
        y = _ref4.y,
        image = _ref4.image;

    _classCallCheck(this, Sun);

    this.position = {
      x: x,
      y: y,
      image: createImage(_img_sun_gif__WEBPACK_IMPORTED_MODULE_1__["default"])
    };
    this.width = 400;
    this.height = 400;
    this.image = image;
  }

  _createClass(Sun, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Sun;
}();

var Bush = /*#__PURE__*/function () {
  function Bush(_ref5) {
    var x = _ref5.x,
        y = _ref5.y,
        image = _ref5.image;

    _classCallCheck(this, Bush);

    this.position = {
      x: x,
      y: y,
      image: createImage(_img_bush_png__WEBPACK_IMPORTED_MODULE_2__["default"])
    };
    this.width = 200;
    this.height = 200;
    this.image = image;
  }

  _createClass(Bush, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
  }]);

  return Bush;
}();

var player = new Player();
var platforms = [new Platform({
  x: 800,
  y: 750,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 1200,
  y: 600,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 1900,
  y: 400,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Platform({
  x: 2400,
  y: 400,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
})];
var floors = [new Floor({
  x: -1,
  y: 700,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
}), new Floor({
  x: 799,
  y: 700,
  image: createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"])
})];
var genericObjects = [new GenericObject({
  x: 0,
  y: 0,
  image: createImage(_img_background_jpg__WEBPACK_IMPORTED_MODULE_4__["default"])
})];
var suns = [new Sun({
  x: 600,
  y: 0,
  image: createImage(_img_sun_gif__WEBPACK_IMPORTED_MODULE_1__["default"])
})];
var bushes = [new Bush({
  x: 450,
  y: 510,
  image: createImage(_img_bush_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Bush({
  x: 550,
  y: 510,
  image: createImage(_img_bush_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Bush({
  x: 850,
  y: 510,
  image: createImage(_img_bush_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new Bush({
  x: 1930,
  y: 210,
  image: createImage(_img_bush_png__WEBPACK_IMPORTED_MODULE_2__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;


function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  suns.forEach(function (sun) {
    sun.draw();
  });
  bushes.forEach(function (bush) {
    bush.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  floors.forEach(function (floor) {
    floor.draw();
  });
  player.update();

  if (keys.right.pressed && player.position.x < 600) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.position.x >= 50) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed ) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.position.x -= 5;
      });
      floors.forEach(function (floor) {
        floor.position.x -= 5;
      }); //bushes

      bushes.forEach(function (bush) {
        bush.position.x -= 5;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        platform.position.x += 5;
      });
      floors.forEach(function (floor) {
        floor.position.x += 5;
      }); //bushes

      bushes.forEach(function (bush) {
        bush.position.x += 5;
      });
    }
  } // platform collison detection


  platforms.forEach(function (platform) {
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }
  }); //floor collision detection

  floors.forEach(function (floor) {
    if (player.position.y + player.height <= floor.position.y && player.position.y + player.height + player.velocity.y >= floor.position.y && player.position.x + player.width >= floor.position.x && player.position.x <= floor.position.x + floor.width) {
      player.velocity.y = 0;
    }
  });
   
    if(scrollOffset == 2600){
      console.log('Pierdol sie ruski smieciu')
    let youResult = counter.textContent
  console.log(youResult)  
  const win = document.querySelector('.win') 
  win.style.display = 'block';
  win.innerText = `Twój wynik to: ${youResult}`
  counter.style.display = 'none';

  }
}


animate();
window.addEventListener('keydown', function (_ref6) {
  var keyCode = _ref6.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 37:
      if(scrollOffset < 2600 ){
      console.log('left');
      keys.left.pressed = true;}
      break;

    case 39:
      if(scrollOffset < 2600){
      console.log('right');
      keys.right.pressed = true;}
      break;

    case 38:
      if(scrollOffset < 2600){
      player.velocity.y -= 5;}
      break;

    case 40:
      if(scrollOffset < 2600){
      console.log('down');
      player.velocity.y += 5;}
      break;
  }
});
window.addEventListener('keyup', function (_ref7) {
  var keyCode = _ref7.keyCode;
  console.log(keyCode);

  switch (keyCode) {
    case 37:
      if(scrollOffset < 2600){
      console.log('left');
      keys.left.pressed = false;}
      break;

    case 39:
      if(scrollOffset < 2600){
      console.log('right');
      keys.right.pressed = false;}
      break;

    case 38:
      if(scrollOffset < 2600){
      console.log(player.position);
      player.velocity.y -= 5;}
      break;

    case 40:
      if(scrollOffset < 2600){
      console.log('down');
      player.velocity.y += 5;}
      break;
  }
}); //AUDIO 

list.onclick = function (e) {
  e.preventDefault();
  var elm = e.target;
  var audio = document.getElementById('audio');
  var source = document.getElementById('audioSource');
  source.src = elm.getAttribute('data-value');
  audio.load(); //call this to just preload the audio without playing

  audio.play(); //call this to play the song right away
}; //COUNTER


var counter = document.querySelector('.counter');
counter.style.color = 'gray';
counter.style.backgroundColor = 'purple';
counter.style.padding = "20px";
counter.style.display = 'none';
var s = 0;
var m = 0;
var h = 0;

var count = function count() {
  counter.innerText = "".concat(h, "h : ").concat(m, "m : ").concat(s, "s");
  s = s + 1;

  if (s == 60) {
    s = 0;
    m = m + 1;
  }

  if (h == 60) {
    m = 0;
    h = h + 1;
  }
};



var play = document.querySelector('.play');
play.addEventListener('click', function () {
  play.style.display = 'none';

  var counterCount = setInterval(count, 1000);
  counter.style.display = 'block';
});
var audio = document.querySelector("#audio");
var mute = document.querySelector('#mute');
var unmute = document.querySelector('#unmute');
mute.addEventListener('click', function () {
  audio.pause();
  audio.currentTime = 0;
  mute.style.display = 'none';
  unmute.style.display = 'block';
});
unmute.addEventListener('click', function () {
  audio.play();
  mute.style.display = 'block';
  unmute.style.display = 'none';
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map