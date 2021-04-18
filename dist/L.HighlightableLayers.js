(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("leaflet"));
	else if(typeof define === 'function' && define.amd)
		define(["leaflet"], factory);
	else if(typeof exports === 'object')
		exports["L"] = factory(require("leaflet"));
	else
		root["L"] = root["L"] || {}, root["L"]["HighlightableLayers"] = factory(root["L"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__453__) {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 974:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* .leaflet-lhl-marker-hightlight-pane {\n\tz-index: 621;\n}*/\n\n.leaflet-pane.leaflet-lhl-raised-pane {\n\tz-index: 620;\n}\n\n.leaflet-pane.leaflet-lhl-raised-shadow-pane {\n\tz-index: 619;\n}\n\n.leaflet-pane.leaflet-lhl-shadow-pane {\n\tz-index: 399;\n}\n\n.leaflet-pane.leaflet-lhl-almost-over-pane {\n\tz-index: 201;\n}", "",{"version":3,"sources":["webpack://./src/panes.css"],"names":[],"mappings":"AAAA;;EAEE;;AAEF;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,YAAY;AACb","sourcesContent":["/* .leaflet-lhl-marker-hightlight-pane {\n\tz-index: 621;\n}*/\n\n.leaflet-pane.leaflet-lhl-raised-pane {\n\tz-index: 620;\n}\n\n.leaflet-pane.leaflet-lhl-raised-shadow-pane {\n\tz-index: 619;\n}\n\n.leaflet-pane.leaflet-lhl-shadow-pane {\n\tz-index: 399;\n}\n\n.leaflet-pane.leaflet-lhl-almost-over-pane {\n\tz-index: 201;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 15:
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ 477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(379);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_panes_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(974);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_panes_css__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_panes_css__WEBPACK_IMPORTED_MODULE_1__/* .default.locals */ .Z.locals || {});

/***/ }),

/***/ 379:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 607:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(695), exports);
__exportStar(__webpack_require__(593), exports);
__exportStar(__webpack_require__(992), exports);
__exportStar(__webpack_require__(299), exports);


/***/ }),

/***/ 992:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HighlightableRectangle = exports.HighlightablePolyline = exports.HighlightablePolygon = exports.HighlightableCircleMarker = exports.HighlightableCircle = exports.createHighlightableLayerClass = void 0;
var leaflet_1 = __webpack_require__(453);
var panes_1 = __webpack_require__(695);
var styles_1 = __webpack_require__(299);
var utils_1 = __webpack_require__(593);
function createHighlightableLayerClass(BaseClass, cloneMethods, defaultOptions) {
    if (cloneMethods === void 0) { cloneMethods = []; }
    var result = /** @class */ (function (_super) {
        __extends(HighlightableLayer, _super);
        function HighlightableLayer() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a;
            var _this = _super.apply(this, args) || this;
            _this.realOptions = utils_1.clone(_this.options);
            if (defaultOptions) {
                Object.assign(_this.realOptions, defaultOptions);
            }
            if (!_this.realOptions.generateStyles) {
                _this.realOptions.generateStyles = styles_1.generatePolygonStyles;
            }
            _this.layers = {};
            for (var _b = 0, _c = Object.keys((_a = _this.realOptions.generateStyles(_this.realOptions)) !== null && _a !== void 0 ? _a : {}); _b < _c.length; _b++) {
                var layerName = _c[_b];
                if (layerName !== "main") {
                    _this.layers[layerName] = new (BaseClass.bind.apply(BaseClass, __spreadArrays([void 0], args)))();
                }
            }
            _this.setStyle({});
            return _this;
        }
        HighlightableLayer.prototype.onAdd = function (map) {
            _super.prototype.onAdd.call(this, map);
            for (var _i = 0, _a = Object.keys(this.layers); _i < _a.length; _i++) {
                var layerName = _a[_i];
                map.addLayer(this.layers[layerName]);
            }
            return this;
        };
        HighlightableLayer.prototype.onRemove = function (map) {
            for (var _i = 0, _a = Object.keys(this.layers); _i < _a.length; _i++) {
                var layerName = _a[_i];
                map.removeLayer(this.layers[layerName]);
            }
            _super.prototype.onRemove.call(this, map);
            return this;
        };
        HighlightableLayer.prototype.setStyle = function (style) {
            var _a, _b, _c;
            Object.assign(this.realOptions, style);
            var styles = (_c = (_b = (_a = this.realOptions).generateStyles) === null || _b === void 0 ? void 0 : _b.call(_a, this.realOptions)) !== null && _c !== void 0 ? _c : { main: __assign({}, this.realOptions) };
            if (styles.main.pane)
                panes_1.setLayerPane(this, styles.main.pane);
            _super.prototype.setStyle.call(this, styles.main);
            for (var _i = 0, _d = Object.keys(this.layers); _i < _d.length; _i++) {
                var layerName = _d[_i];
                if (styles[layerName].pane)
                    panes_1.setLayerPane(this.layers[layerName], styles[layerName].pane);
                this.layers[layerName].setStyle(styles[layerName]);
            }
            return this;
        };
        return HighlightableLayer;
    }(BaseClass));
    var _loop_1 = function (method) {
        result.prototype[method] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var r = Object.getPrototypeOf(result.prototype)[method].apply(this, args);
            for (var _a = 0, _b = Object.keys(this.layers); _a < _b.length; _a++) {
                var layerName = _b[_a];
                this.layers[layerName][method].apply(this.layers[layerName], args);
            }
            return r;
        };
    };
    for (var _i = 0, _a = __spreadArrays(['redraw'], cloneMethods); _i < _a.length; _i++) {
        var method = _a[_i];
        _loop_1(method);
    }
    return result;
}
exports.createHighlightableLayerClass = createHighlightableLayerClass;
exports.HighlightableCircle = createHighlightableLayerClass(leaflet_1.Circle, ['setRadius', 'setLatLng']);
exports.HighlightableCircleMarker = createHighlightableLayerClass(leaflet_1.CircleMarker, ['setRadius', 'setLatLng']);
exports.HighlightablePolygon = createHighlightableLayerClass(leaflet_1.Polygon, ['setLatLngs']);
exports.HighlightablePolyline = createHighlightableLayerClass(leaflet_1.Polyline, ['setLatLngs'], {
    generateStyles: styles_1.generatePolylineStyles
});
exports.HighlightableRectangle = createHighlightableLayerClass(leaflet_1.Rectangle, ['setBounds']);


