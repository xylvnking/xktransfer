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

/***/ "./pages/Components/Auth.js":
/*!**********************************!*\
  !*** ./pages/Components/Auth.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"./node_modules/firebase/auth/dist/index.esm.js\");\n/* harmony import */ var _firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase/clientApp */ \"./firebase/clientApp.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n// import \"firebase/auth\";\n\n\n\n// import {useAuthState} from \"react-firebase-hooks/auth\"\n\n\nfunction Auth() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.auth), 3), userAuth = ref[0], userAuthIsLoading = ref[1], userAuthError = ref[2];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), client = ref1[0], setClient = ref1[1];\n    var signInWithGoogle = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.auth, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.provider).then(function(result) {\n                            setClient(result.user);\n                            checkIfNewClient(result.user);\n                        }).catch(function(error) {\n                            console.error(\"there was an error signing in\", error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function signInWithGoogle() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var signUserOut = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signOut)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.auth, _firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.provider).then(function() {\n                            setClient(null);\n                        }).catch(function(error) {\n                            console.error(\"there was an error signing out\", error);\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function signUserOut() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var createNewClient = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n            var uidWithoutNumberAtTheStart;\n            return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        uidWithoutNumberAtTheStart = \"clientID\" + user.uid;\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, uidWithoutNumberAtTheStart, \"settings\"), {\n                            uid: user.uid,\n                            displayName: user.displayName,\n                            email: user.email,\n                            photoUrl: user.photoURL,\n                            uidWithoutNumberAtTheStart: uidWithoutNumberAtTheStart,\n                            creationTime: user.metadata.creationTime\n                        });\n                    case 4:\n                        _ctx.next = 9;\n                        break;\n                    case 6:\n                        _ctx.prev = 6;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.error(\"Error adding document: \", _ctx.t0);\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.next = 12;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, \"admin\", \"clientList\"), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])({}, uidWithoutNumberAtTheStart, {\n                            uid: user.uid,\n                            displayName: user.displayName,\n                            email: user.email,\n                            photoURL: user.photoURL,\n                            uidWithoutNumberAtTheStart: uidWithoutNumberAtTheStart\n                        }));\n                    case 12:\n                        _ctx.next = 17;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t1 = _ctx[\"catch\"](9);\n                        console.log(\"Error updating admin's list of users\", _ctx.t1);\n                    case 17:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    6\n                ],\n                [\n                    9,\n                    14\n                ]\n            ]);\n        }));\n        return function createNewClient(user) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var checkIfNewClient = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n            var docRef, docSnap;\n            return _Users_dylanking6132_xylvnking_xktransfer_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        docRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.doc)(_firebase_clientApp__WEBPACK_IMPORTED_MODULE_4__.db, \"\".concat(user.uid), \"settings\");\n                        _ctx.next = 3;\n                        return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_5__.getDoc)(docRef);\n                    case 3:\n                        docSnap = _ctx.sent;\n                        if (docSnap.exists()) {} else {\n                            createNewClient(user);\n                        }\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function checkIfNewClient(user) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // onAuthStateChanged(auth, (user) => { // old auth check method used in other app. causes rerender and recheck every time, using hook instead\n    //     if (user) {\n    //         setClient(user)\n    //         checkIfNewClient(user)\n    //     } else {\n    //         setClient(null)\n    //         console.log('nobody is logged in')\n    //     }\n    // })\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: userAuth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().indexButtons),\n            onClick: signUserOut,\n            children: \" Sign Out\"\n        }, void 0, false, {\n            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Auth.js\",\n            lineNumber: 124,\n            columnNumber: 17\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().indexButtons),\n            onClick: signInWithGoogle,\n            children: \" Sign In\"\n        }, void 0, false, {\n            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Auth.js\",\n            lineNumber: 126,\n            columnNumber: 17\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/Components/Auth.js\",\n        lineNumber: 120,\n        columnNumber: 9\n    }, this);\n}\n_s(Auth, \"zk9L10KD3BJTG9+I3jbxiQ/dQfI=\", false, function() {\n    return [\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState\n    ];\n});\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O1NBSWpFO3dCQXZES1QsZUFBZSxDQUFVTixJQUFJOzs7T0F1RGxDO0lBRUQsSUFBTUMsZ0JBQWdCO21CQUFHLDBQQUFPRCxJQUFJLEVBQUs7Z0JBQy9CZ0IsTUFBTSxFQUNOQyxPQUFPOzs7O3dCQURQRCxNQUFNLEdBQUcvQix1REFBRyxDQUFDTCxtREFBRSxFQUFFLEVBQUMsQ0FBVyxPQUFUb0IsSUFBSSxDQUFDUSxHQUFHLENBQUUsRUFBRSxVQUFVLENBQUM7OytCQUMzQnRCLDBEQUFNLENBQUM4QixNQUFNLENBQUM7O3dCQUE5QkMsT0FBTyxZQUF1Qjt3QkFDcEMsSUFBSUEsT0FBTyxDQUFDQyxNQUFNLEVBQUUsRUFBRSxFQUNyQixNQUFNOzRCQUNIWixlQUFlLENBQUNOLElBQUksQ0FBQzt5QkFDeEI7Ozs7OztTQUNKO3dCQVBLQyxnQkFBZ0IsQ0FBVUQsSUFBSTs7O09BT25DO0lBRUQsOElBQThJO0lBQzlJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsNkNBQTZDO0lBQzdDLFFBQVE7SUFDUixLQUFLO0lBRUwscUJBQ0ksOERBQUNtQixLQUFHO2tCQUVJM0IsUUFBUSxpQkFFUiw4REFBQzRCLFFBQU07WUFBQ0MsU0FBUyxFQUFFL0IsOEVBQW1CO1lBQUVpQyxPQUFPLEVBQUVsQixXQUFXO3NCQUFFLFdBQVM7Ozs7O2dCQUFTLGlCQUVoRiw4REFBQ2UsUUFBTTtZQUFDQyxTQUFTLEVBQUUvQiw4RUFBbUI7WUFBRWlDLE9BQU8sRUFBRTFCLGdCQUFnQjtzQkFBRSxVQUFROzs7OztnQkFBUzs7Ozs7WUFFdEYsQ0FDWDtDQUNGO0dBL0dRTixJQUFJOztRQUU0Q0YsbUVBQVk7OztBQUY1REUsS0FBQUEsSUFBSTtBQWlIYiwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Db21wb25lbnRzL0F1dGguanM/ZmQ5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGdldEF1dGgsIHNpZ25JbldpdGhQb3B1cCwgR29vZ2xlQXV0aFByb3ZpZGVyLCBzaWduT3V0LCBvbkF1dGhTdGF0ZUNoYW5nZWQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJ1xuXG5pbXBvcnQgeyBkYiwgYXV0aCwgcHJvdmlkZXIgfSBmcm9tICcuLi8uLi9maXJlYmFzZS9jbGllbnRBcHAnO1xuXG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MsIGRvYywgZ2V0RG9jLCBzZXREb2MsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjsgXG5cbi8vIGltcG9ydCB7dXNlQXV0aFN0YXRlfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiXG5pbXBvcnQge3VzZUF1dGhTdGF0ZX0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIlxuXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuXG5cblxuXG5mdW5jdGlvbiBBdXRoKCkge1xuXG4gICAgY29uc3QgW3VzZXJBdXRoLCB1c2VyQXV0aElzTG9hZGluZywgdXNlckF1dGhFcnJvcl0gPSB1c2VBdXRoU3RhdGUoYXV0aClcblxuICAgIGNvbnN0IFtjbGllbnQsIHNldENsaWVudF0gPSB1c2VTdGF0ZSgpXG5cbiAgICBjb25zdCBzaWduSW5XaXRoR29vZ2xlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBzaWduSW5XaXRoUG9wdXAoYXV0aCwgcHJvdmlkZXIpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgc2V0Q2xpZW50KHJlc3VsdC51c2VyKVxuICAgICAgICAgICAgY2hlY2tJZk5ld0NsaWVudChyZXN1bHQudXNlcilcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcInRoZXJlIHdhcyBhbiBlcnJvciBzaWduaW5nIGluXCIsIGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9XG4gICAgY29uc3Qgc2lnblVzZXJPdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGF3YWl0IHNpZ25PdXQoYXV0aCwgcHJvdmlkZXIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgc2V0Q2xpZW50KG51bGwpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJ0aGVyZSB3YXMgYW4gZXJyb3Igc2lnbmluZyBvdXRcIiwgZXJyb3IpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZU5ld0NsaWVudCA9IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgICAgIGNvbnN0IHVpZFdpdGhvdXROdW1iZXJBdFRoZVN0YXJ0ID0gJ2NsaWVudElEJyArIHVzZXIudWlkXG5cbiAgICAgICAgdHJ5IHsgLy8gY3JlYXRlIGEgZG9jdW1lbnQgaW4gYSBjb2xsZWN0aW9uIHdpdGggdXNlcidzIHVpZCB3aG8ncyBleGlzdGVuY2Ugd2lsbCBiZSB2YWxpZGF0ZWQgb24gc2lnbiBpbiB0byBjaGVjayBpZiB0aGV5J3JlIGEgbmV3IHVzZXIgb3Igbm90XG4gICAgICAgICAgICAvLyBhd2FpdCBzZXREb2MoZG9jKGRiLCB1c2VyLnVpZCwgJ3NldHRpbmdzJyksIHtcbiAgICAgICAgICAgIGF3YWl0IHNldERvYyhkb2MoZGIsIHVpZFdpdGhvdXROdW1iZXJBdFRoZVN0YXJ0LCAnc2V0dGluZ3MnKSwge1xuICAgICAgICAgICAgICAgIHVpZDogdXNlci51aWQsXG4gICAgICAgICAgICAgICAgZGlzcGxheU5hbWU6IHVzZXIuZGlzcGxheU5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcGhvdG9Vcmw6IHVzZXIucGhvdG9VUkwsXG4gICAgICAgICAgICAgICAgdWlkV2l0aG91dE51bWJlckF0VGhlU3RhcnQ6IHVpZFdpdGhvdXROdW1iZXJBdFRoZVN0YXJ0LFxuICAgICAgICAgICAgICAgIGNyZWF0aW9uVGltZTogdXNlci5tZXRhZGF0YS5jcmVhdGlvblRpbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBkb2N1bWVudDogXCIsIGVycm9yKTtcbiAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIC8vIGNyZWF0ZSAnc29uZ3MnIGRlZmF1bHQgZG9jXG4gICAgICAgIC8vIHRyeSB7IC8vIGNyZWF0ZSBhIGRvY3VtZW50IGluIGEgY29sbGVjdGlvbiB3aXRoIHVzZXIncyB1aWQgd2hvJ3MgZXhpc3RlbmNlIHdpbGwgYmUgdmFsaWRhdGVkIG9uIHNpZ24gaW4gdG8gY2hlY2sgaWYgdGhleSdyZSBhIG5ldyB1c2VyIG9yIG5vdFxuICAgICAgICAvLyAgICAgLy8gYXdhaXQgc2V0RG9jKGRvYyhkYiwgdXNlci51aWQsICdzZXR0aW5ncycpLCB7XG4gICAgICAgIC8vICAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCB1aWRXaXRob3V0TnVtYmVyQXRUaGVTdGFydCwgJ3NldHRpbmdzJyksIHtcbiAgICAgICAgLy8gICAgICAgICB1aWQ6IHVzZXIudWlkLFxuICAgICAgICAvLyAgICAgICAgIGRpc3BsYXlOYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICAvLyAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAvLyAgICAgICAgIHBob3RvVXJsOiB1c2VyLnBob3RvVVJMLFxuICAgICAgICAvLyAgICAgICAgIHVpZFdpdGhvdXROdW1iZXJBdFRoZVN0YXJ0OiB1aWRXaXRob3V0TnVtYmVyQXRUaGVTdGFydCxcbiAgICAgICAgLy8gICAgICAgICBjcmVhdGlvblRpbWU6IHVzZXIubWV0YWRhdGEuY3JlYXRpb25UaW1lXG4gICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgZG9jdW1lbnQ6IFwiLCBlcnJvcik7XG4gICAgICAgIC8vIH1cblxuXG5cblxuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsICdhZG1pbicsIFwiY2xpZW50TGlzdFwiKSwge1xuICAgICAgICAgICAgICAgIFt1aWRXaXRob3V0TnVtYmVyQXRUaGVTdGFydF0gOiB7XG4gICAgICAgICAgICAgICAgICAgIHVpZDogdXNlci51aWQsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkwsXG4gICAgICAgICAgICAgICAgICAgIHVpZFdpdGhvdXROdW1iZXJBdFRoZVN0YXJ0OiB1aWRXaXRob3V0TnVtYmVyQXRUaGVTdGFydFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciB1cGRhdGluZyBhZG1pbidzIGxpc3Qgb2YgdXNlcnNcIiwgZXJyb3IpXG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0lmTmV3Q2xpZW50ID0gYXN5bmMgKHVzZXIpID0+IHtcbiAgICAgICAgY29uc3QgZG9jUmVmID0gZG9jKGRiLCBgJHt1c2VyLnVpZH1gLCAnc2V0dGluZ3MnKVxuICAgICAgICBjb25zdCBkb2NTbmFwID0gYXdhaXQgZ2V0RG9jKGRvY1JlZik7XG4gICAgICAgIGlmIChkb2NTbmFwLmV4aXN0cygpKSB7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjcmVhdGVOZXdDbGllbnQodXNlcilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG9uQXV0aFN0YXRlQ2hhbmdlZChhdXRoLCAodXNlcikgPT4geyAvLyBvbGQgYXV0aCBjaGVjayBtZXRob2QgdXNlZCBpbiBvdGhlciBhcHAuIGNhdXNlcyByZXJlbmRlciBhbmQgcmVjaGVjayBldmVyeSB0aW1lLCB1c2luZyBob29rIGluc3RlYWRcbiAgICAvLyAgICAgaWYgKHVzZXIpIHtcbiAgICAvLyAgICAgICAgIHNldENsaWVudCh1c2VyKVxuICAgIC8vICAgICAgICAgY2hlY2tJZk5ld0NsaWVudCh1c2VyKVxuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgc2V0Q2xpZW50KG51bGwpXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnbm9ib2R5IGlzIGxvZ2dlZCBpbicpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1c2VyQXV0aFxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmluZGV4QnV0dG9uc30gb25DbGljaz17c2lnblVzZXJPdXR9PiBTaWduIE91dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmluZGV4QnV0dG9uc30gb25DbGljaz17c2lnbkluV2l0aEdvb2dsZX0+IFNpZ24gSW48L2J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0QXV0aCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsInNpZ25PdXQiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJkYiIsImF1dGgiLCJwcm92aWRlciIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkb2MiLCJnZXREb2MiLCJzZXREb2MiLCJ1cGRhdGVEb2MiLCJ1c2VBdXRoU3RhdGUiLCJzdHlsZXMiLCJBdXRoIiwidXNlckF1dGgiLCJ1c2VyQXV0aElzTG9hZGluZyIsInVzZXJBdXRoRXJyb3IiLCJjbGllbnQiLCJzZXRDbGllbnQiLCJzaWduSW5XaXRoR29vZ2xlIiwidGhlbiIsInJlc3VsdCIsInVzZXIiLCJjaGVja0lmTmV3Q2xpZW50IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJzaWduVXNlck91dCIsImNyZWF0ZU5ld0NsaWVudCIsInVpZFdpdGhvdXROdW1iZXJBdFRoZVN0YXJ0IiwidWlkIiwiZGlzcGxheU5hbWUiLCJlbWFpbCIsInBob3RvVXJsIiwicGhvdG9VUkwiLCJjcmVhdGlvblRpbWUiLCJtZXRhZGF0YSIsImxvZyIsImRvY1JlZiIsImRvY1NuYXAiLCJleGlzdHMiLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJpbmRleEJ1dHRvbnMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Auth.js\n"));

/***/ })

});