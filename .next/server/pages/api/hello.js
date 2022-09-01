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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ "(api)/./firebase/clientApp.js":
/*!*******************************!*\
  !*** ./firebase/clientApp.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"provider\": () => (/* binding */ provider),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n\n\n\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app's Firebase configuration\nconst firebaseConfig = {\n    apiKey: \"AIzaSyApB5RnE1ZVuqn4aSaBzBJqcKMazgu7Fak\",\n    authDomain: \"xktransfer-30d93.firebaseapp.com\",\n    projectId: \"xktransfer-30d93\",\n    storageBucket: \"xktransfer-30d93.appspot.com\",\n    messagingSenderId: \"446072266748\",\n    appId: \"1:446072266748:web:02199dec16fee9a67f9c79\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// if (!firebase.apps.length) {\n//     firebase.initializeApp(clientCredentials);\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9maXJlYmFzZS9jbGllbnRBcHAuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXVEO0FBQ25CO0FBRVM7QUFDOEI7QUFDekI7QUFDSjtBQUV2QjtBQUNLO0FBQzVCLDREQUE0RDtBQUM1RCxpRUFBaUU7QUFFakUsd0NBQXdDO0FBQ3hDLE1BQU1PLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFQyx5Q0FBd0M7SUFDaERHLFVBQVUsRUFBRUgsa0NBQTRDO0lBQ3hESyxTQUFTLEVBQUVMLGtCQUEyQztJQUN0RE8sYUFBYSxFQUFFUCw4QkFBK0M7SUFDOURTLGlCQUFpQixFQUFFVCxjQUFvRDtJQUN2RVcsS0FBSyxFQUFFWCwyQ0FBdUM7Q0FDL0M7QUFFRCxNQUFNYSxHQUFHLEdBQUdyQiwyREFBYSxDQUFDTSxjQUFjLENBQUM7QUFFekMsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCxJQUFJO0FBR0osaUVBQWVQLG9EQUFRLEVBQUM7QUFDakIsTUFBTXVCLE9BQU8sR0FBR2pCLDREQUFVLENBQUNnQixHQUFHLENBQUMsQ0FBQztBQUNoQyxNQUFNRSxFQUFFLEdBQUduQixnRUFBWSxDQUFDaUIsR0FBRyxDQUFDLENBQUM7QUFDN0IsTUFBTUcsSUFBSSxHQUFHdkIsc0RBQU8sQ0FBQ29CLEdBQUcsQ0FBQztBQUN6QixNQUFNSSxRQUFRLEdBQUcsSUFBSXRCLDZEQUFrQixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veGt0cmFuc2Zlci8uL2ZpcmViYXNlL2NsaWVudEFwcC5qcz8xNGMxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5cbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQge2dldEF1dGgsIHNpZ25JbldpdGhQb3B1cCwgR29vZ2xlQXV0aFByb3ZpZGVyfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tIFwiZmlyZWJhc2Uvc3RvcmFnZVwiO1xuXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbi8vIFRPRE86IEFkZCBTREtzIGZvciBGaXJlYmFzZSBwcm9kdWN0cyB0aGF0IHlvdSB3YW50IHRvIHVzZVxuLy8gaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3Mvd2ViL3NldHVwI2F2YWlsYWJsZS1saWJyYXJpZXNcblxuLy8gWW91ciB3ZWIgYXBwJ3MgRmlyZWJhc2UgY29uZmlndXJhdGlvblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9NRVNTQUdJTkdfU0VOREVSX0lELFxuICBhcHBJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBQX0lELFxufTtcblxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbi8vIGlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcbi8vICAgICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNsaWVudENyZWRlbnRpYWxzKTtcbi8vIH1cblxuXG5leHBvcnQgZGVmYXVsdCBmaXJlYmFzZTtcbmV4cG9ydCBjb25zdCBzdG9yYWdlID0gZ2V0U3RvcmFnZShhcHApO1xuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKVxuZXhwb3J0IGNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpIl0sIm5hbWVzIjpbImZpcmViYXNlIiwiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJnZXRGaXJlc3RvcmUiLCJnZXRTdG9yYWdlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0ZJUkVCQVNFX0FQUF9JRCIsImFwcCIsInN0b3JhZ2UiLCJkYiIsImF1dGgiLCJwcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./firebase/clientApp.js\n");

/***/ }),