/***/ }),

/***/ 695:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setLayerPane = void 0;
var leaflet_1 = __webpack_require__(453);
__webpack_require__(477);
leaflet_1.Map.addInitHook(function () {
    this.createPane("lhl-shadow");
    this.createPane("lhl-raised");
    this.createPane("lhl-raised-shadow");
    this.createPane("lhl-almost-over");
});
function setLayerPane(layer, pane) {
    if (layer.options.pane == pane)
        return;
    layer.options.pane = pane;
    if (layer["_map"])
        layer["_map"].removeLayer(layer).addLayer(layer);
}
exports.setLayerPane = setLayerPane;


/***/ }),

/***/ 299:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generatePolylineStyles = exports.generatePolygonStyles = void 0;
var utils_1 = __webpack_require__(593);
function generatePolygonStyles(options) {
    var _a, _b;
    var isBright = utils_1.getBrightness(options.color.replace(/^#/, "")) > 0.7;
    var outlineColor = (_a = options.outlineColor) !== null && _a !== void 0 ? _a : (isBright ? "#000000" : "#ffffff");
    // A black border makes the lines look thicker, thus we decrease the thickness to make them look the original size again.
    // If the user has specified a custom look for the outline, let's not do any magic.
    var lineWeight = (options.color == null && options.outlineWeight == null && isBright) ? Math.round(options.weight / 1.6) : options.weight;
    var borderWeight = (_b = options.outlineWeight) !== null && _b !== void 0 ? _b : (lineWeight * 2);
    return {
        border: __assign(__assign({}, options), { color: outlineColor, fillColor: outlineColor, weight: borderWeight, pane: options.raised ? "lhl-raised-shadow" : "lhl-shadow", fill: options.outlineFill, interactive: false }),
        main: __assign(__assign({}, options), { weight: lineWeight, pane: options.raised ? "lhl-raised" : "overlayPane" })
    };
}
exports.generatePolygonStyles = generatePolygonStyles;
function generatePolylineStyles(options) {
    var _a, _b;
    var isBright = utils_1.getBrightness(options.color.replace(/^#/, "")) > 0.7;
    var outlineColor = (_a = options.outlineColor) !== null && _a !== void 0 ? _a : (isBright ? "#000000" : "#ffffff");
    // A black border makes the lines look thicker, thus we decrease the thickness to make them look the original size again.
    // If the user has specified a custom look for the outline, let's not do any magic.
    var lineWeight = (options.color == null && options.outlineWeight == null && isBright) ? Math.round(options.weight / 1.6) : options.weight;
    var borderWeight = (_b = options.outlineWeight) !== null && _b !== void 0 ? _b : (lineWeight * 2);
    return {
        line: __assign(__assign({}, options), { weight: lineWeight, pane: options.raised ? "lhl-raised" : "overlayPane", interactive: false }),
        border: __assign(__assign({}, options), { color: outlineColor, fillColor: outlineColor, weight: borderWeight, pane: options.raised ? "lhl-raised-shadow" : "lhl-shadow", interactive: false }),
        main: {
            opacity: 0,
            weight: Math.max(20, borderWeight, lineWeight),
            pane: "lhl-almost-over"
        }
    };
}
exports.generatePolylineStyles = generatePolylineStyles;


/***/ }),

/***/ 593:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clone = exports.getBrightness = void 0;
function getBrightness(colour) {
    var r = parseInt(colour.substr(0, 2), 16) / 255;
    var g = parseInt(colour.substr(2, 2), 16) / 255;
    var b = parseInt(colour.substr(4, 2), 16) / 255;
    // See http://stackoverflow.com/a/596243/242365
    return Math.sqrt(0.241 * r * r + 0.691 * g * g + 0.068 * b * b);
}
exports.getBrightness = getBrightness;
function clone(obj) {
    // See https://stackoverflow.com/a/44782052/242365
    return Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
}
exports.clone = clone;


/***/ }),

/***/ 453:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__453__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(607);
/******/ })()
;
});
//# sourceMappingURL=L.HighlightableLayers.js.map