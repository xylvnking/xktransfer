"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/handlefiles";
exports.ids = ["pages/api/handlefiles"];
exports.modules = {

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "(api)/./pages/api/handlefiles.js":
/*!**********************************!*\
  !*** ./pages/api/handlefiles.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst multer = __webpack_require__(/*! multer */ \"multer\");\n// const upload = multer({ dest: 'uploads/' })\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\nconst upload = multer({\n    dest: \"uploads/\"\n});\n// app.use(bodyParser.urlencoded({extended: false}))\n// const thing = upload.single('upfile')\n// app.post('/api/fileanalyse', upload.single('upfile'), function(req, res, next) {\n//     console.log(req.file)\n//     res.json({\n//       name: req.file.originalname,\n//       type: req.file.mimetype,\n//       size: req.file.size\n//     })\n//     // console.log(req.body)\n//   })\nasync function handler(req, res) {\n    // const thing = JSON.parse(req.body)\n    console.log(req.body);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGFuZGxlZmlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBSUMsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDO0FBQ2pDLDhDQUE4QztBQUM5QyxJQUFJQyxVQUFVLEdBQUdELG1CQUFPLENBQUMsZ0NBQWEsQ0FBQztBQUN2QyxNQUFNRSxNQUFNLEdBQUdILE1BQU0sQ0FBQztJQUFFSSxJQUFJLEVBQUUsVUFBVTtDQUFFLENBQUM7QUFJM0Msb0RBQW9EO0FBRXBELHdDQUF3QztBQUV4QyxtRkFBbUY7QUFDL0UsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNiLHFDQUFxQztBQUNyQyxpQ0FBaUM7QUFDakMsNEJBQTRCO0FBQzVCLFNBQVM7QUFDVCwrQkFBK0I7QUFDL0IsT0FBTztBQUdJLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMscUNBQXFDO0lBQ3pDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDSSxJQUFJLENBQUM7Q0FDdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94a3RyYW5zZmVyLy4vcGFnZXMvYXBpL2hhbmRsZWZpbGVzLmpzP2FkZDEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbXVsdGVyICA9IHJlcXVpcmUoJ211bHRlcicpXG4vLyBjb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBkZXN0OiAndXBsb2Fkcy8nIH0pXG52YXIgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5jb25zdCB1cGxvYWQgPSBtdWx0ZXIoeyBkZXN0OiAndXBsb2Fkcy8nIH0pXG5cblxuXG4vLyBhcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7ZXh0ZW5kZWQ6IGZhbHNlfSkpXG5cbi8vIGNvbnN0IHRoaW5nID0gdXBsb2FkLnNpbmdsZSgndXBmaWxlJylcblxuLy8gYXBwLnBvc3QoJy9hcGkvZmlsZWFuYWx5c2UnLCB1cGxvYWQuc2luZ2xlKCd1cGZpbGUnKSwgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVxLmZpbGUpXG4gICAgLy8gICAgIHJlcy5qc29uKHtcbiAgICAgICAgLy8gICAgICAgbmFtZTogcmVxLmZpbGUub3JpZ2luYWxuYW1lLFxuICAgICAgICAvLyAgICAgICB0eXBlOiByZXEuZmlsZS5taW1ldHlwZSxcbiAgICAgICAgLy8gICAgICAgc2l6ZTogcmVxLmZpbGUuc2l6ZVxuICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlcS5ib2R5KVxuICAgICAgICAvLyAgIH0pXG4gICAgICAgIFxuICAgICAgICBcbiAgICBleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgICAgIC8vIGNvbnN0IHRoaW5nID0gSlNPTi5wYXJzZShyZXEuYm9keSlcbiAgICBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgfVxuICAiXSwibmFtZXMiOlsibXVsdGVyIiwicmVxdWlyZSIsImJvZHlQYXJzZXIiLCJ1cGxvYWQiLCJkZXN0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/handlefiles.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/handlefiles.js"));
module.exports = __webpack_exports__;

})();