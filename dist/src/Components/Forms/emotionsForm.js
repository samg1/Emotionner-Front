"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("react-bootstrap/Modal"));

require("font-awesome/css/font-awesome.min.css");

var _reactstrap = require("reactstrap");

var _all = _interopRequireDefault(require("../Forms/all"));

require("./../../App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EmotionsForm = function EmotionsForm() {
  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      isOpen = _React$useState2[0],
      setIsOpen = _React$useState2[1];

  var _useState = (0, _react.useState)(""),
      _useState2 = _slicedToArray(_useState, 2),
      emotion = _useState2[0],
      setEmotion = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      description = _useState4[0],
      setDescription = _useState4[1];

  var showModal = function showModal() {
    setIsOpen(true);
  };

  var hideModal = function hideModal() {
    setIsOpen(false);
  };

  var onChangeEmotion = function onChangeEmotion(e) {
    var emotion = e;
    setEmotion(emotion);
    console.log(emotion);
  };

  var onChangeDescription = function onChangeDescription(e) {
    var description = e.target.value;
    setDescription(description);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "buttonArrow fit-to-content"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "link",
    onClick: showModal,
    style: {
      textTransform: 'uppercase'
    }
  }, "\xBFC\xD3MO TE SIENTES HOY?")), /*#__PURE__*/_react.default.createElement(_Modal.default, {
    show: isOpen,
    onHide: hideModal
  }, /*#__PURE__*/_react.default.createElement(_Modal.default.Header, null, /*#__PURE__*/_react.default.createElement(_Modal.default.Title, {
    style: ({
      letterSpacing: '4px'
    }, {
      fontWeight: 'lighter'
    })
  }, "SELECCIONA UNA EMOCI\xD3N")), /*#__PURE__*/_react.default.createElement(_Modal.default.Body, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "styleLetters"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Form, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "try"
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    form: true
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "d-flex justify-content-center"
  }, "Incre\xEDble"), /*#__PURE__*/_react.default.createElement("a", {
    className: " d-flex justify-content-center",
    role: "button"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "increible far fa-grin-stars"
  })))), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "d-flex justify-content-center"
  }, "Bien"), /*#__PURE__*/_react.default.createElement("a", {
    className: " d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "bien far fa-smile"
  })))), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "d-flex justify-content-center"
  }, "Triste"), /*#__PURE__*/_react.default.createElement("a", {
    className: "triste d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "triste far fa-sad-tear"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    form: true
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "d-flex justify-content-center"
  }, "Enojado"), /*#__PURE__*/_react.default.createElement("a", {
    className: " d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "enojado far fa-angry"
  })))), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "d-flex justify-content-center"
  }, "Ansioso"), /*#__PURE__*/_react.default.createElement("a", {
    className: " d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "ansioso far fa-grimace"
  })))), /*#__PURE__*/_react.default.createElement(_reactstrap.Col, {
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_reactstrap.FormGroup, null, /*#__PURE__*/_react.default.createElement("p", {
    className: "d-flex justify-content-center"
  }, "Estresado"), /*#__PURE__*/_react.default.createElement("a", {
    className: " d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "estresado far fa-tired"
  }))))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '20px'
    }
  }), /*#__PURE__*/_react.default.createElement(_reactstrap.Row, {
    form: true,
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("p", {
    htmlFor: "exampleText"
  }, "\xBFQuieres expresarte mejor?"), /*#__PURE__*/_react.default.createElement(_reactstrap.Input, {
    type: "text-area",
    name: "description",
    id: "description",
    placeholder: "Descripci\xF3n",
    value: description,
    onChange: onChangeDescription,
    required: true
  })))))), /*#__PURE__*/_react.default.createElement(_Modal.default.Footer, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "btn-horizontal"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Listo"))))));
};

var _default = EmotionsForm;
exports.default = _default;

//# sourceMappingURL=emotionsForm.js.map