"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Auth */ \"./pages/Components/Auth.js\");\n/* harmony import */ var _Components_Admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Admin */ \"./pages/Components/Admin.js\");\n/* harmony import */ var _Components_Client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Client */ \"./pages/Components/Client.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n// import firebase, {auth, db, provider} from '../firebase/clientApp'\n// import { auth } from '../firebase/clientApp'\nvar adminId = \"Ptm0rNIcPOcs8RubkivXx7JUsia2\";\nfunction Home() {\n    _s();\n    // const createCollection = async () => {\n    //   try {\n    //     const docRef = await addDoc(collection(db, \"users\"), {\n    //       first: \"Ada\",\n    //       last: \"Lovelace\",\n    //       born: 1815\n    //     });\n    //     console.log(\"Document written with ID: \", docRef.id);\n    //   } catch (e) {\n    //     console.error(\"Error adding document: \", e);\n    //   }\n    // }\n    // // createCollection()\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), isLoading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_10__.auth), 3), user = ref2[0], userAuthIsLoading = ref2[1], userAuthError = ref2[2];\n    // console.log(user.uid)\n    // console.log(user)\n    // console.log(`Loading: ${userAuthIsLoading} || Current user: ${user}`)\n    // console.log(user)\n    // useEffect(() => {\n    //   setLoading(true)\n    //   // fetch('/api/hello').then((res) => res.json() )\n    //   //   .then((x) => {\n    //   //     setData(x)\n    //   //     setLoading(false)\n    //   //   })\n    //   fetch('/api/hello').then((response) => {\n    //     // console.log(...response.headers)\n    //     // console.log(response)\n    //     response.json().then((x) => {\n    //       // console.log(x)\n    //       setData(x)\n    //       setLoading(false)\n    //     })\n    //   })\n    // }, [])\n    var fileUpload = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"yes\");\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // fetch('/api/handlefiles').then((res) => res.json() )\n        //   .then((x) => {\n        //     setData(x)\n        //     setLoading(false)\n        //   })\n        }));\n        return function fileUpload() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"xkTransfer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.ico?v=1.1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().nav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: user.photoURL,\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().userIcon),\n                    alt: \"User Photo\",\n                    width: \"100%\",\n                    height: \"100%\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                    lineNumber: 99,\n                    columnNumber: 12\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Client__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                    lineNumber: 126,\n                    columnNumber: 10\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().footer)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"jwTEtw40KVeM/0T8bSx9ZqAgVw4=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFL0Isd0VBQWE7Ozs7O29CQUt2Qjs7Ozs7O1lBQ0wsQ0FDUDtDQUNGO0dBbkh1Qm1CLElBQUk7O1FBcUJ1QlosbUVBQVk7OztBQXJCdkNZLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQXV0aCBmcm9tICcuL0NvbXBvbmVudHMvQXV0aCdcbmltcG9ydCBBZG1pbiBmcm9tICcuL0NvbXBvbmVudHMvQWRtaW4nXG5pbXBvcnQgQ2xpZW50IGZyb20gJy4vQ29tcG9uZW50cy9DbGllbnQnXG5cblxuaW1wb3J0IHt1c2VBdXRoU3RhdGV9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCJcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjsgXG5cblxuaW1wb3J0IGZpcmViYXNlLCB7YXV0aCwgZGIsIHByb3ZpZGVyfSBmcm9tICcuLi9maXJlYmFzZS9jbGllbnRBcHAnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbi8vIGltcG9ydCBmaXJlYmFzZSwge2F1dGgsIGRiLCBwcm92aWRlcn0gZnJvbSAnLi4vZmlyZWJhc2UvY2xpZW50QXBwJ1xuXG4vLyBpbXBvcnQgeyBhdXRoIH0gZnJvbSAnLi4vZmlyZWJhc2UvY2xpZW50QXBwJ1xuXG5jb25zdCBhZG1pbklkID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQURNSU5fVUlEXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgXG4gIC8vIGNvbnN0IGNyZWF0ZUNvbGxlY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIC8vICAgdHJ5IHtcbiAgLy8gICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uKGRiLCBcInVzZXJzXCIpLCB7XG4gIC8vICAgICAgIGZpcnN0OiBcIkFkYVwiLFxuICAvLyAgICAgICBsYXN0OiBcIkxvdmVsYWNlXCIsXG4gIC8vICAgICAgIGJvcm46IDE4MTVcbiAgLy8gICAgIH0pO1xuICAvLyAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCB3cml0dGVuIHdpdGggSUQ6IFwiLCBkb2NSZWYuaWQpO1xuICAvLyAgIH0gY2F0Y2ggKGUpIHtcbiAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlKTtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gLy8gY3JlYXRlQ29sbGVjdGlvbigpXG4gIFxuICBcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuICBcbiAgXG4gIGNvbnN0IFt1c2VyLCB1c2VyQXV0aElzTG9hZGluZywgdXNlckF1dGhFcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgLy8gY29uc29sZS5sb2codXNlci51aWQpXG4gIC8vIGNvbnNvbGUubG9nKHVzZXIpXG4gIC8vIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VzZXJBdXRoSXNMb2FkaW5nfSB8fCBDdXJyZW50IHVzZXI6ICR7dXNlcn1gKVxuICAvLyBjb25zb2xlLmxvZyh1c2VyKVxuICBcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgLy8gICAvLyBmZXRjaCgnL2FwaS9oZWxsbycpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSApXG4gIC8vICAgLy8gICAudGhlbigoeCkgPT4ge1xuICAvLyAgIC8vICAgICBzZXREYXRhKHgpXG4gIC8vICAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIC8vICAgLy8gICB9KVxuXG4gIC8vICAgZmV0Y2goJy9hcGkvaGVsbG8nKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAvLyAgICAgLy8gY29uc29sZS5sb2coLi4ucmVzcG9uc2UuaGVhZGVycylcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAvLyAgICAgcmVzcG9uc2UuanNvbigpLnRoZW4oKHgpID0+IHtcbiAgLy8gICAgICAgLy8gY29uc29sZS5sb2coeClcbiAgLy8gICAgICAgc2V0RGF0YSh4KVxuICAvLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAvLyAgICAgfSlcbiAgLy8gICB9KVxuXG4gIC8vIH0sIFtdKVxuXG4gIGNvbnN0IGZpbGVVcGxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3llcycpXG4gICAgLy8gZmV0Y2goJy9hcGkvaGFuZGxlZmlsZXMnKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkgKVxuICAgIC8vICAgLnRoZW4oKHgpID0+IHtcbiAgICAvLyAgICAgc2V0RGF0YSh4KVxuICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIC8vICAgfSlcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnhrVHJhbnNmZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiAgaHJlZj1cImZhdmljb24uaWNvP3Y9MS4xXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtcbiAgICAgICAgdXNlciA/XG5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZ9PlxuICAgICAgICAgIHsvKiB7dXNlci5kaXNwbGF5TmFtZX1cbiAgICAgICAgICAgIF9cbiAgICAgICAgICB7dXNlci5lbWFpbH1cbiAgICAgICAgICBfXG4gICAgICAgICAge3VzZXIudWlkfSAqL31cbiAgICAgICAgICBcbiAgICAgICAgICB7PEltYWdlIHNyYz17dXNlci5waG90b1VSTH0gXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy51c2VySWNvbn1cbiAgICAgICAgICAgIGFsdD1cIlVzZXIgUGhvdG9cIiBcbiAgICAgICAgICAgIHdpZHRoPXsnMTAwJSd9IFxuICAgICAgICAgICAgaGVpZ2h0PXsnMTAwJSd9IC8+fSBcbiAgICAgICAgICAgXG4gICAgICAgIDwvbmF2PlxuICAgICAgICA6XG4gICAgICAgIG51bGxcbiAgICAgIH1cbiAgICAgIDxBdXRoIC8+XG5cbiAgICAgIDxtYWluPlxuICAgICAgICB7Lyoge1xuICAgICAgICAgIHVzZXIgXG4gICAgICAgICAgJiZcbiAgICAgICAgICAodXNlci51aWQgPT0gYWRtaW5JZClcbiAgICAgICAgICA/XG4gICAgICAgICAgPEFkbWluIC8+XG4gICAgICAgICAgOlxuICAgICAgICAgIDxDbGllbnQgXG4gICAgICAgICAgXG4gICAgICAgICAgICB1c2VyQXV0aD17dXNlcn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIFxuICAgICAgICAgfSAqL31cbiAgICAgICAgIHsvKiA8QWRtaW4gLz4gKi99XG4gICAgICAgICA8Q2xpZW50IC8+XG5cbiAgICAgICAgXG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIFxuICAgICAgICB7LyogPEF1dGggLz4gKi99XG4gICAgICAgIHsvKiB7dXNlcn0gKi99XG5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF1dGgiLCJBZG1pbiIsIkNsaWVudCIsInVzZUF1dGhTdGF0ZSIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJmaXJlYmFzZSIsImF1dGgiLCJkYiIsInByb3ZpZGVyIiwidXNlUm91dGVyIiwiYWRtaW5JZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BRE1JTl9VSUQiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlciIsInVzZXJBdXRoSXNMb2FkaW5nIiwidXNlckF1dGhFcnJvciIsImZpbGVVcGxvYWQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm5hdiIsInNyYyIsInBob3RvVVJMIiwidXNlckljb24iLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm1haW4iLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});