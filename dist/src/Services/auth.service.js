"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * API Calls methods with AXIOS

 */

/**

 * API URL

 */
var API_URL = "https://emotionner.herokuapp.com/"; //const API_URL = "http://localhost:8080/";

/**

 * Registration method

 * @param {*} username 

 * @param {*} email 

 * @param {*} password 

 */

var register = function register(name, lastname, email, birthdate, ocupation, premium, password) {
  return _axios.default.post(API_URL + "users/signup", {
    name: name,
    lastname: lastname,
    email: email,
    birthdate: birthdate,
    ocupation: ocupation,
    premium: premium,
    password: password
  });
};
/**

 * Login method

 * @param {*} username 

 * @param {*} password 

 * @returns userdata

 */


var login = function login(email, password) {
  return _axios.default.post(API_URL + "users/signin", {
    email: email,
    password: password
  }).then(function (response) {
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  });
};
/**

 * Logout method

 */


var logout = function logout() {
  localStorage.removeItem("user");
};
/**

 * Get current user method

 */


var getCurrentUser = function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
};

var isAuth = function isAuth(user) {
  if (user) {
    return true;
  } else {
    return false;
  }
};

var _default = {
  register: register,
  login: login,
  logout: logout,
  getCurrentUser: getCurrentUser,
  isAuth: isAuth
};
exports.default = _default;

//# sourceMappingURL=auth.service.js.map