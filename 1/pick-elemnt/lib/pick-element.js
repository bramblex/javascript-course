/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nconst simple_vm_1 = __webpack_require__(/*! ./simple-vm */ 1);\r\nconst element_picker_1 = __webpack_require__(/*! ./element-picker */ 2);\r\nconst utils_1 = __webpack_require__(/*! ./utils */ 3);\r\nfunction test() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const path = yield element_picker_1.pickElementByClick();\r\n        console.log(JSON.stringify(path));\r\n        console.log(element_picker_1.getElementFromPath(path));\r\n    });\r\n}\r\nconst id = 'element-picker-box';\r\nconst ui = utils_1.box(id);\r\nconst style = utils_1.css(`\n#${id} {\n  position: fixed;\n  right: 0;\n  top: 0;\n  padding: 0.5em 1em;\n  background-color: #EFEFEF;\n}\n`);\r\n// init UI\r\nexports.vm = new simple_vm_1.SimpleVM({\r\n    el: ui,\r\n    data: {\r\n        msg: 'hello',\r\n        _item: '',\r\n        list: []\r\n    },\r\n    funcs: {\r\n        change: (vm, target, event) => {\r\n            vm.modify(data => {\r\n                const _target = target;\r\n                data._item = _target.value;\r\n            });\r\n        },\r\n        submit: (vm, target, event) => {\r\n            vm.modify(data => {\r\n                data.list.push(data._item);\r\n                data._item = '';\r\n            });\r\n        }\r\n    },\r\n    template: data => `\n    <div>\n      <h2>${data.msg}</h2>\n      <input data-on-change=\"change\" value=\"${data._item}\"></input><button data-on-click=\"submit\">提交</button>\n      <ul>\n        ${data.list.map(item => `<li>${item}</li>`).join('')}\n      </ul>\n    </div>\n  `\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXgudHM/ZjQxZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuaW1wb3J0IHsgU2ltcGxlVk0gfSBmcm9tICcuL3NpbXBsZS12bSdcbmltcG9ydCB7IEVsZW1lbnRQYXRoLCBnZXRFbGVtZW50RnJvbVBhdGgsIHBpY2tFbGVtZW50QnlDbGlja30gZnJvbSAnLi9lbGVtZW50LXBpY2tlcidcbmltcG9ydCB7IGJveCwgY3NzIH0gZnJvbSAnLi91dGlscydcblxuYXN5bmMgZnVuY3Rpb24gdGVzdCgpIHtcbiAgY29uc3QgcGF0aCA9IGF3YWl0IHBpY2tFbGVtZW50QnlDbGljaygpXG4gIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBhdGgpKVxuICBjb25zb2xlLmxvZyhnZXRFbGVtZW50RnJvbVBhdGgocGF0aCkpXG59XG5cbmNvbnN0IGlkID0gJ2VsZW1lbnQtcGlja2VyLWJveCdcbmNvbnN0IHVpID0gYm94KGlkKVxuXG5jb25zdCBzdHlsZSA9IGNzcyhgXG4jJHtpZH0ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjtcbn1cbmApXG5cbi8vIGluaXQgVUlcblxuZXhwb3J0IGNvbnN0IHZtID0gbmV3IFNpbXBsZVZNKHtcbiAgZWw6IHVpLFxuICBkYXRhOiB7XG4gICAgbXNnOiAnaGVsbG8nLFxuICAgIF9pdGVtOiAnJyxcbiAgICBsaXN0OiBbXVxuICB9LFxuICBmdW5jczoge1xuICAgIGNoYW5nZTogKHZtLCB0YXJnZXQsIGV2ZW50KSA9PiB7XG4gICAgICB2bS5tb2RpZnkoZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IF90YXJnZXQgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+dGFyZ2V0KVxuICAgICAgICBkYXRhLl9pdGVtID0gX3RhcmdldC52YWx1ZVxuICAgICAgfSlcbiAgICB9LFxuICAgIHN1Ym1pdDogKHZtLCB0YXJnZXQsIGV2ZW50KSA9PiB7XG4gICAgICB2bS5tb2RpZnkoZGF0YSA9PiB7XG4gICAgICAgIGRhdGEubGlzdC5wdXNoKGRhdGEuX2l0ZW0pXG4gICAgICAgIGRhdGEuX2l0ZW0gPSAnJ1xuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIHRlbXBsYXRlOiBkYXRhID0+IGBcbiAgICA8ZGl2PlxuICAgICAgPGgyPiR7ZGF0YS5tc2d9PC9oMj5cbiAgICAgIDxpbnB1dCBkYXRhLW9uLWNoYW5nZT1cImNoYW5nZVwiIHZhbHVlPVwiJHtkYXRhLl9pdGVtfVwiPjwvaW5wdXQ+PGJ1dHRvbiBkYXRhLW9uLWNsaWNrPVwic3VibWl0XCI+5o+Q5LqkPC9idXR0b24+XG4gICAgICA8dWw+XG4gICAgICAgICR7ZGF0YS5saXN0Lm1hcChpdGVtID0+IGA8bGk+JHtpdGVtfTwvbGk+YCkuam9pbignJyl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICBgXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvaW5kZXgudHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!**************************!*\
  !*** ./src/simple-vm.ts ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.event_map = {\r\n    click: 'mouseup',\r\n    change: 'focusout'\r\n};\r\nclass SimpleVM {\r\n    constructor({ el: _el, data, template, funcs }) {\r\n        const vm = this;\r\n        if (typeof _el === 'string') {\r\n            const el = document.getElementById(_el);\r\n            if (el) {\r\n                this.el = el;\r\n            }\r\n            else {\r\n                throw new Error('Cannot find element by id:' + _el);\r\n            }\r\n        }\r\n        else {\r\n            this.el = _el;\r\n        }\r\n        const el = this.el;\r\n        for (const alias_event_name in exports.event_map) {\r\n            const event_name = exports.event_map[alias_event_name];\r\n            el.addEventListener(event_name, function (event) {\r\n                let target = event.target;\r\n                while (target && target !== el) {\r\n                    const dataset_name = 'on' + alias_event_name.slice(0, 1).toUpperCase() + alias_event_name.slice(1);\r\n                    const func_name = target.dataset[dataset_name];\r\n                    if (func_name && vm.funcs[func_name]) {\r\n                        const func = vm.funcs[func_name];\r\n                        func(vm, target, event);\r\n                    }\r\n                    target = target.parentElement;\r\n                }\r\n            });\r\n        }\r\n        this.data = data;\r\n        this.template = template;\r\n        this.funcs = funcs;\r\n        this.render();\r\n    }\r\n    render() { this.el.innerHTML = this.template(this.data); }\r\n    modify(cb) { cb(this.data); this.render(); }\r\n}\r\nexports.SimpleVM = SimpleVM;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2ltcGxlLXZtLnRzPzI4OWQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydCBjb25zdCBldmVudF9tYXAgPSB7XG4gIGNsaWNrOiAnbW91c2V1cCcsXG4gIGNoYW5nZTogJ2ZvY3Vzb3V0J1xufVxuXG5leHBvcnQgdHlwZSBDYWxsYmFja0Z1bmMgPSAodm06IFNpbXBsZVZNLCBlbDogSFRNTEVsZW1lbnQsIGV2ZW50OiBFdmVudCkgPT4gdm9pZFxuXG5leHBvcnQgaW50ZXJmYWNlIFZNT3B0cyB7XG4gIGVsOiBzdHJpbmcgfCBIVE1MRWxlbWVudFxuICBkYXRhOiBhbnlcbiAgdGVtcGxhdGU6IChkYXRhOiBhbnkpID0+IHN0cmluZ1xuICBmdW5jczogeyBbcHJvcE5hbWVzOiBzdHJpbmddOiBDYWxsYmFja0Z1bmMgfVxufVxuXG5leHBvcnQgY2xhc3MgU2ltcGxlVk0ge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudFxuICBwcml2YXRlIGRhdGE6IGFueVxuICBwcml2YXRlIGZ1bmNzOiB7IFtwcm9wTmFtZXM6IHN0cmluZ106IENhbGxiYWNrRnVuYyB9XG4gIHByaXZhdGUgdGVtcGxhdGU6IChkYXRhKSA9PiBzdHJpbmdcblxuICBjb25zdHJ1Y3Rvcih7IGVsOiBfZWwsIGRhdGEsIHRlbXBsYXRlLCBmdW5jcyB9OiBWTU9wdHMpIHtcbiAgICBjb25zdCB2bSA9IHRoaXNcblxuICAgIGlmICh0eXBlb2YgX2VsID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChfZWwpXG4gICAgICBpZiAoZWwpIHsgdGhpcy5lbCA9IGVsIH0gZWxzZSB7IHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgZWxlbWVudCBieSBpZDonICsgX2VsKSB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWwgPSBfZWxcbiAgICB9XG5cbiAgICBjb25zdCBlbCA9IHRoaXMuZWxcblxuICAgIGZvciAoY29uc3QgYWxpYXNfZXZlbnRfbmFtZSBpbiBldmVudF9tYXApIHtcbiAgICAgIGNvbnN0IGV2ZW50X25hbWUgPSBldmVudF9tYXBbYWxpYXNfZXZlbnRfbmFtZV1cblxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudF9uYW1lLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgbGV0IHRhcmdldDogSFRNTEVsZW1lbnQgfCBudWxsID0gPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldFxuXG4gICAgICAgIHdoaWxlICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSBlbCkge1xuICAgICAgICAgIGNvbnN0IGRhdGFzZXRfbmFtZSA9ICdvbicgKyBhbGlhc19ldmVudF9uYW1lLnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBhbGlhc19ldmVudF9uYW1lLnNsaWNlKDEpXG4gICAgICAgICAgY29uc3QgZnVuY19uYW1lID0gdGFyZ2V0LmRhdGFzZXRbZGF0YXNldF9uYW1lXVxuICAgICAgICAgIGlmIChmdW5jX25hbWUgJiYgdm0uZnVuY3NbZnVuY19uYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgZnVuYyA9IHZtLmZ1bmNzW2Z1bmNfbmFtZV1cbiAgICAgICAgICAgIGZ1bmModm0sIHRhcmdldCwgZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5wYXJlbnRFbGVtZW50XG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICB9XG5cbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlXG4gICAgdGhpcy5mdW5jcyA9IGZ1bmNzXG4gICAgdGhpcy5yZW5kZXIoKVxuICB9XG5cbiAgcmVuZGVyKCkgeyB0aGlzLmVsLmlubmVySFRNTCA9IHRoaXMudGVtcGxhdGUodGhpcy5kYXRhKSB9XG4gIG1vZGlmeShjYjogKGRhdGEpID0+IHZvaWQpOiB2b2lkIHsgY2IodGhpcy5kYXRhKTsgdGhpcy5yZW5kZXIoKSB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9zaW1wbGUtdm0udHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBN0NBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/element-picker.ts ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction getChildElementIndex(element) {\r\n    const { parentElement } = element;\r\n    if (!parentElement) {\r\n        throw new Error('Has not parent');\r\n    }\r\n    const { children } = parentElement;\r\n    for (let i = 0, l = children.length; i < l; i++) {\r\n        if (children[i] === element)\r\n            return i;\r\n    }\r\n    throw new Error('impossable');\r\n}\r\nfunction getElementPathTo(_element) {\r\n    let head = 'body';\r\n    let path = [];\r\n    const body = document.body;\r\n    const html = body.parentElement;\r\n    let element = _element;\r\n    while (true) {\r\n        const { parentElement, id } = element;\r\n        if (element === body) {\r\n            break;\r\n        }\r\n        if (element === html) {\r\n            head = 'html';\r\n            break;\r\n        }\r\n        if (id && id !== '') {\r\n            head = '#' + id;\r\n            break;\r\n        }\r\n        path.push(getChildElementIndex(element));\r\n        if (!parentElement) {\r\n            throw new Error('impossable');\r\n        }\r\n        element = parentElement;\r\n    }\r\n    path = path.reverse();\r\n    return [head, path];\r\n}\r\nexports.getElementPathTo = getElementPathTo;\r\nfunction getElementFromPath(element_path) {\r\n    const [head, path] = element_path;\r\n    let element;\r\n    if (head === 'body') {\r\n        element = document.body;\r\n    }\r\n    else if (head === 'html') {\r\n        element = document.body.parentElement;\r\n    }\r\n    else {\r\n        element = document.getElementById(head.replace('#', ''));\r\n    }\r\n    for (let i of path) {\r\n        element = element.children[i];\r\n        if (!element) {\r\n            throw new Error('Cannot find Element from path: ' + JSON.stringify(element_path));\r\n        }\r\n    }\r\n    return element;\r\n}\r\nexports.getElementFromPath = getElementFromPath;\r\nfunction pickElementByClick() {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        const _onclick = document.onclick;\r\n        const _onmouseover = document.onmouseover;\r\n        const _onmouseout = document.onmouseout;\r\n        let _backgroundColor = null;\r\n        const promise = new Promise(resolve => {\r\n            document.onclick =\r\n                event => {\r\n                    event.stopPropagation();\r\n                    event.preventDefault();\r\n                    const element = event.target;\r\n                    element.style.backgroundColor = _backgroundColor;\r\n                    resolve(event.target);\r\n                };\r\n        });\r\n        document.onmouseover = event => {\r\n            const element = event.target;\r\n            _backgroundColor = element.style.backgroundColor;\r\n            element.style.backgroundColor = \"yellow\";\r\n        };\r\n        document.onmouseout = event => {\r\n            const element = event.target;\r\n            element.style.backgroundColor = _backgroundColor;\r\n        };\r\n        const element = yield promise;\r\n        document.onclick = _onclick;\r\n        document.onmouseover = _onmouseover;\r\n        document.onmouseout = _onmouseout;\r\n        return getElementPathTo(element);\r\n    });\r\n}\r\nexports.pickElementByClick = pickElementByClick;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvZWxlbWVudC1waWNrZXIudHM/NWY3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB0eXBlIEVsZW1lbnRQYXRoID0gW3N0cmluZywgbnVtYmVyW11dXG5cbmZ1bmN0aW9uIGdldENoaWxkRWxlbWVudEluZGV4KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgY29uc3QgeyBwYXJlbnRFbGVtZW50IH0gPSBlbGVtZW50XG4gIGlmICghcGFyZW50RWxlbWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSGFzIG5vdCBwYXJlbnQnKVxuICB9XG4gIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHBhcmVudEVsZW1lbnRcbiAgZm9yIChsZXQgaSA9IDAsIGwgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoY2hpbGRyZW5baV0gPT09IGVsZW1lbnQpIHJldHVybiBpXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdpbXBvc3NhYmxlJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEVsZW1lbnRQYXRoVG8oX2VsZW1lbnQ6IEhUTUxFbGVtZW50KTogRWxlbWVudFBhdGgge1xuICBsZXQgaGVhZDogc3RyaW5nID0gJ2JvZHknXG4gIGxldCBwYXRoOiBudW1iZXJbXSA9IFtdXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5XG4gIGNvbnN0IGh0bWwgPSBib2R5LnBhcmVudEVsZW1lbnRcblxuICBsZXQgZWxlbWVudCA9IF9lbGVtZW50XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCB7IHBhcmVudEVsZW1lbnQsIGlkIH0gPSBlbGVtZW50XG4gICAgaWYgKGVsZW1lbnQgPT09IGJvZHkpIHsgYnJlYWsgfVxuICAgIGlmIChlbGVtZW50ID09PSBodG1sKSB7IGhlYWQgPSAnaHRtbCc7IGJyZWFrIH1cbiAgICBpZiAoaWQgJiYgaWQgIT09ICcnKSB7IGhlYWQgPSAnIycgKyBpZDsgYnJlYWsgfVxuICAgIHBhdGgucHVzaChnZXRDaGlsZEVsZW1lbnRJbmRleChlbGVtZW50KSlcbiAgICBpZiAoIXBhcmVudEVsZW1lbnQpIHsgdGhyb3cgbmV3IEVycm9yKCdpbXBvc3NhYmxlJykgfVxuICAgIGVsZW1lbnQgPSBwYXJlbnRFbGVtZW50XG4gIH1cblxuICBwYXRoID0gcGF0aC5yZXZlcnNlKClcbiAgcmV0dXJuIFtoZWFkLCBwYXRoXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudEZyb21QYXRoKGVsZW1lbnRfcGF0aDogRWxlbWVudFBhdGgpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IFtoZWFkLCBwYXRoXSA9IGVsZW1lbnRfcGF0aFxuICBsZXQgZWxlbWVudFxuXG4gIGlmIChoZWFkID09PSAnYm9keScpIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuYm9keVxuICB9IGVsc2UgaWYgKGhlYWQgPT09ICdodG1sJykge1xuICAgIGVsZW1lbnQgPSBkb2N1bWVudC5ib2R5LnBhcmVudEVsZW1lbnRcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGVhZC5yZXBsYWNlKCcjJywgJycpKVxuICB9XG5cbiAgZm9yIChsZXQgaSBvZiBwYXRoKSB7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQuY2hpbGRyZW5baV1cbiAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGZpbmQgRWxlbWVudCBmcm9tIHBhdGg6ICcgKyBKU09OLnN0cmluZ2lmeShlbGVtZW50X3BhdGgpKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwaWNrRWxlbWVudEJ5Q2xpY2soKSB7XG4gIGNvbnN0IF9vbmNsaWNrID0gZG9jdW1lbnQub25jbGlja1xuICBjb25zdCBfb25tb3VzZW92ZXIgPSBkb2N1bWVudC5vbm1vdXNlb3ZlclxuICBjb25zdCBfb25tb3VzZW91dCA9IGRvY3VtZW50Lm9ubW91c2VvdXRcblxuICBsZXQgX2JhY2tncm91bmRDb2xvcjogc3RyaW5nIHwgbnVsbCA9IG51bGxcbiAgY29uc3QgcHJvbWlzZTogUHJvbWlzZTxIVE1MRWxlbWVudD4gPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBkb2N1bWVudC5vbmNsaWNrID1cbiAgICAgIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gX2JhY2tncm91bmRDb2xvclxuICAgICAgICByZXNvbHZlKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudClcbiAgICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5vbm1vdXNlb3ZlciA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgX2JhY2tncm91bmRDb2xvciA9IGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yXG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInllbGxvd1wiXG4gIH1cbiAgZG9jdW1lbnQub25tb3VzZW91dCA9IGV2ZW50ID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50XG4gICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBfYmFja2dyb3VuZENvbG9yXG4gIH1cblxuICBjb25zdCBlbGVtZW50ID0gYXdhaXQgcHJvbWlzZVxuXG4gIGRvY3VtZW50Lm9uY2xpY2sgPSBfb25jbGlja1xuICBkb2N1bWVudC5vbm1vdXNlb3ZlciA9IF9vbm1vdXNlb3ZlclxuICBkb2N1bWVudC5vbm1vdXNlb3V0ID0gX29ubW91c2VvdXRcbiAgcmV0dXJuIGdldEVsZW1lbnRQYXRoVG8oZWxlbWVudClcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2VsZW1lbnQtcGlja2VyLnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFwQkE7QUFzQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXBCQTtBQXNCQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFqQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n// create css\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nfunction css(code) {\r\n    const style = document.createElement('style');\r\n    style.type = 'text/css';\r\n    style.innerHTML = code;\r\n    document.head.appendChild(style);\r\n    return style;\r\n}\r\nexports.css = css;\r\nfunction box(id) {\r\n    const div = document.createElement('div');\r\n    div.id = id;\r\n    document.body.appendChild(div);\r\n    return div;\r\n}\r\nexports.box = box;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvdXRpbHMudHM/ZTE0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGNyZWF0ZSBjc3NcblxuZXhwb3J0IGZ1bmN0aW9uIGNzcyhjb2RlOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKVxuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJ1xuICBzdHlsZS5pbm5lckhUTUwgPSBjb2RlXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpXG4gIHJldHVybiBzdHlsZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm94KGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRpdi5pZCA9IGlkXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxuICByZXR1cm4gZGl2XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlscy50cyJdLCJtYXBwaW5ncyI6IjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);