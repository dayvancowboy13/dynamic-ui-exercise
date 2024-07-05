(self["webpackChunkdynamic_ui_exercise"] = self["webpackChunkdynamic_ui_exercise"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    background-color: rgb(169, 214, 250);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

button {
    cursor: pointer;
}

#header {
    display: flex;
    justify-content: center;
}

#main-container {
    display: flex;
    justify-content: center;
}

#frame {
    /* box-sizing: border-box; */
    position: relative;
    border: solid black 10px;
    width: 600px;
    height: 400px;
    z-index: 2;
    background-color: rgb(194, 194, 194);
    display: flex;
    justify-content: center;
}

#control-buttons {

    & button {
        position: absolute;
        top: 50%;
        z-index: 3;
        opacity: 60%;
        border-radius: 7px;
        border: none;
        padding: 3px 4px;
    }

    & #previous {
        left: 5px;
    }

    & #next {
        right: 5px;
    }

    & #timer-toggle {
        /* justify-self: center; */
        top: 2%;
        right: 44%;
    }

    .timer-on {
        opacity: 98%;
    }

    .timer-off {
        opacity: 66%;
    }
}



#slider-container {
    --element-width: 50px;
    --element-height: 15px;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 2%;
    /* left: calc(50% - var(--element-width)/2); */
    justify-self: center;
    min-width: var(--element-width);
    min-height: var(--element-height);
    z-index: 3;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 7px;
    padding: 2px 6px;
    gap: 4px;


    & button {
        box-sizing: content-box;
        --elem-size: 8px;
        width: var(--elem-size);
        height: var(--elem-size);
        border-radius: 80%;
        border: none;
        align-self: center;
        padding: 0;

    }

    & .unselected {
        background-color: rgba(255, 255, 255, .6);

    }

    & .selected {
        transform: scale(1.5);
        background-color: rgb(255, 255, 255);
    }
}


#image-container {
    /* position: relative; */
    z-index: 1;
    display: flex;


    & img {

        height: 100%;
        /* width: auto; */
    }

}

.hidden {
    display: none;
}

#btn2 {
    transform: translateX(300px);
}

#btn1 {
    position: absolute;
    left: 100px;
    top: 24px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    width: 150px;
    height: 80px;
    border: solid blue 2px;
    background-color: rgb(184, 222, 255);
    /* transform: translate(600px, 250px); */
}

