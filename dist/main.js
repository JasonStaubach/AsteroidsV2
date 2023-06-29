/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Asteroid)\n/* harmony export */ });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object */ \"./src/moving-object.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\r\n\r\n\r\nclass Asteroid extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    static RADIUS = 30;\r\n    static COLOR = \"green\";\r\n    constructor(options = {pos: [100,100]}){\r\n        options.color = Asteroid.COLOR;\r\n        options.pos = options.pos;\r\n        options.radius = Asteroid.RADIUS;\r\n        options.vel = _utils_js__WEBPACK_IMPORTED_MODULE_1__.randomVec(5);\r\n        super(options)\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://asteroidsv2/./src/asteroid.js?");

/***/ }),

/***/ "./src/game-view.js":
/*!**************************!*\
  !*** ./src/game-view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameView)\n/* harmony export */ });\n\r\nclass GameView{\r\n    constructor(game, ctx){\r\n        this.ctx = ctx;\r\n        this.game = game;\r\n        console.log(this.ctx)\r\n    }\r\n\r\n    start(){\r\n        let holdCtx = this.ctx\r\n        let holdGame = this.game\r\n        setInterval( function() {\r\n            holdGame.draw(holdCtx);\r\n            holdGame.moveObjects(holdCtx);\r\n        }, 60)\r\n    }\r\n}\n\n//# sourceURL=webpack://asteroidsv2/./src/game-view.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _asteroid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\r\n\r\nclass Game{\r\n    static DIM_X = 1000;\r\n    static DIM_Y = 700;\r\n    static NUM_ASTEROIDS = 8;\r\n    constructor(){\r\n        this.asteroids = [];\r\n        this.addAsteroids()\r\n        \r\n    }\r\n    draw(ctx){\r\n        ctx.clearRect(0,0, Game.DIM_X, Game.DIX_Y)\r\n        ctx.fillStyle = \"#919191\"\r\n        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\r\n        console.log(this.asteroids)\r\n\r\n        this.asteroids.forEach((object) => {\r\n            object.draw(ctx);\r\n        })\r\n    }\r\n\r\n    addAsteroids(){\r\n        console.log(Game.NUM_ASTEROIDS)\r\n        for(let i = 0; i < Game.NUM_ASTEROIDS; i++){\r\n            let asty = new _asteroid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({pos: this.randomPosition(), game: this})\r\n            console.log(asty)\r\n            this.asteroids.push(asty)\r\n            console.log(`hi ${this.asteroids}`)\r\n        }\r\n    }\r\n    \r\n    randomPosition(){\r\n        let pos1 = Math.floor(Math.random() * Game.DIM_X)\r\n        let pos2 = Math.floor(Math.random() * Game.DIM_Y)\r\n        return [pos1,pos2];\r\n    }\r\n\r\n    moveObjects(ctx){\r\n        this.asteroids.forEach((object) => {\r\n            object.move(ctx)\r\n        })\r\n    }\r\n    \r\n}\n\n//# sourceURL=webpack://asteroidsv2/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moving-object */ \"./src/moving-object.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-view */ \"./src/game-view.js\");\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const canvasEl = document.getElementById(\"gamecanvas\");\r\n    canvasEl.width = 1000//Game.DIM_X;\r\n    canvasEl.height = 700//Game.DIM_Y;\r\n    \r\n    const ctx = canvasEl.getContext(\"2d\")\r\n    const game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    const gv = new _game_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](game, ctx)\r\n    gv.start();\r\n    // const asty = new Asteroid({\r\n    //     pos: [100, 100]\r\n    // });\r\n    // const mo = new MovingObject({\r\n    //     pos: [30, 30],\r\n    //     vel: [10, 10],\r\n    //     radius: 5,\r\n    //     color: \"#00FF00\"\r\n    // });\r\n\r\n\r\n    // mo.draw(ctx)\r\n    // asty.draw(ctx)\r\n    // Game.draw(ctx)\r\n    // console.log(\"plz work\")\r\n    \r\n})\r\n\n\n//# sourceURL=webpack://asteroidsv2/./src/index.js?");

/***/ }),

/***/ "./src/moving-object.js":
/*!******************************!*\
  !*** ./src/moving-object.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovingObject)\n/* harmony export */ });\nclass MovingObject{\r\n    constructor(options){\r\n        this.pos = options[\"pos\"]\r\n        this.vel = options[\"vel\"]\r\n        this.radius = options[\"radius\"]\r\n        this.color = options[\"color\"]\r\n        this.game = options[\"game\"]\r\n    }\r\n\r\n    draw(ctx){\r\n        // let canvas = document.getElementById(\"myCanvas\");\r\n        // let ctx = canvas.getContext(\"2d\");\r\n        ctx.beginPath();\r\n        ctx.arc(this.pos[0],this.pos[1],this.radius, 0,2*Math.PI);\r\n        ctx.stroke();\r\n\r\n    }\r\n\r\n    move(milliseconds){\r\n        let offsetX = this.vel[0];\r\n        let offsetY = this.vel[1];\r\n\r\n        this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\r\n    }\r\n}\n\n//# sourceURL=webpack://asteroidsv2/./src/moving-object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomVec: () => (/* binding */ randomVec),\n/* harmony export */   scale: () => (/* binding */ scale)\n/* harmony export */ });\nfunction randomVec(length) {\r\n    const deg = 2 * Math.PI * Math.random();\r\n    return scale([Math.sin(deg), Math.cos(deg)], length);\r\n  }\r\n  \r\n  // Scale the length of a vector by the given amount.\r\n  function scale(vec, m) {\r\n    return [vec[0] * m, vec[1] * m];\r\n  }\r\n  \n\n//# sourceURL=webpack://asteroidsv2/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;