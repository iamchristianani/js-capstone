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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html,\\r\\nbody {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-family: Lato, sans-serif;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  min-height: 100vh;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  background: #333;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  column-gap: 100px;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.all-movie {\\r\\n  width: 90%;\\r\\n  list-style: none;\\r\\n  padding: 0;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n  row-gap: 30px;\\r\\n  column-gap: 30px;\\r\\n  margin-top: 70px;\\r\\n  margin-bottom: 70px;\\r\\n}\\r\\n\\r\\n.each-movie {\\r\\n  background-color: #e69a8d;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.image-container {\\r\\n  width: 180px;\\r\\n}\\r\\n\\r\\n.each-movie img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.name-and-likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  column-gap: 10px;\\r\\n}\\r\\n\\r\\n.name-and-likes h3 {\\r\\n  margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  margin: 10px 0;\\r\\n}\\r\\n\\r\\n.like-icon {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  padding: 10px;\\r\\n  background-color: #5f4b8b;\\r\\n  color: #fff;\\r\\n  border: none;\\r\\n  border-radius: 3px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  width: 100%;\\r\\n  background-color: #333;\\r\\n  color: #fff;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  margin-top: auto;\\r\\n}\\r\\n\\r\\nfooter p {\\r\\n  padding: 0 30px;\\r\\n}\\r\\n\\r\\n/* Comment popUp Style */\\r\\n.popUpContainer {\\r\\n  border: 2px solid burlywood;\\r\\n  position: fixed;\\r\\n  top: 30px;\\r\\n  padding: 60px;\\r\\n  right: 44vh;\\r\\n  bottom: 2vh;\\r\\n  background-color: bisque;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  box-shadow: 0 5px 20px 3px rgb(132, 119, 119);\\r\\n}\\r\\n\\r\\n.movieImg {\\r\\n  width: 100vh;\\r\\n  height: 50vh;\\r\\n}\\r\\n\\r\\n.popUpCloseBtn {\\r\\n  position: absolute;\\r\\n  top: 10px;\\r\\n  right: 20px;\\r\\n  font-size: larger;\\r\\n  padding: 10px;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.popUpCloseBtn:hover {\\r\\n  background-color: red;\\r\\n}\\r\\n\\r\\n.movieName {\\r\\n  text-align: center;\\r\\n  font-size: 26px;\\r\\n  color: rebeccapurple;\\r\\n}\\r\\n\\r\\n.popUpBottomDiv {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-around;\\r\\n}\\r\\n\\r\\n.genreItem {\\r\\n  list-style-type: disc;\\r\\n}\\r\\n\\r\\n.officialSiteLink {\\r\\n  font-weight: bolder;\\r\\n}\\r\\n\\r\\n.popDiv {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  display: none;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  background-color: rgba(255, 255, 255, 0.84);\\r\\n  backdrop-filter: blur(3px);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://gavot/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://gavot/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://gavot/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://gavot/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://gavot/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://gavot/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://gavot/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://gavot/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://gavot/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://gavot/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_renderList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderList.js */ \"./src/modules/renderList.js\");\n/* harmony import */ var _modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/movieCounter.js */ \"./src/modules/movieCounter.js\");\n/* harmony import */ var _modules_variableList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/variableList.js */ \"./src/modules/variableList.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  await (0,_modules_renderList_js__WEBPACK_IMPORTED_MODULE_1__.displayMovie)();\n\n  const likeCounter = document.querySelectorAll('.like-counter');\n  likeCounter.forEach(async (likes) => {\n    const add = 0;\n    await (0,_modules_renderList_js__WEBPACK_IMPORTED_MODULE_1__.showLikes)(likes, add);\n  });\n  const allMovies = document.querySelectorAll('.each-movie');\n  _modules_variableList_js__WEBPACK_IMPORTED_MODULE_3__.movieCount.innerHTML = (0,_modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(allMovies);\n});\n\nwindow.addEventListener('click', async (e) => {\n  const likeBtn = e.target;\n  if (likeBtn.classList.contains('like-icon')) {\n    const movieID = likeBtn.getAttribute('data-id');\n    const txtlike = likeBtn.nextElementSibling;\n    const add = 1;\n    await (0,_modules_renderList_js__WEBPACK_IMPORTED_MODULE_1__.showLikes)(txtlike, add, movieID);\n  }\n});\n\n\n//# sourceURL=webpack://gavot/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiCall.js":
/*!********************************!*\
  !*** ./src/modules/apiCall.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_URL = 'https://api.tvmaze.com/shows';\n\nconst getMovie = async () => {\n  const res = await fetch(API_URL);\n  const json = await res.json();\n  const data = json.slice(0, 16);\n  return data;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMovie);\n\n//# sourceURL=webpack://gavot/./src/modules/apiCall.js?");

/***/ }),