#main-menu,
#menu1 {
    border: solid black 1px;
    background-color: brown;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oCAAoC;IACpC,gDAAgD;AACpD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,UAAU;IACV,oCAAoC;IACpC,aAAa;IACb,uBAAuB;AAC3B;;AAEA;;IAEI;QACI,kBAAkB;QAClB,QAAQ;QACR,UAAU;QACV,YAAY;QACZ,kBAAkB;QAClB,YAAY;QACZ,gBAAgB;IACpB;;IAEA;QACI,SAAS;IACb;;IAEA;QACI,UAAU;IACd;;IAEA;QACI,0BAA0B;QAC1B,OAAO;QACP,UAAU;IACd;;IAEA;QACI,YAAY;IAChB;;IAEA;QACI,YAAY;IAChB;AACJ;;;;AAIA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,aAAa;IACb,6BAA6B;IAC7B,kBAAkB;IAClB,UAAU;IACV,8CAA8C;IAC9C,oBAAoB;IACpB,+BAA+B;IAC/B,iCAAiC;IACjC,UAAU;IACV,0CAA0C;IAC1C,kBAAkB;IAClB,gBAAgB;IAChB,QAAQ;;;IAGR;QACI,uBAAuB;QACvB,gBAAgB;QAChB,uBAAuB;QACvB,wBAAwB;QACxB,kBAAkB;QAClB,YAAY;QACZ,kBAAkB;QAClB,UAAU;;IAEd;;IAEA;QACI,yCAAyC;;IAE7C;;IAEA;QACI,qBAAqB;QACrB,oCAAoC;IACxC;AACJ;;;AAGA;IACI,wBAAwB;IACxB,UAAU;IACV,aAAa;;;IAGb;;QAEI,YAAY;QACZ,iBAAiB;IACrB;;AAEJ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,gDAAgD;IAChD,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,oCAAoC;IACpC,wCAAwC;AAC5C;;AAEA;;IAEI,uBAAuB;IACvB,uBAAuB;AAC3B","sourcesContent":[":root {\n    background-color: rgb(169, 214, 250);\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbutton {\n    cursor: pointer;\n}\n\n#header {\n    display: flex;\n    justify-content: center;\n}\n\n#main-container {\n    display: flex;\n    justify-content: center;\n}\n\n#frame {\n    /* box-sizing: border-box; */\n    position: relative;\n    border: solid black 10px;\n    width: 600px;\n    height: 400px;\n    z-index: 2;\n    background-color: rgb(194, 194, 194);\n    display: flex;\n    justify-content: center;\n}\n\n#control-buttons {\n\n    & button {\n        position: absolute;\n        top: 50%;\n        z-index: 3;\n        opacity: 60%;\n        border-radius: 7px;\n        border: none;\n        padding: 3px 4px;\n    }\n\n    & #previous {\n        left: 5px;\n    }\n\n    & #next {\n        right: 5px;\n    }\n\n    & #timer-toggle {\n        /* justify-self: center; */\n        top: 2%;\n        right: 44%;\n    }\n\n    .timer-on {\n        opacity: 98%;\n    }\n\n    .timer-off {\n        opacity: 66%;\n    }\n}\n\n\n\n#slider-container {\n    --element-width: 50px;\n    --element-height: 15px;\n    display: flex;\n    justify-content: space-evenly;\n    position: absolute;\n    bottom: 2%;\n    /* left: calc(50% - var(--element-width)/2); */\n    justify-self: center;\n    min-width: var(--element-width);\n    min-height: var(--element-height);\n    z-index: 3;\n    background-color: rgba(255, 255, 255, 0.5);\n    border-radius: 7px;\n    padding: 2px 6px;\n    gap: 4px;\n\n\n    & button {\n        box-sizing: content-box;\n        --elem-size: 8px;\n        width: var(--elem-size);\n        height: var(--elem-size);\n        border-radius: 80%;\n        border: none;\n        align-self: center;\n        padding: 0;\n\n    }\n\n    & .unselected {\n        background-color: rgba(255, 255, 255, .6);\n\n    }\n\n    & .selected {\n        transform: scale(1.5);\n        background-color: rgb(255, 255, 255);\n    }\n}\n\n\n#image-container {\n    /* position: relative; */\n    z-index: 1;\n    display: flex;\n\n\n    & img {\n\n        height: 100%;\n        /* width: auto; */\n    }\n\n}\n\n.hidden {\n    display: none;\n}\n\n#btn2 {\n    transform: translateX(300px);\n}\n\n#btn1 {\n    position: absolute;\n    left: 100px;\n    top: 24px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    width: 150px;\n    height: 80px;\n    border: solid blue 2px;\n    background-color: rgb(184, 222, 255);\n    /* transform: translate(600px, 250px); */\n}\n\n#main-menu,\n#menu1 {\n    border: solid black 1px;\n    background-color: brown;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/ImageCarousel.js":
/*!******************************!*\
  !*** ./src/ImageCarousel.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageCarousel)
/* harmony export */ });
class ImageCarousel {

    constructor(
        frameID, containerID, images, sliderID
    ) {

        this.frame = document.getElementById(frameID);
        this.slider = document.getElementById(sliderID);
        this.currentImage = 1;
        this.imagesInCarousel = images.length;
        this.imgContainer = document.getElementById(containerID);
        this.timeDelay = 5000;

        images.forEach((element) => {

            this.imgContainer.append(this.createImageElement(element));

        });

        this.imgContainer.firstElementChild.classList = '';

        this.addButtonListeners();
        this.setupSlider();
        this.beginTimer(this.timeDelay);

    }

    resizeFrame() {

        console.log('calling resize frame function');

    }

    beginTimer(delay) {

        this.timerID = setTimeout(() => {

            console.log(`end of timer ${this.timerID}`);
            this.nextImage();
            ImageCarousel.timerID = this.beginTimer(this.timeDelay);

        },
            delay);

    }

    setupSlider() {

        for (let i = 1; i <= this.imagesInCarousel; i++) {

            this.slider.append(this.createSliderButton(i));

        }
        // set first button to selected
        if (this.slider.childElementCount !== 0) {

            this.slider.firstElementChild.classList = 'selected';

        }

    }


    createSliderButton(index) {

        const btn = document.createElement('button');
        btn.id = `slider-button ${index}`;
        btn.classList = 'unselected';
        btn.addEventListener('click',
            () => {

                clearTimeout(this.timerID);
                this.sliderButtonClick(btn);
                this.beginTimer(this.timeDelay);

            });

        return btn;

    }

    sliderButtonClick(originButton) {

        this.resetSliderButtons();
        originButton.classList = 'selected';
        this.currentImage = parseInt(originButton.id.at(-1));
        this.hideAllImages();
        this.imgContainer.children.item(this.currentImage - 1).classList = '';

    }

    resetSliderButtons() {

        for (const child of this.slider.children) {

            child.classList = 'unselected';

        }

    }

    setSliderButtonSelected() {

        this.resetSliderButtons();
        this.slider.children.item(this.currentImage - 1).classList = 'selected';

    }

