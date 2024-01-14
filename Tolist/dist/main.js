/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toDodList: () => (/* binding */ toDodList)\n/* harmony export */ });\n\nconst itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) :\n[];\nconsole.log(itemsArray)\n\nfunction displayItems() {\n    let items = \"\";\n\n    for (let i = 0; i < itemsArray.length; i++) {\n        items += `<div class=\"item\">\n            <div class=\"input-controller\">\n                <textarea disabled>${itemsArray[i]}</textarea>\n                <div class=\"edit-controller\">\n                    <i class=\"fa-solid fa-check deleteBtn\"></i>\n                    <i class=\"fa-solid fa-pen-to-square editBtn\"></i>\n                </div>\n            </div>\n            <div class=\"update-controller\">\n                <button class=\"saveBtn\">Save</button>\n                <button class=\"cancelBtn\">Cancel</button>\n            </div>\n        </div>`;\n    }\n    document.querySelector('.to-do-list').innerHTML = items;\n\n    deleteItems();\n    editingItems();\n    saveItems();\n    canceleditems();\n}\n\nfunction deleteItems() {\n    let deleteBtn = document.querySelectorAll(\".deleteBtn\");\n    console.log(deleteBtn);\n    deleteBtn.forEach((db, i) => {\n        db.addEventListener('click', () => { deleteelement(i) });\n    });\n}\n\nfunction deleteelement(i) {\n    itemsArray.splice(i, 1);\n    localStorage.setItem('items', JSON.stringify(itemsArray));\n    location.reload();\n}\n\n\nfunction editingItems()\n{\n    const editBtn = document.querySelectorAll('.editBtn');\n\n    editBtn.forEach((eb, i) => {\n        eb.addEventListener('click', () => {\n            editElement(i)\n        });\n    })\n}\nfunction editElement(i) {\n    const textarea = document.querySelectorAll('.input-controller textarea')[i];\n    textarea.removeAttribute('disabled');\n    const editController = document.querySelectorAll('.edit-controller')[i];\n    const updateController = document.querySelectorAll('.update-controller')[i];\n    editController.style.display = 'none';\n    updateController.style.display = 'flex';\n\n    console.log(`Editing element at index ${i}`);\n}\n\nfunction saveItems()\n{\n    const saveBtn = document.querySelectorAll('.saveBtn');\n    saveBtn.forEach((sb, i) => {\n        sb.addEventListener('click', () => {\n            saveElement(i)\n        });\n    })\n}\n\nfunction saveElement(i){\n    const textarea = document.querySelectorAll('.input-controller textarea')[i];\n    const updatedValue = textarea.value;\n\n    itemsArray[i] = updatedValue;\n    localStorage.setItem('items', JSON.stringify(itemsArray));\n    textarea.setAttribute('disabled', 'true');\n    location.reload();\n}\nfunction canceleditems()\n{\n    const cancelBtn = document.querySelectorAll('.cancelBtn');\n    const input = document.querySelectorAll('.input-controller textarea')\n    const update = document.querySelectorAll('.update-controller')\n\n    cancelBtn.forEach((cb, i) => {\n\n        cb.addEventListener('click', () => {\n\n            update[i].style.display = 'none'\n            input[i].desabled = true;\n\n        })\n    })\n\n}\nfunction additem()\n{\n    document.getElementById('enter').addEventListener('click', () => {\n\n        const item = document.getElementById('item');\n\n        createItem(item);\n    })\n\n\n}\nfunction createItem(item)\n{\n\n\n    itemsArray.push(item.value);\n    localStorage.setItem('items', JSON.stringify(itemsArray));\n    location.reload();\n\n}\nfunction displayDate() {\n\n    let date = new Date()\n    date = date.toString().split(\" \")\n\n    document.getElementById(\"date\").innerHTML =\n    date[1] + \" \" + date[2] + \" \" + date[3]\n\n  }\nfunction display(){\n\n    window.onload = () => {\n\n        displayDate()\n        displayItems()\n    }\n}\nfunction toDodList()\n{\n    console.log(\"I'm  not ok!\")\n    displayDate()\n    display()\n    additem()\n    createItem()\n\n}\n\n\n\n//# sourceURL=webpack://tolist/./src/app.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n \n    document.body.appendChild((0,_app__WEBPACK_IMPORTED_MODULE_0__.toDodList)());\n});\n\n\n//# sourceURL=webpack://tolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;