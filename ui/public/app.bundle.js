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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ItemList_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemList.jsx */ \"./src/ItemList.jsx\");\n/* eslint-disable import/extensions */\n\n/* eslint-disable react/button-has-type */\n\n/* eslint-disable react/destructuring-assignment */\n\n/* eslint \"react/react-in-jsx-scope\": \"off\" */\n\n/* globals React ReactDOM PropTypes */\n\n/* eslint \"react/jsx-no-undef\": \"off\" */\n\n/* eslint \"react/no-multi-comp\": \"off\" */\n\n/* eslint \"no-alert\": \"off\" */\n// eslint-disable-next-line react/prefer-stateless-function\n\nvar element = /*#__PURE__*/React.createElement(_ItemList_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null);\nReactDOM.render(element, document.getElementById('contents'));\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/ItemAdd.jsx":
/*!*************************!*\
  !*** ./src/ItemAdd.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemAdd; });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n// class to add items\n\n/* eslint-disable no-unused-vars */\n\n/* eslint-disable react/destructuring-assignment */\n\n/* eslint-disable react/button-has-type */\n\n/* globals React PropTypes */\nvar ItemAdd = /*#__PURE__*/function (_React$Component) {\n  _inherits(ItemAdd, _React$Component);\n\n  var _super = _createSuper(ItemAdd);\n\n  // simple constructor, sets price state to blank\n  function ItemAdd() {\n    var _this;\n\n    _classCallCheck(this, ItemAdd);\n\n    _this = _super.call(this);\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    _this.state = {\n      price: ''\n    };\n    return _this;\n  } // on submit\n\n\n  _createClass(ItemAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var form = document.forms.itemAdd;\n      var item = {\n        name: form.name.value,\n        category: form.category.value,\n        price: this.state.price,\n        image: form.image.value\n      }; // reset values\n\n      var createItem = this.props.createItem;\n      createItem(item);\n      form.name.value = '';\n      this.setState({\n        price: ''\n      });\n      form.category.value = '';\n      form.image.value = '';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return /*#__PURE__*/React.createElement(\"form\", {\n        name: \"itemAdd\",\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"category\"\n      }, \"Category\", /*#__PURE__*/React.createElement(\"select\", {\n        name: \"category\"\n      }, /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Shirts\"\n      }, \"Shirts\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Jeans\"\n      }, \"Jeans\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Jackets\"\n      }, \"Jackets\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Sweaters\"\n      }, \"Sweaters\"), /*#__PURE__*/React.createElement(\"option\", {\n        value: \"Accessories\"\n      }, \"Accessories\"))), /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"price\"\n      }, \"Price Per Unit\", /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"price\",\n        value: \"$\".concat(this.state.price),\n        onChange: function onChange(e) {\n          var newValue = e.target.value.split('$')[1] || '';\n\n          _this2.setState({\n            price: newValue\n          });\n        }\n      })), /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"name\"\n      }, \"Product Name\", /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"name\"\n      })), /*#__PURE__*/React.createElement(\"label\", {\n        htmlFor: \"image\"\n      }, \"Image URL\", /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"image\"\n      })), /*#__PURE__*/React.createElement(\"button\", null, \"Add Product\"));\n    }\n  }]);\n\n  return ItemAdd;\n}(React.Component);\n\n\n\n//# sourceURL=webpack:///./src/ItemAdd.jsx?");

/***/ }),

