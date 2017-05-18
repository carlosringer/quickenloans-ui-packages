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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

var _modalUtility = __webpack_require__(1);

var _modalUtility2 = _interopRequireDefault(_modalUtility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modalContents = document.createElement('div');
var text = document.createElement('p');
text.textContent = 'This is some content type to go into a modal.';
var button = document.createElement('button');
button.textContent = 'Confirm';

modalContents.appendChild(text);
modalContents.appendChild(button);

var modalUtil = (0, _modalUtility2.default)(document);
var modal = modalUtil.createModal({ title: 'This is my title' });

modalUtil.setContents(modal, modalContents);

document.addEventListener('click', function (e) {
    'use strict';

    if (e.target.classList.contains('js-modal-trigger')) {
        modalUtil.showModal(modal);
    }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (document) {

    function createModal(settings) {
        'use strict';

        options = settings || {
            dismissable: true
        };

        var modalContainer = document.createElement('div');
        modalContainer.classList.add('js-modal-container', 'modal-container');

        var modalMask = document.createElement('div');
        modalMask.classList.add('js-modal-mask', 'modal-mask');

        var modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('tabindex', 0);

        if (options.additionalClasses) {
            options.additionalClasses.map(function (className) {
                modal.classList.add(className);
            });
        }

        var modalTitle = document.createElement('div');
        modalTitle.classList.add('modal__title');

        var modalTitleText = document.createElement('h1');
        modalTitleText.classList.add('modal__title-text');
        modalTitleText.textContent = options.title;

        modalTitle.appendChild(modalTitleText);

        var modalContent = document.createElement('div');
        modalContent.classList.add('modal__content');

        modal.appendChild(modalTitle);
        modal.appendChild(modalContent);

        modalContainer.appendChild(modalMask);
        modalContainer.appendChild(modal);

        return modalContainer;
    }

    function setContents(modal, contents) {
        'use strict';

        var wrapper = modal.querySelector('.modal__content');
        wrapper.innerHTML = '';
        wrapper.appendChild(contents);
        return modal;
    }

    function showModal(modal) {
        'use strict';

        if (options.dismissable === true || options.dismissable === undefined) {
            bindDismissModalUIEvents();
        }
        bindFocusModalUIEvents(modal);
        document.body.appendChild(modal);
        focusModal(document);
        return document;
    }

    function hideModal() {
        'use strict';

        [].slice.call(document.querySelectorAll('.modal-container')).map(function (modal) {
            modal.parentNode.removeChild(modal);
        });

        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }

        document.removeEventListener('keydown', hideIfEscape);
        document.removeEventListener('click', hideIfMaskClicked);
        document.removeEventListener('focusin', focusBackToModalBind);

        return document;
    }

    function focusModal() {
        'use strict';

        lastFocusedElement = document.activeElement;
        document.querySelector('.modal').focus();
        return document;
    }

    function bindFocusModalUIEvents(modal) {
        'use strict';

        focusBackToModalBind = focusBackToModal.bind(this, modal);
        document.addEventListener('focusin', focusBackToModalBind);
        return document;
    }

    function focusBackToModal(modal, e) {
        if (!modal.contains(e.target)) {
            modal.querySelector('.modal').focus();
        }
    }

    function bindDismissModalUIEvents() {
        'use strict';

        document.addEventListener('keydown', hideIfEscape);
        document.addEventListener('click', hideIfMaskClicked);
        return document;
    }

    function hideIfEscape(e) {
        if (e.code === 'Escape' || e.keyCode === 27) {
            hideModal(document);
        }
    }

    function hideIfMaskClicked(e) {
        if (e.target.classList.contains('modal-mask')) {
            hideModal();
        }
    }

    return {
        createModal: createModal,
        setContents: setContents,
        showModal: showModal,
        hideModal: hideModal,
        focusModal: focusModal
    };
};

var options = {};
var lastFocusedElement = void 0; // for saving where focus was before popping the modal;


// TODO: jsdoc or some other doc block system
// TODO: ship es5 in a separate dir?
var focusBackToModalBind = void 0;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);