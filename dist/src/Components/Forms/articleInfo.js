"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./../../App.css");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// Sticky Header
(0, _jquery.default)(window).scroll(function () {
  if ((0, _jquery.default)(window).scrollTop() > 100) {
    (0, _jquery.default)('.main_h').addClass('sticky');
  } else {
    (0, _jquery.default)('.main_h').removeClass('sticky');
  }
}); // Mobile Navigation

(0, _jquery.default)('.mobile-toggle').click(function () {
  if ((0, _jquery.default)('.main_h').hasClass('open-nav')) {
    (0, _jquery.default)('.main_h').removeClass('open-nav');
  } else {
    (0, _jquery.default)('.main_h').addClass('open-nav');
  }
});
(0, _jquery.default)('.main_h li a').click(function () {
  if ((0, _jquery.default)('.main_h').hasClass('open-nav')) {
    (0, _jquery.default)('.navigation').removeClass('open-nav');
    (0, _jquery.default)('.main_h').removeClass('open-nav');
  }
}); // navigation scroll lijepo radi materem

(0, _jquery.default)('nav a').click(function (event) {
  var id = (0, _jquery.default)(this).attr("href");
  var offset = 70;
  var target = (0, _jquery.default)(id).offset().top - offset;
  (0, _jquery.default)('html, body').animate({
    scrollTop: target
  }, 500);
  event.preventDefault();
});

var ArticleInfo = /*#__PURE__*/function (_Component) {
  _inherits(ArticleInfo, _Component);

  var _super = _createSuper(ArticleInfo);

  function ArticleInfo() {
    _classCallCheck(this, ArticleInfo);

    return _super.apply(this, arguments);
  }

  _createClass(ArticleInfo, [{
    key: "formatText",
    value: function formatText(text) {
      text = text.replace(new RegExp('\r?\n', 'g'), '<br />');
      return text;
    }
  }, {
    key: "render",
    value: function render() {
      var content = this.formatText(this.props.item.content);
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "hero",
        style: {
          background: 'url(' + "".concat(this.props.item.image) + ') no-repeat center center fixed'
        }
      }, /*#__PURE__*/_react.default.createElement("h1", {
        className: "estiloH"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "colorcito"
      }, "Emotionner"), /*#__PURE__*/_react.default.createElement("br", null), this.props.item.title)), /*#__PURE__*/_react.default.createElement("div", {
        className: "row-info content"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "titletry d-flex justify-content-center",
        style: {
          color: '#107385'
        }
      }, this.props.item.title), /*#__PURE__*/_react.default.createElement("p", {
        className: "info",
        style: {
          whiteSpace: "pre-line"
        }
      }, this.props.item.content)));
    }
  }]);

  return ArticleInfo;
}(_react.Component);

var _default = ArticleInfo;
exports.default = _default;

//# sourceMappingURL=articleInfo.js.map