/***/ "(api)/./pages/api/hello.js":
/*!****************************!*\
  !*** ./pages/api/hello.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../firebase/clientApp */ \"(api)/./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__]);\n([_firebase_clientApp__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_auth__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\n\n\n// import \"firebase/auth\";\n\nasync function handler(req, res) {\n    console.log(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_1__.auth);\n    console.log(\"trying to create document from the server\");\n    try {\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_1__.db, \"skipWaiters\", \"createdViaApi\"), {\n            testfield: \"testValue!\"\n        });\n    } catch (error) {\n        console.error(\"Error adding document from the server: \", error);\n    }\n    const thing = \"status from api!\";\n    res.status(200).json(thing);\n// let response\n// console.log(req.method)\n// fetch('https://pokeapi.co/api/v2/pokemon/ditto')\n//       .then((res) => res.json())\n//       .then((x) => {\n//         response = x\n//         res.status(200).json(response)\n//       })\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvaGVsbG8uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFN0I7QUFDYztBQUUwQjtBQUVsQztBQUN0RCwwQkFBMEI7QUFDK0U7QUFNMUYsZUFBZWtCLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDbEIscURBQUksQ0FBQztJQUNqQmlCLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJDQUEyQyxDQUFDO0lBQ3hELElBQUk7UUFDRixNQUFNWiwwREFBTSxDQUFDRix1REFBRyxDQUFDTCxtREFBRSxFQUFFLGFBQWEsRUFBRSxlQUFlLENBQUMsRUFBRTtZQUNsRG9CLFNBQVMsRUFBRSxZQUFZO1NBQzFCLENBQUMsQ0FBQztLQUNOLENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ1pILE9BQU8sQ0FBQ0csS0FBSyxDQUFDLHlDQUF5QyxFQUFFQSxLQUFLLENBQUMsQ0FBQztLQUNuRTtJQUNELE1BQU1DLEtBQUssR0FBRyxrQkFBa0I7SUFDaENMLEdBQUcsQ0FBQ00sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNGLEtBQUssQ0FBQztBQUszQixlQUFlO0FBQ2YsMEJBQTBCO0FBQzFCLG1EQUFtRDtBQUNuRCxtQ0FBbUM7QUFDbkMsdUJBQXVCO0FBQ3ZCLHVCQUF1QjtBQUN2Qix5Q0FBeUM7QUFDekMsV0FBVztDQUNWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8veGt0cmFuc2Zlci8uL3BhZ2VzL2FwaS9oZWxsby5qcz8xZjc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5cbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZGIsIGF1dGgsIHByb3ZpZGVyIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvY2xpZW50QXBwJztcblxuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jLCBkb2MsIGdldERvYywgc2V0RG9jLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7IFxuXG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIlxuLy8gaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCwgc2lnbkluV2l0aFBvcHVwLCBHb29nbGVBdXRoUHJvdmlkZXIsIHNpZ25PdXQsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zb2xlLmxvZyhhdXRoKVxuICBjb25zb2xlLmxvZygndHJ5aW5nIHRvIGNyZWF0ZSBkb2N1bWVudCBmcm9tIHRoZSBzZXJ2ZXInKVxuICB0cnkgeyAvLyBjcmVhdGUgYSBkb2N1bWVudCBpbiBhIGNvbGxlY3Rpb24gd2l0aCB1c2VyJ3MgdWlkIHdobydzIGV4aXN0ZW5jZSB3aWxsIGJlIHZhbGlkYXRlZCBvbiBzaWduIGluIHRvIGNoZWNrIGlmIHRoZXkncmUgYSBuZXcgdXNlciBvciBub3RcbiAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCAnc2tpcFdhaXRlcnMnLCAnY3JlYXRlZFZpYUFwaScpLCB7XG4gICAgICAgIHRlc3RmaWVsZDogJ3Rlc3RWYWx1ZSEnXG4gICAgfSk7XG59IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQgZnJvbSB0aGUgc2VydmVyOiBcIiwgZXJyb3IpO1xufVxuY29uc3QgdGhpbmcgPSAnc3RhdHVzIGZyb20gYXBpISdcbnJlcy5zdGF0dXMoMjAwKS5qc29uKHRoaW5nKVxuXG5cblxuXG4vLyBsZXQgcmVzcG9uc2Vcbi8vIGNvbnNvbGUubG9nKHJlcS5tZXRob2QpXG4vLyBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uL2RpdHRvJylcbi8vICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4vLyAgICAgICAudGhlbigoeCkgPT4ge1xuLy8gICAgICAgICByZXNwb25zZSA9IHhcbi8vICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24ocmVzcG9uc2UpXG4vLyAgICAgICB9KVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkb2MiLCJnZXREb2MiLCJzZXREb2MiLCJ1cGRhdGVEb2MiLCJ1c2VBdXRoU3RhdGUiLCJnZXRBdXRoIiwic2lnbkluV2l0aFBvcHVwIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwic2lnbk91dCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidGVzdGZpZWxkIiwiZXJyb3IiLCJ0aGluZyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/hello.js\n");

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