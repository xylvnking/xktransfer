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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_Auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/Auth */ \"./pages/Components/Auth.js\");\n/* harmony import */ var _Components_Admin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Admin */ \"./pages/Components/Admin.js\");\n/* harmony import */ var _Components_Client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/Client */ \"./pages/Components/Client.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n// import firebase, {auth, db, provider} from '../firebase/clientApp'\n// import { auth } from '../firebase/clientApp'\nvar adminId = \"Ptm0rNIcPOcs8RubkivXx7JUsia2\";\nfunction Home() {\n    _s();\n    // const createCollection = async () => {\n    //   try {\n    //     const docRef = await addDoc(collection(db, \"users\"), {\n    //       first: \"Ada\",\n    //       last: \"Lovelace\",\n    //       born: 1815\n    //     });\n    //     console.log(\"Document written with ID: \", docRef.id);\n    //   } catch (e) {\n    //     console.error(\"Error adding document: \", e);\n    //   }\n    // }\n    // // createCollection()\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true), isLoading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_10__.auth), 3), user = ref2[0], userAuthIsLoading = ref2[1], userAuthError = ref2[2];\n    // console.log(user.uid)\n    // console.log(user)\n    // console.log(`Loading: ${userAuthIsLoading} || Current user: ${user}`)\n    // console.log(user)\n    // useEffect(() => {\n    //   setLoading(true)\n    //   // fetch('/api/hello').then((res) => res.json() )\n    //   //   .then((x) => {\n    //   //     setData(x)\n    //   //     setLoading(false)\n    //   //   })\n    //   fetch('/api/hello').then((response) => {\n    //     // console.log(...response.headers)\n    //     // console.log(response)\n    //     response.json().then((x) => {\n    //       // console.log(x)\n    //       setData(x)\n    //       setLoading(false)\n    //     })\n    //   })\n    // }, [])\n    var fileUpload = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"yes\");\n                    case 1:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // fetch('/api/handlefiles').then((res) => res.json() )\n        //   .then((x) => {\n        //     setData(x)\n        //     setLoading(false)\n        //   })\n        }));\n        return function fileUpload() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"xkTransfer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.ico?v=1.1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"nav\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().nav),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: user.photoURL,\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().userIcon),\n                    alt: \"User Photo\",\n                    width: \"100%\",\n                    height: \"100%\"\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                    lineNumber: 99,\n                    columnNumber: 12\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, this) : null,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Auth__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Components_Client__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    userAuth: user\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_14___default().footer)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"jwTEtw40KVeM/0T8bSx9ZqAgVw4=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_8__.useAuthState\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBQ3lCLFFBQU07Z0JBQUNsQixTQUFTLEVBQUUvQix3RUFBYTs7Ozs7b0JBS3ZCOzs7Ozs7WUFDTCxDQUNQO0NBQ0Y7R0F2SHVCbUIsSUFBSTs7UUFxQnVCWixtRUFBWTs7O0FBckJ2Q1ksS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBBdXRoIGZyb20gJy4vQ29tcG9uZW50cy9BdXRoJ1xuaW1wb3J0IEFkbWluIGZyb20gJy4vQ29tcG9uZW50cy9BZG1pbidcbmltcG9ydCBDbGllbnQgZnJvbSAnLi9Db21wb25lbnRzL0NsaWVudCdcblxuXG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIlxuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiOyBcblxuXG5pbXBvcnQgZmlyZWJhc2UsIHthdXRoLCBkYiwgcHJvdmlkZXJ9IGZyb20gJy4uL2ZpcmViYXNlL2NsaWVudEFwcCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuLy8gaW1wb3J0IGZpcmViYXNlLCB7YXV0aCwgZGIsIHByb3ZpZGVyfSBmcm9tICcuLi9maXJlYmFzZS9jbGllbnRBcHAnXG5cbi8vIGltcG9ydCB7IGF1dGggfSBmcm9tICcuLi9maXJlYmFzZS9jbGllbnRBcHAnXG5cbmNvbnN0IGFkbWluSWQgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BRE1JTl9VSURcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBcbiAgLy8gY29uc3QgY3JlYXRlQ29sbGVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgLy8gICB0cnkge1xuICAvLyAgICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwidXNlcnNcIiksIHtcbiAgLy8gICAgICAgZmlyc3Q6IFwiQWRhXCIsXG4gIC8vICAgICAgIGxhc3Q6IFwiTG92ZWxhY2VcIixcbiAgLy8gICAgICAgYm9ybjogMTgxNVxuICAvLyAgICAgfSk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHdyaXR0ZW4gd2l0aCBJRDogXCIsIGRvY1JlZi5pZCk7XG4gIC8vICAgfSBjYXRjaCAoZSkge1xuICAvLyAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGUpO1xuICAvLyAgIH1cbiAgLy8gfVxuICAvLyAvLyBjcmVhdGVDb2xsZWN0aW9uKClcbiAgXG4gIFxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gIFxuICBcbiAgY29uc3QgW3VzZXIsIHVzZXJBdXRoSXNMb2FkaW5nLCB1c2VyQXV0aEVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKVxuICAvLyBjb25zb2xlLmxvZyh1c2VyLnVpZClcbiAgLy8gY29uc29sZS5sb2codXNlcilcbiAgLy8gY29uc29sZS5sb2coYExvYWRpbmc6ICR7dXNlckF1dGhJc0xvYWRpbmd9IHx8IEN1cnJlbnQgdXNlcjogJHt1c2VyfWApXG4gIC8vIGNvbnNvbGUubG9nKHVzZXIpXG4gIFxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIHNldExvYWRpbmcodHJ1ZSlcblxuICAvLyAgIC8vIGZldGNoKCcvYXBpL2hlbGxvJykudGhlbigocmVzKSA9PiByZXMuanNvbigpIClcbiAgLy8gICAvLyAgIC50aGVuKCh4KSA9PiB7XG4gIC8vICAgLy8gICAgIHNldERhdGEoeClcbiAgLy8gICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgLy8gICAvLyAgIH0pXG5cbiAgLy8gICBmZXRjaCgnL2FwaS9oZWxsbycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyguLi5yZXNwb25zZS5oZWFkZXJzKVxuICAvLyAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gIC8vICAgICByZXNwb25zZS5qc29uKCkudGhlbigoeCkgPT4ge1xuICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyh4KVxuICAvLyAgICAgICBzZXREYXRhKHgpXG4gIC8vICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gIC8vICAgICB9KVxuICAvLyAgIH0pXG5cbiAgLy8gfSwgW10pXG5cbiAgY29uc3QgZmlsZVVwbG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygneWVzJylcbiAgICAvLyBmZXRjaCgnL2FwaS9oYW5kbGVmaWxlcycpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSApXG4gICAgLy8gICAudGhlbigoeCkgPT4ge1xuICAgIC8vICAgICBzZXREYXRhKHgpXG4gICAgLy8gICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgLy8gICB9KVxuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+eGtUcmFuc2ZlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiICBocmVmPVwiZmF2aWNvbi5pY28/dj0xLjFcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAge1xuICAgICAgICB1c2VyID9cblxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdn0+XG4gICAgICAgICAgey8qIHt1c2VyLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgX1xuICAgICAgICAgIHt1c2VyLmVtYWlsfVxuICAgICAgICAgIF9cbiAgICAgICAgICB7dXNlci51aWR9ICovfVxuICAgICAgICAgIFxuICAgICAgICAgIHs8SW1hZ2Ugc3JjPXt1c2VyLnBob3RvVVJMfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJJY29ufVxuICAgICAgICAgICAgYWx0PVwiVXNlciBQaG90b1wiIFxuICAgICAgICAgICAgd2lkdGg9eycxMDAlJ30gXG4gICAgICAgICAgICBoZWlnaHQ9eycxMDAlJ30gLz59IFxuICAgICAgICAgICBcbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDpcbiAgICAgICAgbnVsbFxuICAgICAgfVxuICAgICAgPEF1dGggLz5cblxuICAgICAgPG1haW4+XG4gICAgICAgIHsvKiB7XG4gICAgICAgICAgdXNlciBcbiAgICAgICAgICAmJlxuICAgICAgICAgICh1c2VyLnVpZCA9PSBhZG1pbklkKVxuICAgICAgICAgID9cbiAgICAgICAgICA8QWRtaW4gLz5cbiAgICAgICAgICA6XG4gICAgICAgICAgPENsaWVudCBcbiAgICAgICAgICBcbiAgICAgICAgICAgIHVzZXJBdXRoPXt1c2VyfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgXG4gICAgICAgIH0gKi99XG4gICAgICAgICB7LyogPEFkbWluIC8+ICovfVxuICAgICAgICA8Q2xpZW50IFxuICAgICAgICBcbiAgICAgICAgICB1c2VyQXV0aD17dXNlcn1cbiAgICAgICAgLz5cbiAgICAgICAgIHsvKiA8Q2xpZW50IC8+ICovfVxuXG4gICAgICAgIFxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICBcbiAgICAgICAgey8qIDxBdXRoIC8+ICovfVxuICAgICAgICB7Lyoge3VzZXJ9ICovfVxuXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdXRoIiwiQWRtaW4iLCJDbGllbnQiLCJ1c2VBdXRoU3RhdGUiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiZmlyZWJhc2UiLCJhdXRoIiwiZGIiLCJwcm92aWRlciIsInVzZVJvdXRlciIsImFkbWluSWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQURNSU5fVUlEIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwiaXNMb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZXIiLCJ1c2VyQXV0aElzTG9hZGluZyIsInVzZXJBdXRoRXJyb3IiLCJmaWxlVXBsb2FkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJuYXYiLCJzcmMiLCJwaG90b1VSTCIsInVzZXJJY29uIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJtYWluIiwidXNlckF1dGgiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});