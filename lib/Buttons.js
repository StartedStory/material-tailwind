"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var filledBgColors = {
  blueGray: 'bg-blue-gray-500',
  gray: 'bg-gray-500',
  brown: 'bg-brown-500',
  deepOrange: 'bg-deep-orange-500',
  orange: 'bg-orange-500',
  amber: 'bg-amber-500',
  yellow: 'bg-yellow-600',
  lime: 'bg-lime-500',
  lightGreen: 'bg-light-green-500',
  green: 'bg-green-500',
  teal: 'bg-teal-500',
  cyan: 'bg-cyan-500',
  lightBlue: 'bg-light-blue-500',
  blue: 'bg-blue-500',
  indigo: 'bg-indigo-500',
  deepPurple: 'bg-deep-purple-500',
  purple: 'bg-purple-500',
  pink: 'bg-pink-500',
  red: 'bg-red-500'
};
var filledBgHoverColors = {
  blueGray: 'bg-blue-gray-700',
  gray: 'bg-gray-700',
  brown: 'bg-brown-700',
  deepOrange: 'bg-deep-orange-700',
  orange: 'bg-orange-700',
  amber: 'bg-amber-700',
  yellow: 'bg-yellow-700',
  lime: 'bg-lime-700',
  lightGreen: 'bg-light-green-700',
  green: 'bg-green-700',
  teal: 'bg-teal-700',
  cyan: 'bg-cyan-700',
  lightBlue: 'bg-light-blue-700',
  blue: 'bg-blue-700',
  indigo: 'bg-indigo-700',
  deepPurple: 'bg-deep-purple-700',
  purple: 'bg-purple-700',
  pink: 'bg-pink-700',
  red: 'bg-red-700'
};
var filledBgFocusColors = {
  blueGray: 'bg-blue-gray-400',
  gray: 'bg-gray-400',
  brown: 'bg-brown-400',
  deepOrange: 'bg-deep-orange-400',
  orange: 'bg-orange-400',
  amber: 'bg-amber-400',
  yellow: 'bg-yellow-500',
  lime: 'bg-lime-400',
  lightGreen: 'bg-light-green-400',
  green: 'bg-green-400',
  teal: 'bg-teal-400',
  cyan: 'bg-cyan-400',
  lightBlue: 'bg-light-blue-400',
  blue: 'bg-blue-400',
  indigo: 'bg-indigo-400',
  deepPurple: 'bg-deep-purple-400',
  purple: 'bg-purple-400',
  pink: 'bg-pink-400',
  red: 'bg-red-400'
};
var filledBgActiveColors = {
  blueGray: 'bg-blue-gray-800',
  gray: 'bg-gray-800',
  brown: 'bg-brown-800',
  deepOrange: 'bg-deep-orange-800',
  orange: 'bg-orange-800',
  amber: 'bg-amber-800',
  yellow: 'bg-yellow-800',
  lime: 'bg-lime-800',
  lightGreen: 'bg-light-green-800',
  green: 'bg-green-800',
  teal: 'bg-teal-800',
  cyan: 'bg-cyan-800',
  lightBlue: 'bg-light-blue-800',
  blue: 'bg-blue-800',
  indigo: 'bg-indigo-800',
  deepPurple: 'bg-deep-purple-800',
  purple: 'bg-purple-800',
  pink: 'bg-pink-800',
  red: 'bg-red-800'
};
var outlineTextColors = {
  blueGray: 'text-blue-gray-500',
  gray: 'text-gray-500',
  brown: 'text-brown-500',
  deepOrange: 'text-deep-orange-500',
  orange: 'text-orange-500',
  amber: 'text-amber-500',
  yellow: 'text-yellow-600',
  lime: 'text-lime-500',
  lightGreen: 'text-light-green-500',
  green: 'text-green-500',
  teal: 'text-teal-500',
  cyan: 'text-cyan-500',
  lightBlue: 'text-light-blue-500',
  blue: 'text-blue-500',
  indigo: 'text-indigo-500',
  deepPurple: 'text-deep-purple-500',
  purple: 'text-purple-500',
  pink: 'text-pink-500',
  red: 'text-red-500'
};
var outlineBorderColors = {
  blueGray: 'border-blue-gray-500',
  gray: 'border-gray-500',
  brown: 'border-brown-500',
  deepOrange: 'border-deep-orange-500',
  orange: 'border-orange-500',
  amber: 'border-amber-500',
  yellow: 'border-yellow-600',
  lime: 'border-lime-500',
  lightGreen: 'border-light-green-500',
  green: 'border-green-500',
  teal: 'border-teal-500',
  cyan: 'border-cyan-500',
  lightBlue: 'border-light-blue-500',
  blue: 'border-blue-500',
  indigo: 'border-indigo-500',
  deepPurple: 'border-deep-purple-500',
  purple: 'border-purple-500',
  pink: 'border-pink-500',
  red: 'border-red-500'
};
var outlineBgHoverColors = {
  blueGray: 'bg-blue-gray-50',
  gray: 'bg-gray-50',
  brown: 'bg-brown-50',
  deepOrange: 'bg-deep-orange-50',
  orange: 'bg-orange-50',
  amber: 'bg-amber-50',
  yellow: 'bg-yellow-50',
  lime: 'bg-lime-50',
  lightGreen: 'bg-light-green-50',
  green: 'bg-green-50',
  teal: 'bg-teal-50',
  cyan: 'bg-cyan-50',
  lightBlue: 'bg-light-blue-50',
  blue: 'bg-blue-50',
  indigo: 'bg-indigo-50',
  deepPurple: 'bg-deep-purple-50',
  purple: 'bg-purple-50',
  pink: 'bg-pink-50',
  red: 'bg-red-50'
};
var outlineBorderHoverColors = {
  blueGray: 'border-blue-gray-700',
  gray: 'border-gray-700',
  brown: 'border-brown-700',
  deepOrange: 'border-deep-orange-700',
  orange: 'border-orange-700',
  amber: 'border-amber-700',
  yellow: 'border-yellow-700',
  lime: 'border-lime-700',
  lightGreen: 'border-light-green-700',
  green: 'border-green-700',
  teal: 'border-teal-700',
  cyan: 'border-cyan-700',
  lightBlue: 'border-light-blue-700',
  blue: 'border-blue-700',
  indigo: 'border-indigo-700',
  deepPurple: 'border-deep-purple-700',
  purple: 'border-purple-700',
  pink: 'border-pink-700',
  red: 'border-red-700'
};
var outlineTextHoverColors = {
  blueGray: 'text-blue-gray-700',
  gray: 'text-gray-700',
  brown: 'text-brown-700',
  deepOrange: 'text-deep-orange-700',
  orange: 'text-orange-700',
  amber: 'text-amber-700',
  yellow: 'text-yellow-700',
  lime: 'text-lime-700',
  lightGreen: 'text-light-green-700',
  green: 'text-green-700',
  teal: 'text-teal-700',
  cyan: 'text-cyan-700',
  lightBlue: 'text-light-blue-700',
  blue: 'text-blue-700',
  indigo: 'text-indigo-700',
  deepPurple: 'text-deep-purple-700',
  purple: 'text-purple-700',
  pink: 'text-pink-700',
  red: 'text-red-700'
};
var outlineBgActiveColors = {
  blueGray: 'bg-blue-gray-100',
  gray: 'bg-gray-100',
  brown: 'bg-brown-100',
  deepOrange: 'bg-deep-orange-100',
  orange: 'bg-orange-100',
  amber: 'bg-amber-100',
  yellow: 'bg-yellow-100',
  lime: 'bg-lime-100',
  lightGreen: 'bg-light-green-100',
  green: 'bg-green-100',
  teal: 'bg-teal-100',
  cyan: 'bg-cyan-100',
  lightBlue: 'bg-light-blue-100',
  blue: 'bg-blue-100',
  indigo: 'bg-indigo-100',
  deepPurple: 'bg-deep-purple-100',
  purple: 'bg-purple-100',
  pink: 'bg-pink-100',
  red: 'bg-red-100'
};
var Buttons = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
      color = _ref.color,
      buttonType = _ref.buttonType,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'regular' : _ref$size,
      rounded = _ref.rounded,
      iconOnly = _ref.iconOnly,
      rest = _objectWithoutProperties(_ref, ["children", "color", "buttonType", "size", "rounded", "iconOnly"]);

  var classes = [];
  rounded = rounded ? 'rounded-full' : 'rounded';
  var sharedClasses = ['flex', 'items-center', 'gap-1', 'rounded-lg', 'font-bold', 'outline-none', 'uppercase', 'tracking-wider', 'focus:outline-none', 'focus:shadow-none', 'transition-all', 'duration-300', rounded];
  var buttonFilled = ['text-white', 'shadow-md', 'hover:shadow-xl', 'focus:text-white', filledBgColors[color], "hover:".concat(filledBgHoverColors[color]), "focus:".concat(filledBgFocusColors[color]), "active:".concat(filledBgActiveColors[color])];
  var buttonOutline = ['bg-transparent', 'border', 'border-solid', 'shadow-none', outlineTextColors[color], outlineBorderColors[color], "hover:".concat(outlineBgHoverColors[color]), "hover:".concat(outlineBorderHoverColors[color]), "hover:".concat(outlineTextHoverColors[color]), "focus:".concat(outlineBgHoverColors[color]), "active:".concat(outlineBgActiveColors[color])];
  var buttonLink = ["bg-transparent", outlineTextColors[color], "hover:".concat(outlineBgHoverColors[color]), "hover:".concat(outlineTextHoverColors[color]), "focus:".concat(outlineBgHoverColors[color]), "active:".concat(outlineBgActiveColors[color])];
  var buttonSM = [].concat(sharedClasses, [iconOnly ? 'w-8 h-8 p-0 grid place-items-center' : 'py-1.5 px-4', 'text-xs', 'leading-normal']);
  var buttonRegular = [].concat(sharedClasses, [iconOnly ? 'w-10 h-10 p-0 grid place-items-center' : 'py-2.5 px-6', 'text-xs', 'leading-normal']);
  var buttonLG = [].concat(sharedClasses, [iconOnly ? 'w-12 h-12 p-0 grid place-items-center' : 'py-3 px-7', 'text-sm', 'leading-relaxed']);

  if (size === 'sm') {
    var _classes;

    (_classes = classes).push.apply(_classes, _toConsumableArray(buttonSM));
  } else if (size === 'lg') {
    var _classes2;

    (_classes2 = classes).push.apply(_classes2, _toConsumableArray(buttonLG));
  } else {
    var _classes3;

    (_classes3 = classes).push.apply(_classes3, _toConsumableArray(buttonRegular));
  }

  if (buttonType === 'outline') {
    var _classes4;

    (_classes4 = classes).push.apply(_classes4, buttonOutline);
  } else if (buttonType === 'link') {
    var _classes5;

    (_classes5 = classes).push.apply(_classes5, buttonLink);
  } else {
    var _classes6;

    (_classes6 = classes).push.apply(_classes6, buttonFilled);
  }

  classes = classes.join(' ');
  return /*#__PURE__*/_react.default.createElement("button", _extends({}, rest, {
    className: classes,
    ref: ref
  }), children);
});
Buttons.propTypes = {
  children: _propTypes.default.node.isRequired,
  color: _propTypes.default.string.isRequired,
  buttonType: _propTypes.default.string,
  size: _propTypes.default.string,
  rounded: _propTypes.default.bool
};
var _default = Buttons;
exports.default = _default;