    createImageElement(imgSrc) {

        let imgElem = new Image();
        imgElem.src = imgSrc;
        imgElem.classList = 'hidden';

        return imgElem;

    }

    addButtonListeners() {

        const prevBtn = document.querySelector('#previous');
        const nextBtn = document.querySelector('#next');
        const timerBtn = document.querySelector('#timer-toggle');

        prevBtn.addEventListener('click',
            () => {

                clearTimeout(this.timerID);
                this.previousImage();
                if (this.isAutoplayOn()) this.beginTimer(this.timeDelay);

            });
        nextBtn.addEventListener('click',
            () => {

                clearTimeout(this.timerID);
                this.nextImage();
                if (this.isAutoplayOn()) this.beginTimer(this.timeDelay);


            });
        timerBtn.addEventListener('click',
            () => {

                this.toggleTimer(timerBtn.className);

            });

    }

    isAutoplayOn() {

        if (document.querySelector('#timer-toggle').className === 'timer-on') {

            return true;

        } else return false;

    }

    toggleTimer(toggleStatus) {

        if (toggleStatus === 'timer-on') {

            console.log('turning off timer');
            document.querySelector('#timer-toggle').classList = 'timer-off';
            document.querySelector('#timer-toggle').textContent = 'Autoplay Off';
            clearTimeout(this.timerID);

        } else {

            console.log('turning on timer');
            document.querySelector('#timer-toggle').classList = 'timer-on';
            document.querySelector('#timer-toggle').textContent = 'Autoplay On';
            this.beginTimer(this.timeDelay);

        }

    }

    previousImage() {

        this.hideAllImages();

        if (this.isFirstImage()) {

            this.currentImage = this.imagesInCarousel;
            this.imgContainer.children.item(this.currentImage - 1).classList = '';


        } else {

            this.currentImage--;
            this.imgContainer.children.item(this.currentImage - 1).classList = '';

        }

        this.setSliderButtonSelected();

    }

    nextImage() {

        this.hideAllImages();

        if (this.isLastImage()) {

            this.imgContainer.children.item(0).classList = '';
            this.currentImage = 1;

        } else {

            this.imgContainer.children.item(this.currentImage).classList = '';
            this.currentImage++;

        }
        this.setSliderButtonSelected();

    }

    isLastImage() {

        if (this.currentImage === this.imagesInCarousel) {

            return true;

        } else return false;

    }

    isFirstImage() {

        if (this.currentImage === 1) {

            return true;

        } else return false;

    }

    hideAllImages() {

        for (const child of this.imgContainer.children) {

            child.classList = 'hidden';

        }

    }

}

/***/ }),

/***/ "./src/images sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**************************************************************!*\
  !*** ./src/images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.png": "./src/images/1.png",
	"./2.png": "./src/images/2.png",
	"./3.png": "./src/images/3.png",
	"./4.png": "./src/images/4.png",
	"./5.png": "./src/images/5.png",
	"./6.png": "./src/images/6.png",
	"./7.png": "./src/images/7.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageCarousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageCarousel.js */ "./src/ImageCarousel.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// import DropdownMenu from './DropdownMenu.js';

/*
 * const btn1 = new DropdownMenu('btn1',
 *     'menu1');
 */

/*
 * const btn2 = new DropdownMenu('btn2',
 *     'main-menu');
 */




function importAll(r) {

    return r.keys().map(r);

}

const images = importAll(__webpack_require__("./src/images sync \\.(png%7Cjpe?g%7Csvg)$"));
const ic1 = new _ImageCarousel_js__WEBPACK_IMPORTED_MODULE_0__["default"](
    'frame',
    'image-container',
    images,
    'slider-container'
);

/***/ }),

/***/ "./src/images/1.png":
/*!**************************!*\
  !*** ./src/images/1.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d2d215c57702ce9199f3.png";

/***/ }),

/***/ "./src/images/2.png":
/*!**************************!*\
  !*** ./src/images/2.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7078e94f41f00cb998d5.png";

/***/ }),

/***/ "./src/images/3.png":
/*!**************************!*\
  !*** ./src/images/3.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d12c8b968e07d3100757.png";

/***/ }),

/***/ "./src/images/4.png":
/*!**************************!*\
  !*** ./src/images/4.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a8b7d41d42ba054ac849.png";

/***/ }),

/***/ "./src/images/5.png":
/*!**************************!*\
  !*** ./src/images/5.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1625a7a28aba40d8d804.png";

/***/ }),

/***/ "./src/images/6.png":
/*!**************************!*\
  !*** ./src/images/6.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "8dd3f6561c1c7a946489.png";

/***/ }),

