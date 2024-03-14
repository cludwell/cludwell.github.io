"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/AboutMe.jsx":
/*!****************************************!*\
  !*** ./src/app/components/AboutMe.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AboutMe; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tab */ \"(app-pages-browser)/./src/app/components/Tab.jsx\");\n/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideDrawer */ \"(app-pages-browser)/./src/app/components/SideDrawer.jsx\");\n/* harmony import */ var _Dots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Dots */ \"(app-pages-browser)/./src/app/components/Dots.jsx\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts */ \"(app-pages-browser)/./src/app/fonts.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AboutMe(param) {\n    let { aboutMeOpen, setAboutMeOpen } = param;\n    _s();\n    const aboutMeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const openDrawer = ()=>{\n        if (aboutMeOpen) return;\n        setAboutMeOpen(true);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const closeDrawer = (e)=>{\n            if (aboutMeRef.current && !aboutMeRef.current.contains(e.target) && !e.target.closest(\".about-me\")) {\n                setAboutMeOpen(false);\n            }\n        };\n        document.addEventListener(\"click\", closeDrawer);\n        return ()=>{\n            document.removeEventListener(\"click\", closeDrawer);\n        };\n    }, [\n        aboutMeOpen,\n        setAboutMeOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: openDrawer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Tab__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: \"About Me\",\n                    number: \"01\",\n                    open: aboutMeOpen\n                }, void 0, false, {\n                    fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideDrawer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                open: aboutMeOpen,\n                setOpen: setAboutMeOpen,\n                ref: aboutMeRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-screen-md about-me\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \" my-12 text-4xl text-white\",\n                            children: \" About Me\\uD83D\\uDC4B\"\n                        }, void 0, false, {\n                            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Dots__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \" Hi! I'm Chris! I'm a full stack Software Engineer looking for a\\n          Junior Developer position. I'm passionate about software that levels\\n          playing fields and changes the way we live our lives.\"\n                        }, void 0, false, {\n                            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Before becoming a software engineer I was a Senior Installer doing\\n          residential solar installations. My role meant quality and safe\\n          installations, for clients and my team, all within the span of one\\n          day. It was from this work that I learned I enjoyed creative problem\\n          solving and wanted a career in which I was always learning and\\n          constantly being challenged, as well as the sense of completion that\\n          comes from seeing a project in all aspects from start to finish.\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \" When I am not working I am backpacking in a national forest or\\n          exploring a part of Mexico I've never been to.\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"I'm currently located in Portland, OR but looking to relocate given\\n          the right opportunity! Please feel free to contact me to discuss work\\n          opportunities or possible collaborations.\"\n                        }, void 0, false, {\n                            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/AboutMe.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AboutMe, \"lMV1i/nOJ8wFXrrP1tPJLqD6joc=\");\n_c = AboutMe;\nvar _c;\n$RefreshReg$(_c, \"AboutMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BYm91dE1lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQzVCO0FBQ2M7QUFDWjtBQUNRO0FBQ25CLFNBQVNPLFFBQVEsS0FBK0I7UUFBL0IsRUFBRUMsV0FBVyxFQUFFQyxjQUFjLEVBQUUsR0FBL0I7O0lBQzlCLE1BQU1DLGFBQWFULDZDQUFNQSxDQUFDO0lBRTFCLE1BQU1VLGFBQWE7UUFDakIsSUFBSUgsYUFBYTtRQUNqQkMsZUFBZTtJQUNqQjtJQUNBUCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLGNBQWMsQ0FBQ0M7WUFDbkIsSUFDRUgsV0FBV0ksT0FBTyxJQUNsQixDQUFDSixXQUFXSSxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsRUFBRUcsTUFBTSxLQUNyQyxDQUFDSCxFQUFFRyxNQUFNLENBQUNDLE9BQU8sQ0FBQyxjQUNsQjtnQkFDQVIsZUFBZTtZQUNqQjtRQUNGO1FBRUFTLFNBQVNDLGdCQUFnQixDQUFDLFNBQVNQO1FBQ25DLE9BQU87WUFDTE0sU0FBU0UsbUJBQW1CLENBQUMsU0FBU1I7UUFDeEM7SUFDRixHQUFHO1FBQUNKO1FBQWFDO0tBQWU7SUFFaEMscUJBQ0U7OzBCQUNFLDhEQUFDWTtnQkFBS0MsU0FBU1g7MEJBQ2IsNEVBQUNSLDRDQUFHQTtvQkFBQ29CLE9BQU87b0JBQVlDLFFBQVE7b0JBQU1DLE1BQU1qQjs7Ozs7Ozs7Ozs7MEJBRTlDLDhEQUFDSixtREFBVUE7Z0JBQUNxQixNQUFNakI7Z0JBQWFrQixTQUFTakI7Z0JBQWdCa0IsS0FBS2pCOzBCQUMzRCw0RUFBQ2tCO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQUdELFdBQVk7c0NBQTZCOzs7Ozs7c0NBQzdDLDhEQUFDeEIsNkNBQUlBOzs7OztzQ0FDTCw4REFBQzBCO3NDQUNHOzs7Ozs7c0NBSUosOERBQUNDOzs7OztzQ0FDRCw4REFBQ0Q7O2dDQUNHO2dDQU0rRDs7Ozs7OztzQ0FFbkUsOERBQUNDOzs7OztzQ0FDRCw4REFBQ0Q7O2dDQUNHO2dDQUM2Qzs7Ozs7OztzQ0FFakQsOERBQUNDOzs7OztzQ0FDRCw4REFBQ0Q7c0NBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRZDtHQS9Ed0J4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWJvdXRNZS5qc3g/YTUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUYWIgZnJvbSBcIi4vVGFiXCI7XG5pbXBvcnQgU2lkZURyYXdlciBmcm9tIFwiLi9TaWRlRHJhd2VyXCI7XG5pbXBvcnQgRG90cyBmcm9tIFwiLi9Eb3RzXCI7XG5pbXBvcnQgeyBnbG9vY2sgfSBmcm9tIFwiLi4vZm9udHNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0TWUoeyBhYm91dE1lT3Blbiwgc2V0QWJvdXRNZU9wZW4gfSkge1xuICBjb25zdCBhYm91dE1lUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IG9wZW5EcmF3ZXIgPSAoKSA9PiB7XG4gICAgaWYgKGFib3V0TWVPcGVuKSByZXR1cm47XG4gICAgc2V0QWJvdXRNZU9wZW4odHJ1ZSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2xvc2VEcmF3ZXIgPSAoZSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBhYm91dE1lUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgIWFib3V0TWVSZWYuY3VycmVudC5jb250YWlucyhlLnRhcmdldCkgJiZcbiAgICAgICAgIWUudGFyZ2V0LmNsb3Nlc3QoXCIuYWJvdXQtbWVcIilcbiAgICAgICkge1xuICAgICAgICBzZXRBYm91dE1lT3BlbihmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZURyYXdlcik7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZURyYXdlcik7XG4gICAgfTtcbiAgfSwgW2Fib3V0TWVPcGVuLCBzZXRBYm91dE1lT3Blbl0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e29wZW5EcmF3ZXJ9ID5cbiAgICAgICAgPFRhYiB0aXRsZT17XCJBYm91dCBNZVwifSBudW1iZXI9e1wiMDFcIn0gb3Blbj17YWJvdXRNZU9wZW59IC8+XG4gICAgICA8L3NwYW4+XG4gICAgICA8U2lkZURyYXdlciBvcGVuPXthYm91dE1lT3Blbn0gc2V0T3Blbj17c2V0QWJvdXRNZU9wZW59IHJlZj17YWJvdXRNZVJlZn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc2NyZWVuLW1kIGFib3V0LW1lXCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCBteS0xMiB0ZXh0LTR4bCB0ZXh0LXdoaXRlYH0+IEFib3V0IE1l8J+RizwvaDI+XG4gICAgICAgICAgPERvdHMgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtgIEhpISBJJ20gQ2hyaXMhIEknbSBhIGZ1bGwgc3RhY2sgU29mdHdhcmUgRW5naW5lZXIgbG9va2luZyBmb3IgYVxuICAgICAgICAgIEp1bmlvciBEZXZlbG9wZXIgcG9zaXRpb24uIEknbSBwYXNzaW9uYXRlIGFib3V0IHNvZnR3YXJlIHRoYXQgbGV2ZWxzXG4gICAgICAgICAgcGxheWluZyBmaWVsZHMgYW5kIGNoYW5nZXMgdGhlIHdheSB3ZSBsaXZlIG91ciBsaXZlcy5gfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtgQmVmb3JlIGJlY29taW5nIGEgc29mdHdhcmUgZW5naW5lZXIgSSB3YXMgYSBTZW5pb3IgSW5zdGFsbGVyIGRvaW5nXG4gICAgICAgICAgcmVzaWRlbnRpYWwgc29sYXIgaW5zdGFsbGF0aW9ucy4gTXkgcm9sZSBtZWFudCBxdWFsaXR5IGFuZCBzYWZlXG4gICAgICAgICAgaW5zdGFsbGF0aW9ucywgZm9yIGNsaWVudHMgYW5kIG15IHRlYW0sIGFsbCB3aXRoaW4gdGhlIHNwYW4gb2Ygb25lXG4gICAgICAgICAgZGF5LiBJdCB3YXMgZnJvbSB0aGlzIHdvcmsgdGhhdCBJIGxlYXJuZWQgSSBlbmpveWVkIGNyZWF0aXZlIHByb2JsZW1cbiAgICAgICAgICBzb2x2aW5nIGFuZCB3YW50ZWQgYSBjYXJlZXIgaW4gd2hpY2ggSSB3YXMgYWx3YXlzIGxlYXJuaW5nIGFuZFxuICAgICAgICAgIGNvbnN0YW50bHkgYmVpbmcgY2hhbGxlbmdlZCwgYXMgd2VsbCBhcyB0aGUgc2Vuc2Ugb2YgY29tcGxldGlvbiB0aGF0XG4gICAgICAgICAgY29tZXMgZnJvbSBzZWVpbmcgYSBwcm9qZWN0IGluIGFsbCBhc3BlY3RzIGZyb20gc3RhcnQgdG8gZmluaXNoLmB9e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtgIFdoZW4gSSBhbSBub3Qgd29ya2luZyBJIGFtIGJhY2twYWNraW5nIGluIGEgbmF0aW9uYWwgZm9yZXN0IG9yXG4gICAgICAgICAgZXhwbG9yaW5nIGEgcGFydCBvZiBNZXhpY28gSSd2ZSBuZXZlciBiZWVuIHRvLmB9e1wiIFwifVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIHtgSSdtIGN1cnJlbnRseSBsb2NhdGVkIGluIFBvcnRsYW5kLCBPUiBidXQgbG9va2luZyB0byByZWxvY2F0ZSBnaXZlblxuICAgICAgICAgIHRoZSByaWdodCBvcHBvcnR1bml0eSEgUGxlYXNlIGZlZWwgZnJlZSB0byBjb250YWN0IG1lIHRvIGRpc2N1c3Mgd29ya1xuICAgICAgICAgIG9wcG9ydHVuaXRpZXMgb3IgcG9zc2libGUgY29sbGFib3JhdGlvbnMuYH1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TaWRlRHJhd2VyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiVGFiIiwiU2lkZURyYXdlciIsIkRvdHMiLCJnbG9vY2siLCJBYm91dE1lIiwiYWJvdXRNZU9wZW4iLCJzZXRBYm91dE1lT3BlbiIsImFib3V0TWVSZWYiLCJvcGVuRHJhd2VyIiwiY2xvc2VEcmF3ZXIiLCJlIiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiY2xvc2VzdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzcGFuIiwib25DbGljayIsInRpdGxlIiwibnVtYmVyIiwib3BlbiIsInNldE9wZW4iLCJyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJiciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AboutMe.jsx\n"));

/***/ })

});