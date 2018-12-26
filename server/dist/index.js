'use strict';

var _src = require('./src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 5000;

_src2.default.listen(port, function () {
  return console.log('Listening on port ' + port);
});