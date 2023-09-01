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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const observer = (classname) => {\n    return { observer: new IntersectionObserver((entries) => {\n                entries.forEach((entry) => {\n                    if(entry.isIntersecting)\n                    entry.target.classList.add(classname);\n                    else{\n                        entry.target.classList.remove(classname);\n                    }\n                })\n            })\n    }\n}\n\n\nconst animHandler = (nodes,classname) => {\n    \n    return {nodes,...observer(classname),\n        observe(){\n            nodes.forEach((el) => {this.observer.observe(el)})\n        }\n    };\n}\nconst headerHandler = animHandler(document.querySelectorAll('.hidden'),'anim');\nheaderHandler.observe();\nconst nodesRight = animHandler(document.querySelectorAll('.shiftleft'),'shift');\nnodesRight.observe();\nconst nodesLeft = animHandler(document.querySelectorAll('.shiftright'),'shift');\nnodesLeft.observe();\n\n\n//# sourceURL=webpack://personal-portofolio/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;