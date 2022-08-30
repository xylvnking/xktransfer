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
exports.id = "pages/api/hello";
exports.ids = ["pages/api/hello"];
exports.modules = {

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n// so even though\nfunction handler(req, res) {\n    let response;\n    console.log(req.method);\n    fetch(\"https://pokeapi.co/api/v2/pokemon/ditto\").then((res)=>res.json()).then((x)=>{\n        response = x;\n        res.status(200).json(response);\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZFQUE2RTtBQUU3RSxpQkFBaUI7QUFFRixTQUFTQSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLElBQUlDLFFBQVE7SUFDWkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUcsQ0FBQ0ssTUFBTSxDQUFDO0lBQ3ZCQyxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FFekNDLElBQUksQ0FBQyxDQUFDTixHQUFHLEdBQUtBLEdBQUcsQ0FBQ08sSUFBSSxFQUFFLENBQUMsQ0FDekJELElBQUksQ0FBQyxDQUFDRSxDQUFDLEdBQUs7UUFDWFAsUUFBUSxHQUFHTyxDQUFDO1FBQ1pSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDRixJQUFJLENBQUNOLFFBQVEsQ0FBQztLQUMvQixDQUFDO0NBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly94a3RyYW5zZmVyLy4vcGFnZXMvYXBpL2hlbGxvLmpzPzFmNzQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cblxuLy8gc28gZXZlbiB0aG91Z2hcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBsZXQgcmVzcG9uc2VcbiAgY29uc29sZS5sb2cocmVxLm1ldGhvZClcbiAgZmV0Y2goJ2h0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi9kaXR0bycpXG4gIFxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoeCkgPT4ge1xuICAgICAgICAgIHJlc3BvbnNlID0geFxuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlKVxuICAgICAgICB9KVxufVxuIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJtZXRob2QiLCJmZXRjaCIsInRoZW4iLCJqc29uIiwieCIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/hello.js"));
module.exports = __webpack_exports__;

})();