/***/ "./src/modules/commentPopUp.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable guard-for-in */\nconst popDiv = document.getElementById('popDiv');\nconst showCommentModal = (movie) => {\n  popDiv.style.display = 'flex';\n  const popUpContainer = document.createElement('div');\n  popUpContainer.classList.add('popUpContainer');\n\n  const popUpTopDiv = document.createElement('div');\n  popUpTopDiv.classList.add('popUpTopDiv');\n\n  const movieImg = document.createElement('img');\n  movieImg.classList.add('movieImg');\n  movieImg.setAttribute('src', movie.image.original);\n\n  const popUpCloseBtn = document.createElement('i');\n  // popUpCloseBtn.innerText = 'colse';\n  popUpCloseBtn.classList.add('popUpCloseBtn', 'fa-solid', 'fa-close', 'closeIcon');\n  popUpCloseBtn.addEventListener('click', () => {\n    popDiv.style.display = 'none';\n    // document.location.reload;\n  });\n  popUpTopDiv.append(movieImg, popUpCloseBtn);\n\n  const popUpBottomDiv = document.createElement('div');\n  popUpBottomDiv.classList.add('popUpBottomDiv');\n\n  const movieName = document.createElement('h3');\n  movieName.classList.add('movieName');\n  movieName.innerText = movie.name;\n\n  const popUpBottomRight = document.createElement('div');\n  const genreList = document.createElement('ul');\n  genreList.classList.add('genreList');\n\n  movie.genres.forEach((genre) => {\n    const genreItem = document.createElement('li');\n    genreItem.classList.add('genreItem');\n    genreItem.innerText = genre;\n    genreList.append(genreItem);\n  });\n\n  const genreText = document.createElement('p');\n  genreText.classList.add('genreText');\n  genreText.innerText = 'Genres';\n\n  popUpBottomRight.append(genreText, genreList);\n\n  const officialSiteLink = document.createElement('a');\n  officialSiteLink.classList.add('officialSiteLink');\n  officialSiteLink.setAttribute('href', movie.officialSite);\n  officialSiteLink.innerText = 'Visit Site';\n\n  const movieLanguage = document.createElement('p');\n  movieLanguage.classList.add('movieLanguage');\n  movieLanguage.innerText = `Langauge: ${movie.language}`;\n\n  const movieratingContainer = document.createElement('div');\n\n  const movieRatingValue = document.createElement('p');\n  movieRatingValue.classList.add('movieRatingValue');\n  movieRatingValue.innerText = `Rating: ${movie.rating.average}`;\n  movieratingContainer.append(movieRatingValue);\n\n  const popUpBottomLeft = document.createElement('div');\n  popUpBottomLeft.append(movieLanguage, movieratingContainer, officialSiteLink);\n\n  popUpBottomDiv.append(popUpBottomRight, popUpBottomLeft);\n\n  popUpContainer.append(popUpTopDiv, movieName, popUpBottomDiv);\n  popDiv.append(popUpContainer);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showCommentModal);\n\n//# sourceURL=webpack://gavot/./src/modules/commentPopUp.js?");

/***/ }),

/***/ "./src/modules/involvementAPICalls.js":
/*!********************************************!*\
  !*** ./src/modules/involvementAPICalls.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLiketoAPI\": () => (/* binding */ addLiketoAPI),\n/* harmony export */   \"retrieveAPILike\": () => (/* binding */ retrieveAPILike)\n/* harmony export */ });\nconst API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\nconst APP_ID = 'dPFjjUGUAmeW9iUvUDVo';\n\nconst addLiketoAPI = (id) => {\n  fetch(`${API_URL}/apps/${APP_ID}/likes`, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: `${id}`,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n};\n\nconst retrieveAPILike = async () => {\n  const requestURL = `${API_URL}/apps/${APP_ID}/likes`;\n  const response = await fetch(requestURL);\n  const myLikes = await response.json();\n\n  return myLikes;\n};\n\n\n\n//# sourceURL=webpack://gavot/./src/modules/involvementAPICalls.js?");

