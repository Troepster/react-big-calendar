'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var ResourceHeader = function ResourceHeader(_ref) {
  var label = _ref.label,
    resource = _ref.resource
  return _react.default.createElement(
    'div',
    {
      className: 'rbc-resource-header',
      onClick:
        resource.onClick !== null && typeof resource.onClick === 'function'
          ? resource.onClick
          : null,
    },
    label
  )
}

ResourceHeader.propTypes =
  process.env.NODE_ENV !== 'production'
    ? {
        label: _propTypes.default.node,
        index: _propTypes.default.number,
        resource: _propTypes.default.object,
      }
    : {}
var _default = ResourceHeader
exports.default = _default
module.exports = exports['default']
