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

/***/ "(app-pages-browser)/./src/app/components/SideDrawer.jsx":
/*!*******************************************!*\
  !*** ./src/app/components/SideDrawer.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../fonts */ \"(app-pages-browser)/./src/app/fonts.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst SideDrawer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(_c = (param, ref)=>{\n    let { open, setOpen, children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\\n    fixed w-2/3 flex transition-all z-30 duration-500 h-screen ease-in-out top-0 bg-black/50 right-0 overflow-y-auto overflow-x-hidden p-6\\n    \".concat(open ? \"translate-x-0 \" : \"translate-x-[-100vw] overflow-hidden \", \"\\n    \"),\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-base-200 rounded-xl transition-all duration-500 mx-4 ease-in-out text-white leading-8 my-auto\\n         \".concat(_fonts__WEBPACK_IMPORTED_MODULE_1__.baskervville.className, \"   \").concat(open ? \"translate-x-0\" : \"translate-x-full overflow-hidden\"),\n            children: children\n        }, void 0, false, {\n            fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/SideDrawer.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/cludwell/november-cohort/portfolio-jobsearch/src/app/components/SideDrawer.jsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n});\n_c1 = SideDrawer;\nSideDrawer.displayName = \"SideDrawer\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideDrawer);\nvar _c, _c1;\n$RefreshReg$(_c, \"SideDrawer$forwardRef\");\n$RefreshReg$(_c1, \"SideDrawer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9TaWRlRHJhd2VyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDTTtBQUM5QyxNQUFNRywyQkFBYUQsaURBQVVBLE1BQUMsUUFBOEJFO1FBQTdCLEVBQUVDLElBQUksRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7SUFFeEQscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVcscUpBRXVELE9BQWxFSixPQUFPLG1CQUFtQix5Q0FBd0M7UUFFbEVELEtBQUtBO2tCQUVMLDRFQUFDSTtZQUNDQyxXQUFXLDhHQUVUSixPQURDTCxnREFBWUEsQ0FBQ1MsU0FBUyxFQUFDLE9BRXpCLE9BRENKLE9BQU8sa0JBQWtCO3NCQUcxQkU7Ozs7Ozs7Ozs7O0FBSVQ7O0FBQ0FKLFdBQVdPLFdBQVcsR0FBRztBQUN6QiwrREFBZVAsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvU2lkZURyYXdlci5qc3g/OGJiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYXNrZXJ2dmlsbGUgfSBmcm9tIFwiLi4vZm9udHNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgU2lkZURyYXdlciA9IGZvcndhcmRSZWYoKHsgb3Blbiwgc2V0T3BlbiwgY2hpbGRyZW4gfSwgcmVmKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BcbiAgICBmaXhlZCB3LTIvMyBmbGV4IHRyYW5zaXRpb24tYWxsIHotMzAgZHVyYXRpb24tNTAwIGgtc2NyZWVuIGVhc2UtaW4tb3V0IHRvcC0wIGJnLWJsYWNrLzUwIHJpZ2h0LTAgb3ZlcmZsb3cteS1hdXRvIG92ZXJmbG93LXgtaGlkZGVuIHAtNlxuICAgICR7b3BlbiA/IFwidHJhbnNsYXRlLXgtMCBcIiA6IFwidHJhbnNsYXRlLXgtWy0xMDB2d10gb3ZlcmZsb3ctaGlkZGVuIFwifVxuICAgIGB9XG4gICAgICByZWY9e3JlZn1cbiAgICA+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGJnLWJhc2UtMjAwIHJvdW5kZWQteGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIG14LTQgZWFzZS1pbi1vdXQgdGV4dC13aGl0ZSBsZWFkaW5nLTggbXktYXV0b1xuICAgICAgICAgJHtiYXNrZXJ2dmlsbGUuY2xhc3NOYW1lfSAgICR7XG4gICAgICAgICAgb3BlbiA/IFwidHJhbnNsYXRlLXgtMFwiIDogXCJ0cmFuc2xhdGUteC1mdWxsIG92ZXJmbG93LWhpZGRlblwiXG4gICAgICAgIH1gfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuU2lkZURyYXdlci5kaXNwbGF5TmFtZSA9IFwiU2lkZURyYXdlclwiO1xuZXhwb3J0IGRlZmF1bHQgU2lkZURyYXdlcjtcbiJdLCJuYW1lcyI6WyJiYXNrZXJ2dmlsbGUiLCJ1c2VFZmZlY3QiLCJmb3J3YXJkUmVmIiwiU2lkZURyYXdlciIsInJlZiIsIm9wZW4iLCJzZXRPcGVuIiwiY2hpbGRyZW4iLCJkaXYiLCJjbGFzc05hbWUiLCJkaXNwbGF5TmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/SideDrawer.jsx\n"));

/***/ })

});