/***/ "./src/images/7.png":
/*!**************************!*\
  !*** ./src/images/7.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "7aecddf97320d1c30fd9.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksTUFBTSxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLFVBQVUsWUFBWSxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGlDQUFpQywyQ0FBMkMsdURBQXVELEdBQUcsWUFBWSxzQkFBc0IsR0FBRyxhQUFhLG9CQUFvQiw4QkFBOEIsR0FBRyxxQkFBcUIsb0JBQW9CLDhCQUE4QixHQUFHLFlBQVksaUNBQWlDLDJCQUEyQiwrQkFBK0IsbUJBQW1CLG9CQUFvQixpQkFBaUIsMkNBQTJDLG9CQUFvQiw4QkFBOEIsR0FBRyxzQkFBc0Isa0JBQWtCLDZCQUE2QixtQkFBbUIscUJBQXFCLHVCQUF1Qiw2QkFBNkIsdUJBQXVCLDJCQUEyQixPQUFPLHFCQUFxQixvQkFBb0IsT0FBTyxpQkFBaUIscUJBQXFCLE9BQU8seUJBQXlCLG1DQUFtQyxvQkFBb0IscUJBQXFCLE9BQU8sbUJBQW1CLHVCQUF1QixPQUFPLG9CQUFvQix1QkFBdUIsT0FBTyxHQUFHLDJCQUEyQiw0QkFBNEIsNkJBQTZCLG9CQUFvQixvQ0FBb0MseUJBQXlCLGlCQUFpQixtREFBbUQsNkJBQTZCLHNDQUFzQyx3Q0FBd0MsaUJBQWlCLGlEQUFpRCx5QkFBeUIsdUJBQXVCLGVBQWUsb0JBQW9CLGtDQUFrQywyQkFBMkIsa0NBQWtDLG1DQUFtQyw2QkFBNkIsdUJBQXVCLDZCQUE2QixxQkFBcUIsU0FBUyx1QkFBdUIsb0RBQW9ELFNBQVMscUJBQXFCLGdDQUFnQywrQ0FBK0MsT0FBTyxHQUFHLHdCQUF3Qiw2QkFBNkIsbUJBQW1CLG9CQUFvQixpQkFBaUIseUJBQXlCLDBCQUEwQixTQUFTLEtBQUssYUFBYSxvQkFBb0IsR0FBRyxXQUFXLG1DQUFtQyxHQUFHLFdBQVcseUJBQXlCLGtCQUFrQixnQkFBZ0IsdURBQXVELG1CQUFtQixtQkFBbUIsNkJBQTZCLDJDQUEyQyw2Q0FBNkMsS0FBSyx5QkFBeUIsOEJBQThCLDhCQUE4QixHQUFHLG1CQUFtQjtBQUN2eEg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDM0oxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTs7QUFFZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7O0FBRUEsU0FBUztBQUNUOztBQUVBOztBQUVBOztBQUVBLHdCQUF3Qiw0QkFBNEI7O0FBRXBEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQSxhQUFhOztBQUViOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQSxVQUFVOztBQUVWO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxVQUFVOztBQUVWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxVQUFVOztBQUVWOztBQUVBOztBQUVBOztBQUVBOztBQUVBLFVBQVU7O0FBRVY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7Ozs7Ozs7Ozs7QUMxUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQztBQUMxQjs7QUFFckI7O0FBRUE7O0FBRUE7O0FBRUEseUJBQXlCLGdFQUl4QjtBQUNELGdCQUFnQix5REFBYTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZHluYW1pYy11aS1leGVyY2lzZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktZXhlcmNpc2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWV4ZXJjaXNlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktZXhlcmNpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1leGVyY2lzZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktZXhlcmNpc2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWV4ZXJjaXNlLy4vc3JjL0ltYWdlQ2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1leGVyY2lzZS8uL3NyYy9pbWFnZXMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NqcGUiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1leGVyY2lzZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDIxNCwgMjUwKTtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XG59XG5cbmJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4jbWFpbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNmcmFtZSB7XG4gICAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxMHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCwgMTk0LCAxOTQpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNjb250cm9sLWJ1dHRvbnMge1xuXG4gICAgJiBidXR0b24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICBvcGFjaXR5OiA2MCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAzcHggNHB4O1xuICAgIH1cblxuICAgICYgI3ByZXZpb3VzIHtcbiAgICAgICAgbGVmdDogNXB4O1xuICAgIH1cblxuICAgICYgI25leHQge1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cblxuICAgICYgI3RpbWVyLXRvZ2dsZSB7XG4gICAgICAgIC8qIGp1c3RpZnktc2VsZjogY2VudGVyOyAqL1xuICAgICAgICB0b3A6IDIlO1xuICAgICAgICByaWdodDogNDQlO1xuICAgIH1cblxuICAgIC50aW1lci1vbiB7XG4gICAgICAgIG9wYWNpdHk6IDk4JTtcbiAgICB9XG5cbiAgICAudGltZXItb2ZmIHtcbiAgICAgICAgb3BhY2l0eTogNjYlO1xuICAgIH1cbn1cblxuXG5cbiNzbGlkZXItY29udGFpbmVyIHtcbiAgICAtLWVsZW1lbnQtd2lkdGg6IDUwcHg7XG4gICAgLS1lbGVtZW50LWhlaWdodDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDIlO1xuICAgIC8qIGxlZnQ6IGNhbGMoNTAlIC0gdmFyKC0tZWxlbWVudC13aWR0aCkvMik7ICovXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiB2YXIoLS1lbGVtZW50LXdpZHRoKTtcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1lbGVtZW50LWhlaWdodCk7XG4gICAgei1pbmRleDogMztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgZ2FwOiA0cHg7XG5cblxuICAgICYgYnV0dG9uIHtcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgIC0tZWxlbS1zaXplOiA4cHg7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1lbGVtLXNpemUpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWVsZW0tc2l6ZSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDgwJTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICB9XG5cbiAgICAmIC51bnNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNik7XG5cbiAgICB9XG5cbiAgICAmIC5zZWxlY3RlZCB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIH1cbn1cblxuXG4jaW1hZ2UtY29udGFpbmVyIHtcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgei1pbmRleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG5cbiAgICAmIGltZyB7XG5cbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAvKiB3aWR0aDogYXV0bzsgKi9cbiAgICB9XG5cbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2J0bjIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMDBweCk7XG59XG5cbiNidG4xIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTAwcHg7XG4gICAgdG9wOiAyNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlcjogc29saWQgYmx1ZSAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NCwgMjIyLCAyNTUpO1xuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlKDYwMHB4LCAyNTBweCk7ICovXG59XG5cbiNtYWluLW1lbnUsXG4jbWVudTEge1xuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9DQUFvQztJQUNwQyxnREFBZ0Q7QUFDcEQ7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSTtRQUNJLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsVUFBVTtRQUNWLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLDBCQUEwQjtRQUMxQixPQUFPO1FBQ1AsVUFBVTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7QUFDSjs7OztBQUlBO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsOENBQThDO0lBQzlDLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDViwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixRQUFROzs7SUFHUjtRQUNJLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLHdCQUF3QjtRQUN4QixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixVQUFVOztJQUVkOztJQUVBO1FBQ0kseUNBQXlDOztJQUU3Qzs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixvQ0FBb0M7SUFDeEM7QUFDSjs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGFBQWE7OztJQUdiOztRQUVJLFlBQVk7UUFDWixpQkFBaUI7SUFDckI7O0FBRUo7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZ0RBQWdEO0lBQ2hELFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG9DQUFvQztJQUNwQyx3Q0FBd0M7QUFDNUM7O0FBRUE7O0lBRUksdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDIxNCwgMjUwKTtcXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI21haW4tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNmcmFtZSB7XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxMHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250cm9sLWJ1dHRvbnMge1xcblxcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDUwJTtcXG4gICAgICAgIHotaW5kZXg6IDM7XFxuICAgICAgICBvcGFjaXR5OiA2MCU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAzcHggNHB4O1xcbiAgICB9XFxuXFxuICAgICYgI3ByZXZpb3VzIHtcXG4gICAgICAgIGxlZnQ6IDVweDtcXG4gICAgfVxcblxcbiAgICAmICNuZXh0IHtcXG4gICAgICAgIHJpZ2h0OiA1cHg7XFxuICAgIH1cXG5cXG4gICAgJiAjdGltZXItdG9nZ2xlIHtcXG4gICAgICAgIC8qIGp1c3RpZnktc2VsZjogY2VudGVyOyAqL1xcbiAgICAgICAgdG9wOiAyJTtcXG4gICAgICAgIHJpZ2h0OiA0NCU7XFxuICAgIH1cXG5cXG4gICAgLnRpbWVyLW9uIHtcXG4gICAgICAgIG9wYWNpdHk6IDk4JTtcXG4gICAgfVxcblxcbiAgICAudGltZXItb2ZmIHtcXG4gICAgICAgIG9wYWNpdHk6IDY2JTtcXG4gICAgfVxcbn1cXG5cXG5cXG5cXG4jc2xpZGVyLWNvbnRhaW5lciB7XFxuICAgIC0tZWxlbWVudC13aWR0aDogNTBweDtcXG4gICAgLS1lbGVtZW50LWhlaWdodDogMTVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAyJTtcXG4gICAgLyogbGVmdDogY2FsYyg1MCUgLSB2YXIoLS1lbGVtZW50LXdpZHRoKS8yKTsgKi9cXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG1pbi13aWR0aDogdmFyKC0tZWxlbWVudC13aWR0aCk7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLWVsZW1lbnQtaGVpZ2h0KTtcXG4gICAgei1pbmRleDogMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICAgIHBhZGRpbmc6IDJweCA2cHg7XFxuICAgIGdhcDogNHB4O1xcblxcblxcbiAgICAmIGJ1dHRvbiB7XFxuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gICAgICAgIC0tZWxlbS1zaXplOiA4cHg7XFxuICAgICAgICB3aWR0aDogdmFyKC0tZWxlbS1zaXplKTtcXG4gICAgICAgIGhlaWdodDogdmFyKC0tZWxlbS1zaXplKTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDgwJTtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuXFxuICAgIH1cXG5cXG4gICAgJiAudW5zZWxlY3RlZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcXG5cXG4gICAgfVxcblxcbiAgICAmIC5zZWxlY3RlZCB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIH1cXG59XFxuXFxuXFxuI2ltYWdlLWNvbnRhaW5lciB7XFxuICAgIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cXG4gICAgei1pbmRleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG5cXG5cXG4gICAgJiBpbWcge1xcblxcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgLyogd2lkdGg6IGF1dG87ICovXFxuICAgIH1cXG5cXG59XFxuXFxuLmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNidG4yIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwMHB4KTtcXG59XFxuXFxuI2J0bjEge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDEwMHB4O1xcbiAgICB0b3A6IDI0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGJvcmRlcjogc29saWQgYmx1ZSAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDIyMiwgMjU1KTtcXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGUoNjAwcHgsIDI1MHB4KTsgKi9cXG59XFxuXFxuI21haW4tbWVudSxcXG4jbWVudTEge1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VDYXJvdXNlbCB7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZnJhbWVJRCwgY29udGFpbmVySUQsIGltYWdlcywgc2xpZGVySURcbiAgICApIHtcblxuICAgICAgICB0aGlzLmZyYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZnJhbWVJRCk7XG4gICAgICAgIHRoaXMuc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVySUQpO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IDE7XG4gICAgICAgIHRoaXMuaW1hZ2VzSW5DYXJvdXNlbCA9IGltYWdlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMuaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySUQpO1xuICAgICAgICB0aGlzLnRpbWVEZWxheSA9IDUwMDA7XG5cbiAgICAgICAgaW1hZ2VzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5pbWdDb250YWluZXIuYXBwZW5kKHRoaXMuY3JlYXRlSW1hZ2VFbGVtZW50KGVsZW1lbnQpKTtcblxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmltZ0NvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZC5jbGFzc0xpc3QgPSAnJztcblxuICAgICAgICB0aGlzLmFkZEJ1dHRvbkxpc3RlbmVycygpO1xuICAgICAgICB0aGlzLnNldHVwU2xpZGVyKCk7XG4gICAgICAgIHRoaXMuYmVnaW5UaW1lcih0aGlzLnRpbWVEZWxheSk7XG5cbiAgICB9XG5cbiAgICByZXNpemVGcmFtZSgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZygnY2FsbGluZyByZXNpemUgZnJhbWUgZnVuY3Rpb24nKTtcblxuICAgIH1cblxuICAgIGJlZ2luVGltZXIoZGVsYXkpIHtcblxuICAgICAgICB0aGlzLnRpbWVySUQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYGVuZCBvZiB0aW1lciAke3RoaXMudGltZXJJRH1gKTtcbiAgICAgICAgICAgIHRoaXMubmV4dEltYWdlKCk7XG4gICAgICAgICAgICBJbWFnZUNhcm91c2VsLnRpbWVySUQgPSB0aGlzLmJlZ2luVGltZXIodGhpcy50aW1lRGVsYXkpO1xuXG4gICAgICAgIH0sXG4gICAgICAgICAgICBkZWxheSk7XG5cbiAgICB9XG5cbiAgICBzZXR1cFNsaWRlcigpIHtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSB0aGlzLmltYWdlc0luQ2Fyb3VzZWw7IGkrKykge1xuXG4gICAgICAgICAgICB0aGlzLnNsaWRlci5hcHBlbmQodGhpcy5jcmVhdGVTbGlkZXJCdXR0b24oaSkpO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IGZpcnN0IGJ1dHRvbiB0byBzZWxlY3RlZFxuICAgICAgICBpZiAodGhpcy5zbGlkZXIuY2hpbGRFbGVtZW50Q291bnQgIT09IDApIHtcblxuICAgICAgICAgICAgdGhpcy5zbGlkZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0ID0gJ3NlbGVjdGVkJztcblxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGNyZWF0ZVNsaWRlckJ1dHRvbihpbmRleCkge1xuXG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBidG4uaWQgPSBgc2xpZGVyLWJ1dHRvbiAke2luZGV4fWA7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QgPSAndW5zZWxlY3RlZCc7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsXG4gICAgICAgICAgICAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcklEKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlckJ1dHRvbkNsaWNrKGJ0bik7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWdpblRpbWVyKHRoaXMudGltZURlbGF5KTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGJ0bjtcblxuICAgIH1cblxuICAgIHNsaWRlckJ1dHRvbkNsaWNrKG9yaWdpbkJ1dHRvbikge1xuXG4gICAgICAgIHRoaXMucmVzZXRTbGlkZXJCdXR0b25zKCk7XG4gICAgICAgIG9yaWdpbkJ1dHRvbi5jbGFzc0xpc3QgPSAnc2VsZWN0ZWQnO1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IHBhcnNlSW50KG9yaWdpbkJ1dHRvbi5pZC5hdCgtMSkpO1xuICAgICAgICB0aGlzLmhpZGVBbGxJbWFnZXMoKTtcbiAgICAgICAgdGhpcy5pbWdDb250YWluZXIuY2hpbGRyZW4uaXRlbSh0aGlzLmN1cnJlbnRJbWFnZSAtIDEpLmNsYXNzTGlzdCA9ICcnO1xuXG4gICAgfVxuXG4gICAgcmVzZXRTbGlkZXJCdXR0b25zKCkge1xuXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5zbGlkZXIuY2hpbGRyZW4pIHtcblxuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0ID0gJ3Vuc2VsZWN0ZWQnO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldFNsaWRlckJ1dHRvblNlbGVjdGVkKCkge1xuXG4gICAgICAgIHRoaXMucmVzZXRTbGlkZXJCdXR0b25zKCk7XG4gICAgICAgIHRoaXMuc2xpZGVyLmNoaWxkcmVuLml0ZW0odGhpcy5jdXJyZW50SW1hZ2UgLSAxKS5jbGFzc0xpc3QgPSAnc2VsZWN0ZWQnO1xuXG4gICAgfVxuXG4gICAgY3JlYXRlSW1hZ2VFbGVtZW50KGltZ1NyYykge1xuXG4gICAgICAgIGxldCBpbWdFbGVtID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZ0VsZW0uc3JjID0gaW1nU3JjO1xuICAgICAgICBpbWdFbGVtLmNsYXNzTGlzdCA9ICdoaWRkZW4nO1xuXG4gICAgICAgIHJldHVybiBpbWdFbGVtO1xuXG4gICAgfVxuXG4gICAgYWRkQnV0dG9uTGlzdGVuZXJzKCkge1xuXG4gICAgICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJldmlvdXMnKTtcbiAgICAgICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0Jyk7XG4gICAgICAgIGNvbnN0IHRpbWVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpbWVyLXRvZ2dsZScpO1xuXG4gICAgICAgIHByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLFxuICAgICAgICAgICAgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXJJRCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c0ltYWdlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRvcGxheU9uKCkpIHRoaXMuYmVnaW5UaW1lcih0aGlzLnRpbWVEZWxheSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgICAgICgpID0+IHtcblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySUQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dEltYWdlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRvcGxheU9uKCkpIHRoaXMuYmVnaW5UaW1lcih0aGlzLnRpbWVEZWxheSk7XG5cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIHRpbWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxcbiAgICAgICAgICAgICgpID0+IHtcblxuICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlVGltZXIodGltZXJCdG4uY2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBpc0F1dG9wbGF5T24oKSB7XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aW1lci10b2dnbGUnKS5jbGFzc05hbWUgPT09ICd0aW1lci1vbicpIHtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgfSBlbHNlIHJldHVybiBmYWxzZTtcblxuICAgIH1cblxuICAgIHRvZ2dsZVRpbWVyKHRvZ2dsZVN0YXR1cykge1xuXG4gICAgICAgIGlmICh0b2dnbGVTdGF0dXMgPT09ICd0aW1lci1vbicpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3R1cm5pbmcgb2ZmIHRpbWVyJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZXItdG9nZ2xlJykuY2xhc3NMaXN0ID0gJ3RpbWVyLW9mZic7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZXItdG9nZ2xlJykudGV4dENvbnRlbnQgPSAnQXV0b3BsYXkgT2ZmJztcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVySUQpO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0dXJuaW5nIG9uIHRpbWVyJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGltZXItdG9nZ2xlJykuY2xhc3NMaXN0ID0gJ3RpbWVyLW9uJztcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aW1lci10b2dnbGUnKS50ZXh0Q29udGVudCA9ICdBdXRvcGxheSBPbic7XG4gICAgICAgICAgICB0aGlzLmJlZ2luVGltZXIodGhpcy50aW1lRGVsYXkpO1xuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHByZXZpb3VzSW1hZ2UoKSB7XG5cbiAgICAgICAgdGhpcy5oaWRlQWxsSW1hZ2VzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNGaXJzdEltYWdlKCkpIHtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlc0luQ2Fyb3VzZWw7XG4gICAgICAgICAgICB0aGlzLmltZ0NvbnRhaW5lci5jaGlsZHJlbi5pdGVtKHRoaXMuY3VycmVudEltYWdlIC0gMSkuY2xhc3NMaXN0ID0gJyc7XG5cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZS0tO1xuICAgICAgICAgICAgdGhpcy5pbWdDb250YWluZXIuY2hpbGRyZW4uaXRlbSh0aGlzLmN1cnJlbnRJbWFnZSAtIDEpLmNsYXNzTGlzdCA9ICcnO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFNsaWRlckJ1dHRvblNlbGVjdGVkKCk7XG5cbiAgICB9XG5cbiAgICBuZXh0SW1hZ2UoKSB7XG5cbiAgICAgICAgdGhpcy5oaWRlQWxsSW1hZ2VzKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNMYXN0SW1hZ2UoKSkge1xuXG4gICAgICAgICAgICB0aGlzLmltZ0NvbnRhaW5lci5jaGlsZHJlbi5pdGVtKDApLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSAxO1xuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHRoaXMuaW1nQ29udGFpbmVyLmNoaWxkcmVuLml0ZW0odGhpcy5jdXJyZW50SW1hZ2UpLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UrKztcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U2xpZGVyQnV0dG9uU2VsZWN0ZWQoKTtcblxuICAgIH1cblxuICAgIGlzTGFzdEltYWdlKCkge1xuXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZSA9PT0gdGhpcy5pbWFnZXNJbkNhcm91c2VsKSB7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBpc0ZpcnN0SW1hZ2UoKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudEltYWdlID09PSAxKSB7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIH0gZWxzZSByZXR1cm4gZmFsc2U7XG5cbiAgICB9XG5cbiAgICBoaWRlQWxsSW1hZ2VzKCkge1xuXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5pbWdDb250YWluZXIuY2hpbGRyZW4pIHtcblxuICAgICAgICAgICAgY2hpbGQuY2xhc3NMaXN0ID0gJ2hpZGRlbic7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwidmFyIG1hcCA9IHtcblx0XCIuLzEucG5nXCI6IFwiLi9zcmMvaW1hZ2VzLzEucG5nXCIsXG5cdFwiLi8yLnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy8yLnBuZ1wiLFxuXHRcIi4vMy5wbmdcIjogXCIuL3NyYy9pbWFnZXMvMy5wbmdcIixcblx0XCIuLzQucG5nXCI6IFwiLi9zcmMvaW1hZ2VzLzQucG5nXCIsXG5cdFwiLi81LnBuZ1wiOiBcIi4vc3JjL2ltYWdlcy81LnBuZ1wiLFxuXHRcIi4vNi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvNi5wbmdcIixcblx0XCIuLzcucG5nXCI6IFwiLi9zcmMvaW1hZ2VzLzcucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIFxcXFwuKHBuZyU3Q2pwZT9nJTdDc3ZnKSRcIjsiLCIvLyBpbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4vRHJvcGRvd25NZW51LmpzJztcblxuLypcbiAqIGNvbnN0IGJ0bjEgPSBuZXcgRHJvcGRvd25NZW51KCdidG4xJyxcbiAqICAgICAnbWVudTEnKTtcbiAqL1xuXG4vKlxuICogY29uc3QgYnRuMiA9IG5ldyBEcm9wZG93bk1lbnUoJ2J0bjInLFxuICogICAgICdtYWluLW1lbnUnKTtcbiAqL1xuXG5pbXBvcnQgSW1hZ2VDYXJvdXNlbCBmcm9tICcuL0ltYWdlQ2Fyb3VzZWwuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmZ1bmN0aW9uIGltcG9ydEFsbChyKSB7XG5cbiAgICByZXR1cm4gci5rZXlzKCkubWFwKHIpO1xuXG59XG5cbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoXG4gICAgJy4vaW1hZ2VzLycsXG4gICAgZmFsc2UsXG4gICAgL1xcLihwbmd8anBlP2d8c3ZnKSQvXG4pKTtcbmNvbnN0IGljMSA9IG5ldyBJbWFnZUNhcm91c2VsKFxuICAgICdmcmFtZScsXG4gICAgJ2ltYWdlLWNvbnRhaW5lcicsXG4gICAgaW1hZ2VzLFxuICAgICdzbGlkZXItY29udGFpbmVyJ1xuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=