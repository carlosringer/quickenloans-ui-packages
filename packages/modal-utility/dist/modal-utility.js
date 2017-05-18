let options = {};
let lastFocusedElement;  // for saving where focus was before popping the modal;
let focusBackToModalBind;

export default function (document) {

    function createModal(settings) {
        'use strict';
        options = settings || {
                dismissable: true
            };

        const modalContainer = document.createElement('div');
        modalContainer.classList.add('js-modal-container', 'modal-container');

        const modalMask = document.createElement('div');
        modalMask.classList.add('js-modal-mask', 'modal-mask');

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('tabindex', 0);

        if (options.additionalClasses) {
            options.additionalClasses.map((className) => {
                modal.classList.add(className);
            });
        }

        const modalTitle = document.createElement('div');
        modalTitle.classList.add('modal__title');

        const modalTitleText = document.createElement('h1');
        modalTitleText.classList.add('modal__title-text');
        modalTitleText.textContent = options.title;

        modalTitle.appendChild(modalTitleText);

        const modalContent = document.createElement('div');
        modalContent.classList.add('modal__content');

        modal.appendChild(modalTitle);
        modal.appendChild(modalContent);

        modalContainer.appendChild(modalMask);
        modalContainer.appendChild(modal);

        return modalContainer;
    }

    function setContents(modal, contents) {
        'use strict';
        let wrapper = modal.querySelector('.modal__content');
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
        [].slice.call(document.querySelectorAll('.modal-container'))
            .map((modal) => {
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
        createModal,
        setContents,
        showModal,
        hideModal,
        focusModal
    };
}

// TODO: jsdoc or some other doc block system
// TODO: ship es5 in a separate dir?
