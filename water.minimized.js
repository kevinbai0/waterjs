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
/******/ 	return __webpack_require__(__webpack_require__.s = "./water.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./water.js":
/*!******************!*\
  !*** ./water.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Water =\n/*#__PURE__*/\nfunction () {\n  function Water() {\n    _classCallCheck(this, Water);\n\n    _defineProperty(this, \"animationsManager\", new AnimationsManager());\n\n    _defineProperty(this, \"mount\", function () {\n      window.addEventListener(\"scroll\", handleScroll); // call handle scroll once\n\n      handleScroll();\n    });\n\n    _defineProperty(this, \"unmount\", function () {\n      window.removeEventListener(\"scroll\", handleScroll);\n    });\n\n    _defineProperty(this, \"uniqIdCounter\", 0);\n\n    _defineProperty(this, \"add\", function (query) {\n      var uniqId = uniqIdCounter++ + \"\" + Date.now();\n      this.animationsManager.animatables[uniqId] = query;\n      targetMap.push(uniqId); // return this for chaining\n\n      return this;\n    });\n  }\n\n  _createClass(Water, [{\n    key: \"handleScroll\",\n    value: function handleScroll(event) {\n      // return list of items to animatable for animating\n      // temporarily, return everything (optimizations to be made)\n      this.animationsManager.updateAnimationsFor(targetMap);\n    }\n  }]);\n\n  return Water;\n}();\n\nvar AnimationsManager = function AnimationsManager() {\n  _classCallCheck(this, AnimationsManager);\n\n  _defineProperty(this, \"animatables\", {});\n\n  _defineProperty(this, \"updateAnimationsFor\", function (targetMap) {\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = targetMap[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var target = _step.value;\n        var animatable = this.animatables[target];\n        var element = this.animatables[target].target;\n        var max = element.offsetTop;\n        var min = max - window.innerHeight;\n        min = min < 0 ? 0 : min;\n        max = max > document.body.clientHeight - window.innerHeight ? document.body.clientHeight - window.innerHeight : max;\n        var percentage = (window.pageYOffset - min) / (max - min + element.offsetHeight);\n        element.style.transform = \"\";\n\n        for (keyframe in animatable.keyframes) {\n          if (animatable.keyframes[keyframe].length == 2) {\n            var start = animatable.keyframes[keyframe][0];\n            var end = animatable.keyframes[keyframe][1];\n            this.updateKeyframe(element, keyframe, start, end, percentage);\n          }\n        }\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator.return != null) {\n          _iterator.return();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n  });\n\n  _defineProperty(this, \"updateKeyframe\", function (element, keyframe, start, end, percentage) {\n    var extension = \"\";\n\n    if (isNaN(start)) {\n      extension = this.getValueExtension(start);\n      if (extension == \"err\") return new ErrorEvent(\"Extension Error\");\n      start = parseInt(start.slice(0, -extension.length));\n    }\n\n    if (isNaN(end)) {\n      extension = this.getValueExtension(end);\n      if (extension == \"err\") return new ErrorEvent(\"Extension Error\");\n      end = parseInt(end.slice(0, -extension.length));\n    }\n\n    if (percentage > 1) percentage = 1;\n    if (percentage < 0) percentage = 0;\n    var percentValue = (end - start) * percentage + start;\n\n    if (keyframe === \"opacity\") {\n      element.style.opacity = percentValue;\n    }\n\n    var transformations = [\"rotate\", \"rotateX\", \"rotateY\", \"translateX\", \"translateY\", \"scale\", \"scaleX\", \"scaleY\"];\n\n    for (var _i = 0; _i < transformations.length; _i++) {\n      transform = transformations[_i];\n\n      if (keyframe === transform) {\n        var transformExt = extension;\n        if (!transformExt && (keyframe === \"translateX\" || keyframe === \"translateY\")) transformExt = \"px\";\n        element.style.transform += keyframe + \"(\" + percentValue + transformExt;\n      }\n    }\n  });\n\n  _defineProperty(this, \"getValueExtension\", function (value) {\n    var ending = \"\";\n    if (value.length == 0) return \"Err\";\n\n    for (var i = value.length - 1; i >= 0; i--) {\n      if (value.charCodeAt(i) < 48 || value.charCodeAt(i) > 57) {\n        if (i < value.length - 3) return \"Err\";\n        ending = value[i] + ending;\n      }\n    }\n\n    return ending;\n  });\n};\n\n//# sourceURL=webpack:///./water.js?");

/***/ })

/******/ });