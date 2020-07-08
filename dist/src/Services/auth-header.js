"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = authHeader;

/**

 * Header for authentications in the backend

 */
function authHeader() {
  var user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    return {
      'x-access-token': user.accessToken
    };
  } else {
    return {};
  }
}

//# sourceMappingURL=auth-header.js.map