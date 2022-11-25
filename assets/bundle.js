/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /var/www/src/js/index.js: Unexpected token (85:67)\\n\\n\\u001b[0m \\u001b[90m 83 |\\u001b[39m     \\u001b[36mvar\\u001b[39m price \\u001b[33m=\\u001b[39m \\u001b[33mString\\u001b[39m(containerPriceDisplay\\u001b[33m?\\u001b[39m\\u001b[33m.\\u001b[39mdataset\\u001b[33m?\\u001b[39m\\u001b[33m.\\u001b[39mprice)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 84 |\\u001b[39m     \\u001b[36mvar\\u001b[39m key \\u001b[33m=\\u001b[39m \\u001b[33mString\\u001b[39m(containerPriceDisplay\\u001b[33m?\\u001b[39m\\u001b[33m.\\u001b[39mdataset\\u001b[33m?\\u001b[39m\\u001b[33m.\\u001b[39mkey)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 85 |\\u001b[39m     \\u001b[36mconst\\u001b[39m priceDisplay \\u001b[33m=\\u001b[39m \\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mcreateRoot(containerPriceDisplay)\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                                                                    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n    at instantiate (/var/www/node_modules/@babel/parser/lib/index.js:72:32)\\n    at constructor (/var/www/node_modules/@babel/parser/lib/index.js:366:12)\\n    at JSXParserMixin.raise (/var/www/node_modules/@babel/parser/lib/index.js:3453:19)\\n    at JSXParserMixin.unexpected (/var/www/node_modules/@babel/parser/lib/index.js:3491:16)\\n    at JSXParserMixin.parseExprAtom (/var/www/node_modules/@babel/parser/lib/index.js:13260:22)\\n    at JSXParserMixin.parseExprAtom (/var/www/node_modules/@babel/parser/lib/index.js:8174:20)\\n    at JSXParserMixin.parseExprSubscripts (/var/www/node_modules/@babel/parser/lib/index.js:12785:23)\\n    at JSXParserMixin.parseUpdate (/var/www/node_modules/@babel/parser/lib/index.js:12764:21)\\n    at JSXParserMixin.parseMaybeUnary (/var/www/node_modules/@babel/parser/lib/index.js:12734:23)\\n    at JSXParserMixin.parseMaybeUnaryOrPrivate (/var/www/node_modules/@babel/parser/lib/index.js:12525:61)\");\n\n//# sourceURL=webpack://loren/./src/js/index.js?");

/***/ }),

/***/ "./src/styles/theme.scss":
/*!*******************************!*\
  !*** ./src/styles/theme.scss ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"theme.css\";\n\n//# sourceURL=webpack://loren/./src/styles/theme.scss?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/theme.scss");
/******/ 	
/******/ })()
;