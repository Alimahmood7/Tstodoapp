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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var enterButton = document.getElementById(\"enter\");\nvar input = document.getElementById(\"userInput\");\nvar ul = document.querySelector(\"ul\");\nvar item = document.getElementsByTagName(\"li\");\nfunction inputLength() {\n    return input.value.length;\n}\nfunction listLength() {\n    return item.length;\n}\nfunction createListElement() {\n    var li = document.createElement(\"li\"); // creates an element \"li\"\n    li.appendChild(document.createTextNode(input['value'])); //makes text from input field the li text\n    ul.appendChild(li); //adds li to ul\n    input['value'] = \"\"; //Reset text input field\n    //START STRIKETHROUGH\n    // because it's in the function, it only adds it for new items\n    function crossOut() {\n        li.classList.toggle(\"done\");\n    }\n    li.addEventListener(\"click\", crossOut);\n    //END STRIKETHROUGH\n    // START ADD DELETE BUTTON\n    var dBtn = document.createElement(\"button\");\n    dBtn.appendChild(document.createTextNode(\"X\"));\n    li.appendChild(dBtn);\n    dBtn.addEventListener(\"click\", deleteListItem);\n    // END ADD DELETE BUTTON\n    //ADD CLASS DELETE (DISPLAY: NONE)\n    function deleteListItem() {\n        console.log('delete');\n        li.classList.add(\"delete\");\n    }\n    //END ADD CLASS DELETE\n}\nfunction addListAfterClick() {\n    if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li\n        createListElement();\n    }\n}\nfunction addListAfterKeypress(event) {\n    if (inputLength() > 0 && event.which === 13) { //this now looks to see if you hit \"enter\"/\"return\"\n        //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13\n        createListElement();\n    }\n}\nenterButton.addEventListener(\"click\", addListAfterClick);\ninput.addEventListener(\"keypress\", addListAfterKeypress);\nvar check = function () {\n    console.log('check for es2015');\n};\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ });