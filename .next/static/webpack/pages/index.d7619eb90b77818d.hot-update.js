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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), data = ref[0], setData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), isLoading = ref1[0], setLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        setLoading(true);\n        // fetch('/api/hello').then((res) => res.json() )\n        //   .then((x) => {\n        //     setData(x)\n        //     setLoading(false)\n        //   })\n        fetch(\"/api/hello\").then(function(response) {\n            // console.log(...response.headers)\n            console.log(response);\n            response.json().then(function(x) {\n                setData(x);\n                setLoading(false);\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"xkTransfer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"favicon.ico?v=1.1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"XKTransfer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: data ? data.name : \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().grid),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/docs\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Documentation →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Find in-depth information about Next.js features and API.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://nextjs.org/learn\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Learn →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Learn about Next.js in an interactive course with quizzes!\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://github.com/vercel/next.js/tree/canary/examples\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Examples →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Discover and deploy boilerplate example Next.js projects.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Deploy →\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Instantly deploy your Next.js site to a public URL with Vercel.\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/vercel.svg\",\n                                alt: \"Vercel Logo\",\n                                width: 72,\n                                height: 16\n                            }, void 0, false, {\n                                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/dylanking6132/xylvnking/xktransfer/pages/index.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"07gSHKYEHnxE/FjdrgALyKayO+s=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzRDQUFLO2tEQUN0Qiw4REFBQ0MsR0FBQztrREFBQyxpRUFFSDs7Ozs7NENBQUk7Ozs7OztvQ0FDRjs7Ozs7OzRCQUNBOzs7Ozs7b0JBQ0Q7MEJBRVAsOERBQUNDLFFBQU07Z0JBQUNoQixTQUFTLEVBQUVqQix1RUFBYTswQkFDOUIsNEVBQUM2QixHQUFDO29CQUNBSixJQUFJLEVBQUMsd0dBQXdHO29CQUM3R1MsTUFBTSxFQUFDLFFBQVE7b0JBQ2ZWLEdBQUcsRUFBQyxxQkFBcUI7O3dCQUMxQixZQUNXO3dCQUFDLEdBQUc7c0NBQ2QsOERBQUNXLE1BQUk7NEJBQUNsQixTQUFTLEVBQUVqQixxRUFBVztzQ0FDMUIsNEVBQUNELG1EQUFLO2dDQUFDc0MsR0FBRyxFQUFDLGFBQWE7Z0NBQUNDLEdBQUcsRUFBQyxhQUFhO2dDQUFDQyxLQUFLLEVBQUUsRUFBRTtnQ0FBRUMsTUFBTSxFQUFFLEVBQUU7Ozs7O29DQUFJOzs7OztnQ0FDL0Q7Ozs7Ozt3QkFDTDs7Ozs7b0JBQ0c7Ozs7OztZQUNMLENBQ1A7Q0FDRjtHQTNGdUJwQyxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuXG4gICAgLy8gZmV0Y2goJy9hcGkvaGVsbG8nKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkgKVxuICAgIC8vICAgLnRoZW4oKHgpID0+IHtcbiAgICAvLyAgICAgc2V0RGF0YSh4KVxuICAgIC8vICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIC8vICAgfSlcblxuICAgIGZldGNoKCcvYXBpL2hlbGxvJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKC4uLnJlc3BvbnNlLmhlYWRlcnMpXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKCh4KSA9PiB7XG4gICAgICAgIHNldERhdGEoeClcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIH0pXG4gICAgfSlcblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+eGtUcmFuc2ZlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiICBocmVmPVwiZmF2aWNvbi5pY28/dj0xLjFcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICBYS1RyYW5zZmVyXG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtkYXRhID8gZGF0YS5uYW1lIDogXCJcIn0gXG4gICAgICAgIDwvaDE+XG5cblxuXG4gICAgICAgIFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ3JpZH0+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzXCIgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICA8aDI+RG9jdW1lbnRhdGlvbiAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+RmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvbGVhcm5cIiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgIDxoMj5MZWFybiAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+TGVhcm4gYWJvdXQgTmV4dC5qcyBpbiBhbiBpbnRlcmFjdGl2ZSBjb3Vyc2Ugd2l0aCBxdWl6emVzITwvcD5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92ZXJjZWwvbmV4dC5qcy90cmVlL2NhbmFyeS9leGFtcGxlc1wiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5FeGFtcGxlcyAmcmFycjs8L2gyPlxuICAgICAgICAgICAgPHA+RGlzY292ZXIgYW5kIGRlcGxveSBib2lsZXJwbGF0ZSBleGFtcGxlIE5leHQuanMgcHJvamVjdHMuPC9wPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj5EZXBsb3kgJnJhcnI7PC9oMj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBJbnN0YW50bHkgZGVwbG95IHlvdXIgTmV4dC5qcyBzaXRlIHRvIGEgcHVibGljIFVSTCB3aXRoIFZlcmNlbC5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIngiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiZ3JpZCIsImEiLCJjYXJkIiwiaDIiLCJwIiwiZm9vdGVyIiwidGFyZ2V0Iiwic3BhbiIsImxvZ28iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});