/***/ "./src/ItemList.jsx":
/*!**************************!*\
  !*** ./src/ItemList.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemList; });\n/* harmony import */ var _ItemTable_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ItemTable.jsx */ \"./src/ItemTable.jsx\");\n/* harmony import */ var _ItemAdd_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ItemAdd.jsx */ \"./src/ItemAdd.jsx\");\n/* harmony import */ var _graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphQLFetch.js */ \"./src/graphQLFetch.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n/* globals React */\n\n/* eslint \"react/jsx-no-undef\": \"off\" */\n// import ItemFilter from './ItemFilter.jsx';\n\n\n\n\n// list class\nvar ItemList = /*#__PURE__*/function (_React$Component) {\n  _inherits(ItemList, _React$Component);\n\n  var _super = _createSuper(ItemList);\n\n  function ItemList() {\n    var _this;\n\n    _classCallCheck(this, ItemList);\n\n    _this = _super.call(this);\n    _this.state = {\n      items: []\n    };\n    _this.createItem = _this.createItem.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(ItemList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"loadData\",\n    value: function () {\n      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                query = \"query {\\n      productList {\\n        id category name price image\\n      }\\n    }\";\n                _context.next = 3;\n                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(query);\n\n              case 3:\n                data = _context.sent;\n\n                if (data) {\n                  this.setState({\n                    items: data.productList\n                  });\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadData() {\n        return _loadData.apply(this, arguments);\n      }\n\n      return loadData;\n    }() // create item and add to graphql\n\n  }, {\n    key: \"createItem\",\n    value: function () {\n      var _createItem = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(item) {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                query = \"mutation {\\n        productAdd(product:{\\n            name: \\\"\".concat(item.name, \"\\\",\\n            category: \").concat(item.category, \",\\n            price: \").concat(item.price, \",\\n            image: \\\"\").concat(item.image, \"\\\", \\n        }) {\\n                id\\n            }\\n        }\");\n                _context2.next = 3;\n                return Object(_graphQLFetch_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(query, {\n                  item: item\n                });\n\n              case 3:\n                data = _context2.sent;\n\n                if (data) {\n                  this.loadData();\n                }\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function createItem(_x) {\n        return _createItem.apply(this, arguments);\n      }\n\n      return createItem;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      var items = this.state.items;\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"My Company Inventory\"), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(_ItemTable_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        items: items\n      }), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(_ItemAdd_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        createItem: this.createItem\n      }));\n    }\n  }]);\n\n  return ItemList;\n}(React.Component);\n\n\n\n//# sourceURL=webpack:///./src/ItemList.jsx?");

/***/ }),

/***/ "./src/ItemTable.jsx":
/*!***************************!*\
  !*** ./src/ItemTable.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ItemTable; });\n/* globals React */\nfunction ItemRow(_ref) {\n  var item = _ref.item;\n  return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, item.name), /*#__PURE__*/React.createElement(\"td\", null, \"$\".concat(item.price)), /*#__PURE__*/React.createElement(\"td\", null, item.category), /*#__PURE__*/React.createElement(\"td\", null, /*#__PURE__*/React.createElement(\"a\", {\n    href: item.image,\n    target: \"_blank\",\n    rel: \"noreferrer\"\n  }, \"View\")));\n}\n\nfunction ItemTable(_ref2) {\n  var items = _ref2.items;\n  var itemRows = items.map(function (item) {\n    return /*#__PURE__*/React.createElement(ItemRow, {\n      key: item.id,\n      item: item\n    });\n  });\n  return /*#__PURE__*/React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"Product Name\"), /*#__PURE__*/React.createElement(\"th\", null, \"Price\"), /*#__PURE__*/React.createElement(\"th\", null, \"Category\"), /*#__PURE__*/React.createElement(\"th\", null, \"Image\"))), /*#__PURE__*/React.createElement(\"tbody\", null, itemRows));\n}\n\n//# sourceURL=webpack:///./src/ItemTable.jsx?");

/***/ }),

/***/ "./src/graphQLFetch.js":
/*!*****************************!*\
  !*** ./src/graphQLFetch.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return graphQLFetch; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction graphQLFetch(_x) {\n  return _graphQLFetch.apply(this, arguments);\n}\n\nfunction _graphQLFetch() {\n  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {\n    var variables,\n        response,\n        body,\n        result,\n        error,\n        details,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};\n            _context.prev = 1;\n            _context.next = 4;\n            return fetch(window.ENV.UI_API_ENDPOINT, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify({\n                query: query,\n                variables: variables\n              })\n            });\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.text();\n\n          case 7:\n            body = _context.sent;\n            result = JSON.parse(body);\n\n            if (result.errors) {\n              error = result.errors[0];\n\n              if (error.extensions.code === 'BAD_USER_INPUT') {\n                details = error.extensions.exception.errors.join('\\n ');\n                alert(\"\".concat(error.message, \":\\n \").concat(details));\n              } else {\n                alert(\"\".concat(error.extensions.code, \": \").concat(error.message));\n              }\n            }\n\n            return _context.abrupt(\"return\", result.data);\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](1);\n            alert(\"Error in sending data to server: \".concat(_context.t0.message));\n            return _context.abrupt(\"return\", null);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 13]]);\n  }));\n  return _graphQLFetch.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/graphQLFetch.js?");

/***/ })

/******/ });