/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst counter = (allMovies) => allMovies.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counter);\n\n//# sourceURL=webpack://gavot/./src/modules/movieCounter.js?");

/***/ }),

/***/ "./src/modules/movieList.js":
/*!**********************************!*\
  !*** ./src/modules/movieList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCall.js */ \"./src/modules/apiCall.js\");\n\n\nconst createList = async () => {\n  const movieArr = [];\n  const movieList = await (0,_apiCall_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  movieList.forEach((movie) => {\n    const newArr = {\n      id: movie.id,\n      name: movie.name,\n      moviePoster: movie.image.original,\n      altTitle: movie.name,\n      description: movie.summary,\n    };\n    movieArr.push(newArr);\n  });\n  return movieArr;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);\n\n//# sourceURL=webpack://gavot/./src/modules/movieList.js?");

/***/ }),

/***/ "./src/modules/renderList.js":
/*!***********************************!*\
  !*** ./src/modules/renderList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMovie\": () => (/* binding */ displayMovie),\n/* harmony export */   \"showLikes\": () => (/* binding */ showLikes)\n/* harmony export */ });\n/* harmony import */ var _variableList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variableList.js */ \"./src/modules/variableList.js\");\n/* harmony import */ var _movieList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movieList.js */ \"./src/modules/movieList.js\");\n/* harmony import */ var _involvementAPICalls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involvementAPICalls.js */ \"./src/modules/involvementAPICalls.js\");\n/* harmony import */ var _commentPopUp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commentPopUp.js */ \"./src/modules/commentPopUp.js\");\n/* harmony import */ var _apiCall_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apiCall.js */ \"./src/modules/apiCall.js\");\n\n\n\n\n\n\nconst getMovies = async (e) => {\n  const movies = await (0,_apiCall_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n  const movie = movies.filter((movie) => JSON.stringify(movie.id) === e.target.id);\n  (0,_commentPopUp_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(movie[0]);\n};\n\nconst displayMovie = async () => {\n  const movieArr = await (0,_movieList_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  _variableList_js__WEBPACK_IMPORTED_MODULE_0__.allMovie.innerHTML = '';\n  movieArr.forEach((movie) => {\n    const oneMovie = document.createElement('li');\n    oneMovie.className = 'each-movie';\n    oneMovie.innerHTML = `\n      <div class=\"image-container movie-${movie.id}\">\n          <img src=\"${movie.moviePoster}\" alt=\"${movie.altTitle}\">\n      </div>\n      <div class=\"name-and-likes\">\n          <h3>${movie.name}</h3>\n          <div class=\"likes\">\n            <i data-id=\"${movie.id}\" class=\"fa-regular fa-heart like-icon\"></i>\n            <span data-id=\"${movie.id}\" class=\"like-counter\"></span> \n          </div>\n      </div>\n    `;\n    const commmentBtn = document.createElement('button');\n    commmentBtn.innerText = 'Comment';\n    commmentBtn.classList.add('comment');\n    commmentBtn.setAttribute('id', movie.id);\n\n    commmentBtn.addEventListener('click', (e) => {\n      getMovies(e);\n    });\n\n    oneMovie.append(commmentBtn);\n    _variableList_js__WEBPACK_IMPORTED_MODULE_0__.allMovie.appendChild(oneMovie);\n  });\n};\n\nconst showLikes = async (likes, add, oneID) => {\n  const movieID = likes.getAttribute('data-id');\n  (0,_involvementAPICalls_js__WEBPACK_IMPORTED_MODULE_2__.addLiketoAPI)(oneID);\n  const noOfLikes = await (0,_involvementAPICalls_js__WEBPACK_IMPORTED_MODULE_2__.retrieveAPILike)();\n  const likeAmount = noOfLikes.filter((likeObj) => likeObj.item_id === movieID);\n  if (likeAmount.length > 0) {\n    likes.textContent = `${likeAmount[0].likes + add}`;\n  }\n};\n\n\n\n//# sourceURL=webpack://gavot/./src/modules/renderList.js?");

/***/ }),

/***/ "./src/modules/variableList.js":
/*!*************************************!*\
  !*** ./src/modules/variableList.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allMovie\": () => (/* binding */ allMovie),\n/* harmony export */   \"movieCount\": () => (/* binding */ movieCount)\n/* harmony export */ });\nconst allMovie = document.querySelector('.all-movie');\nconst movieCount = document.querySelector('.movie-counter');\n\n\n\n//# sourceURL=webpack://gavot/./src/modules/variableList.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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