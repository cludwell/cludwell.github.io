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

/***/ "(app-pages-browser)/./src/app/components/Tab.jsx":
/*!************************************!*\
  !*** ./src/app/components/Tab.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tab; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ \"(app-pages-browser)/./node_modules/animejs/lib/anime.es.js\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts */ \"(app-pages-browser)/./src/app/fonts.jsx\");\n\n\n\nfunction Tab(param) {\n    let { title, number, open } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"relative flex flex-col justify-center my-20 text-white transition-all duration-200 ease-in-out cursor-pointer hover:translate-x-8 hover:text-orange-600 tab \".concat(open ? \" text-orange-600 translate-x-8 hover:n\" : \"\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_fonts__WEBPACK_IMPORTED_MODULE_2__.bebas.className, \" text-[10rem] absolute opacity-50 left-[-3rem] \"),\n                children: number\n            }, void 0, false, {\n                fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/Tab.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"\".concat(_fonts__WEBPACK_IMPORTED_MODULE_2__.gloock.className, \" text-5xl\"),\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/Tab.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/Tab.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = Tab;\nvar _c;\n$RefreshReg$(_c, \"Tab\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYWIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRCO0FBQ2E7QUFDMUIsU0FBU0csSUFBSSxLQUF1QjtRQUF2QixFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQXZCO0lBQzFCLHFCQUNFLDhEQUFDQztRQUFHQyxXQUFXLCtKQUVkLE9BRENGLE9BQU8sMkNBQTJDOzswQkFFbEQsOERBQUNHO2dCQUNDRCxXQUFXLEdBQW1CLE9BQWhCTix5Q0FBS0EsQ0FBQ00sU0FBUyxFQUFDOzBCQUU3Qkg7Ozs7OzswQkFFSCw4REFBQ0s7Z0JBQUdGLFdBQVcsR0FBb0IsT0FBakJQLDBDQUFNQSxDQUFDTyxTQUFTLEVBQUM7MEJBQWFKOzs7Ozs7Ozs7Ozs7QUFHdEQ7S0Fid0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9UYWIuanN4PzE4MDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFuaW1lIGZyb20gXCJhbmltZWpzXCI7XG5pbXBvcnQgeyBnbG9vY2ssIGJlYmFzIH0gZnJvbSBcIi4uL2ZvbnRzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWIoeyB0aXRsZSwgbnVtYmVyLCBvcGVuIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBteS0yMCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dCBjdXJzb3ItcG9pbnRlciBob3Zlcjp0cmFuc2xhdGUteC04IGhvdmVyOnRleHQtb3JhbmdlLTYwMCB0YWIgJHtcbiAgICAgIG9wZW4gPyBcIiB0ZXh0LW9yYW5nZS02MDAgdHJhbnNsYXRlLXgtOCBob3ZlcjpuXCIgOiAnJ1xuICAgIH1gfSA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7YmViYXMuY2xhc3NOYW1lfSB0ZXh0LVsxMHJlbV0gYWJzb2x1dGUgb3BhY2l0eS01MCBsZWZ0LVstM3JlbV0gYH1cbiAgICAgID5cbiAgICAgICAge251bWJlcn1cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzTmFtZT17YCR7Z2xvb2NrLmNsYXNzTmFtZX0gdGV4dC01eGxgfT57dGl0bGV9PC9oMj5cbiAgICA8L2xpPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImFuaW1lIiwiZ2xvb2NrIiwiYmViYXMiLCJUYWIiLCJ0aXRsZSIsIm51bWJlciIsIm9wZW4iLCJsaSIsImNsYXNzTmFtZSIsImRpdiIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Tab.jsx\n"));

/***/ })

});