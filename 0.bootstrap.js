(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/digitigid.js":
/*!***************************!*\
  !*** ../pkg/digitigid.js ***!
  \***************************/
/*! exports provided: predict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digitigid_bg.wasm */ \"../pkg/digitigid_bg.wasm\");\n/* harmony import */ var _digitigid_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digitigid_bg.js */ \"../pkg/digitigid_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"predict\", function() { return _digitigid_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"predict\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/digitigid.js?");

/***/ }),

/***/ "../pkg/digitigid_bg.js":
/*!******************************!*\
  !*** ../pkg/digitigid_bg.js ***!
  \******************************/
/*! exports provided: predict */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"predict\", function() { return predict; });\n/* harmony import */ var _digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digitigid_bg.wasm */ \"../pkg/digitigid_bg.wasm\");\n\n\nlet cachedUint32Memory0;\nfunction getUint32Memory0() {\n    if (cachedUint32Memory0.byteLength === 0) {\n        cachedUint32Memory0 = new Uint32Array(_digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedUint32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nfunction passArray32ToWasm0(arg, malloc) {\n    const ptr = malloc(arg.length * 4);\n    getUint32Memory0().set(arg, ptr / 4);\n    WASM_VECTOR_LEN = arg.length;\n    return ptr;\n}\n\nlet cachedInt32Memory0;\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(_digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedInt32Memory0;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0;\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(_digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n* @param {Int32Array} data\n* @returns {string}\n*/\nfunction predict(data) {\n    try {\n        const retptr = _digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n        const ptr0 = passArray32ToWasm0(data, _digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"]);\n        const len0 = WASM_VECTOR_LEN;\n        _digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"predict\"](retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        _digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        _digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n    }\n}\n\ncachedInt32Memory0 = new Int32Array(_digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\ncachedUint32Memory0 = new Uint32Array(_digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\ncachedUint8Memory0 = new Uint8Array(_digitigid_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/digitigid_bg.js?");

/***/ }),

/***/ "../pkg/digitigid_bg.wasm":
/*!********************************!*\
  !*** ../pkg/digitigid_bg.wasm ***!
  \********************************/
/*! exports provided: memory, predict, __wbindgen_add_to_stack_pointer, __wbindgen_malloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/digitigid_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst pkg_1 = __webpack_require__(/*! ../pkg */ \"../pkg/digitigid.js\");\nconst N = 28 * 9;\nconst D = 15;\nconst HALF_D = Math.floor(D / 2);\nconst data = new Int32Array(N * N).fill(0);\nconst gyouza = document.getElementById('gyouza');\ngyouza.style.border = \"3px solid\";\nconst ctx = gyouza.getContext('2d');\nlet isMouseDown = false;\ndocument.onmousedown = function (ev) {\n    const y = ev.clientY;\n    const x = ev.clientX;\n    ctx.beginPath();\n    isMouseDown = true;\n};\ndocument.onmousemove = function (ev) {\n    if (!isMouseDown)\n        return;\n    const x = ev.clientX;\n    const y = ev.clientY;\n    ctx.lineTo(x - HALF_D, y - HALF_D);\n    ctx.lineCap = \"round\";\n    ctx.lineWidth = D;\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n    const y0 = Math.max(0, Math.floor(y) - HALF_D);\n    const y1 = Math.min(N - 1, Math.floor(y) + HALF_D);\n    const x0 = Math.max(0, Math.floor(x) - HALF_D);\n    const x1 = Math.min(N - 1, Math.floor(x) + HALF_D);\n    for (let i = y0; i <= y1; i++) {\n        for (let j = x0; j <= x1; j++) {\n            data[i * N + j] = 1;\n        }\n    }\n    const prob = (0, pkg_1.predict)(data).split(\"$\").map((x) => Number(x));\n    const num = prob.map((x, i) => [x, i]).reduce((a, b) => a[0] > b[0] ? a : b)[1];\n    document.getElementById('num').textContent = num.toString();\n};\ndocument.onmouseup = function (_ev) {\n    isMouseDown = false;\n};\nconst button = document.getElementById('clear');\nbutton.onclick = function () {\n    ctx.clearRect(0, 0, gyouza.width, gyouza.height);\n    data.fill(0);\n    document.getElementById('num').textContent = \"?\";\n};\ndocument.ontouchstart = function (ev) {\n    ev.preventDefault();\n    const y = ev.touches[0].clientY;\n    const x = ev.touches[0].clientX;\n    ctx.beginPath();\n    isMouseDown = true;\n};\ndocument.ontouchmove = function (ev) {\n    if (!isMouseDown)\n        return;\n    ev.preventDefault();\n    const y = ev.touches[0].clientY;\n    const x = ev.touches[0].clientX;\n    ctx.lineTo(x - HALF_D, y - HALF_D);\n    ctx.lineCap = \"round\";\n    ctx.lineWidth = D;\n    ctx.strokeStyle = 'black';\n    ctx.stroke();\n    const y0 = Math.max(0, Math.floor(y) - HALF_D);\n    const y1 = Math.min(N - 1, Math.floor(y) + HALF_D);\n    const x0 = Math.max(0, Math.floor(x) - HALF_D);\n    const x1 = Math.min(N - 1, Math.floor(x) + HALF_D);\n    for (let i = y0; i <= y1; i++) {\n        for (let j = x0; j <= x1; j++) {\n            data[i * N + j] = 1;\n        }\n    }\n    const prob = (0, pkg_1.predict)(data).split(\"$\").map((x) => Number(x));\n    const num = prob.map((x, i) => [x, i]).reduce((a, b) => a[0] > b[0] ? a : b)[1];\n    document.getElementById('num').textContent = num.toString();\n};\ndocument.ontouchend = function (_ev) {\n    isMouseDown = false;\n};\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);