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

/***/ "./pages/Components/Client.js":
/*!************************************!*\
  !*** ./pages/Components/Client.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Client; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Client(props) {\n    var _this = this;\n    var check = function check() {\n        console.log(clientSongs);\n    };\n    _s();\n    // const [userAuth, userAuthIsLoading, userAuthError] = useAuthState(auth)\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), clientSongs = ref[0], setClientSongs = ref[1];\n    // console.log(userAuth)\n    // load client songs\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (props.userAuth && clientSongs.length == 0) {\n            var clientCollection = \"clientID\" + props.userAuth.uid;\n            function getClientSongs() {\n                return _getClientSongs.apply(this, arguments);\n            }\n            function _getClientSongs() {\n                _getClientSongs = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var querySnapshot;\n                    return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                _ctx.next = 2;\n                                return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_3__.db, clientCollection));\n                            case 2:\n                                querySnapshot = _ctx.sent;\n                                querySnapshot.forEach(function(doc) {\n                                    if (doc.id !== \"settings\") {\n                                        setClientSongs(function(current) {\n                                            return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(current).concat([\n                                                doc.data()\n                                            ]);\n                                        });\n                                    }\n                                });\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }));\n                return _getClientSongs.apply(this, arguments);\n            }\n            getClientSongs();\n        }\n    }, [\n        props.userAuth\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return check();\n                },\n                children: \"CHECK\"\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this),\n            props.userAuth && props.userAuth.uid,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().songList),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().clientSongList),\n                    children: clientSongs && clientSongs.map(function(song) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileListItem),\n                            children: Object.values(song).map(function(songDataValue) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileVersion),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: Date.parse(Date(songDataValue.date))\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                                            children: songDataValue.revisionNote\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 37\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"audio\", {\n                                            controls: true,\n                                            src: songDataValue.downloadURL\n                                        }, void 0, false, {\n                                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 37\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 37\n                                }, _this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                            lineNumber: 53,\n                            columnNumber: 29\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Client.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n};\n_s(Client, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Client;\nvar _c;\n$RefreshReg$(_c, \"Client\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0osQ0FBQzs7Ozs7d0JBRUw7Ozs7O29CQUNDOzs7Ozs7WUFDUCxDQUNSO0NBQ0Y7R0E3RHVCMUMsTUFBTTtBQUFOQSxLQUFBQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvQ2xpZW50LmpzPzI4N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgZmlyZWJhc2UsIHthdXRoLCBkYiwgcHJvdmlkZXIsIHN0b3JhZ2V9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2NsaWVudEFwcCdcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGdldERvY3MsIGRvYywgZ2V0RG9jLCB1cGRhdGVEb2MsIHNldERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50KHByb3BzKSB7XG4gICAgLy8gY29uc3QgW3VzZXJBdXRoLCB1c2VyQXV0aElzTG9hZGluZywgdXNlckF1dGhFcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcbiAgICBjb25zdCBbY2xpZW50U29uZ3MsIHNldENsaWVudFNvbmdzXSA9IHVzZVN0YXRlKFtdKVxuICAgIC8vIGNvbnNvbGUubG9nKHVzZXJBdXRoKVxuXG4gICAgLy8gbG9hZCBjbGllbnQgc29uZ3NcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAocHJvcHMudXNlckF1dGggJiYgY2xpZW50U29uZ3MubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudENvbGxlY3Rpb24gPSAnY2xpZW50SUQnICsgcHJvcHMudXNlckF1dGgudWlkXG4gICAgICAgICAgICBhc3luYyBmdW5jdGlvbiBnZXRDbGllbnRTb25ncygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhjb2xsZWN0aW9uKGRiLCBjbGllbnRDb2xsZWN0aW9uKSk7XG4gICAgICAgICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvYy5pZCAhPT0gJ3NldHRpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2xpZW50U29uZ3MoY3VycmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmRhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnZXRDbGllbnRTb25ncygpXG4gICAgICAgIH1cbiAgICB9LFtwcm9wcy51c2VyQXV0aF0pXG5cbiAgICBmdW5jdGlvbiBjaGVjaygpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhjbGllbnRTb25ncylcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRDb250YWluZXJ9PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNoZWNrKCl9PkNIRUNLPC9idXR0b24+XG4gICAgICAgIDxiciAvPlxuICAgICAgICB7XG4gICAgICAgICAgICBwcm9wcy51c2VyQXV0aCAmJlxuICAgICAgICAgICAgcHJvcHMudXNlckF1dGgudWlkXG4gICAgICAgIH1cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuc29uZ0xpc3R9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudFNvbmdMaXN0fT5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFNvbmdzICYmXG4gICAgICAgICAgICAgICAgICAgIGNsaWVudFNvbmdzLm1hcCgoc29uZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZmlsZUxpc3RJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge09iamVjdC52YWx1ZXMoc29uZykubWFwKChzb25nRGF0YVZhbHVlKSA9PiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5maWxlVmVyc2lvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+e0RhdGUucGFyc2UoRGF0ZShzb25nRGF0YVZhbHVlLmRhdGUpKX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPntzb25nRGF0YVZhbHVlLnJldmlzaW9uTm90ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGF1ZGlvIGNvbnRyb2xzIHNyYz17c29uZ0RhdGFWYWx1ZS5kb3dubG9hZFVSTH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiZmlyZWJhc2UiLCJhdXRoIiwiZGIiLCJwcm92aWRlciIsInN0b3JhZ2UiLCJjb2xsZWN0aW9uIiwiZ2V0RG9jcyIsImRvYyIsImdldERvYyIsInVwZGF0ZURvYyIsInNldERvYyIsInVzZUF1dGhTdGF0ZSIsIkNsaWVudCIsInByb3BzIiwiY2hlY2siLCJjb25zb2xlIiwibG9nIiwiY2xpZW50U29uZ3MiLCJzZXRDbGllbnRTb25ncyIsInVzZXJBdXRoIiwibGVuZ3RoIiwiY2xpZW50Q29sbGVjdGlvbiIsInVpZCIsImdldENsaWVudFNvbmdzIiwicXVlcnlTbmFwc2hvdCIsImZvckVhY2giLCJpZCIsImN1cnJlbnQiLCJkYXRhIiwibWFpbiIsImNsYXNzTmFtZSIsImNsaWVudENvbnRhaW5lciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJiciIsInNlY3Rpb24iLCJzb25nTGlzdCIsInVsIiwiY2xpZW50U29uZ0xpc3QiLCJtYXAiLCJzb25nIiwiZmlsZUxpc3RJdGVtIiwiT2JqZWN0IiwidmFsdWVzIiwic29uZ0RhdGFWYWx1ZSIsImZpbGVWZXJzaW9uIiwibGkiLCJEYXRlIiwicGFyc2UiLCJkYXRlIiwicmV2aXNpb25Ob3RlIiwiYXVkaW8iLCJjb250cm9scyIsInNyYyIsImRvd25sb2FkVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Client.js\n"));

/***/ })

});