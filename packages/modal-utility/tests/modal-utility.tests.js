/* global describe it */
import {JSDOM} from 'jsdom';
import assert from 'assert';

import ModalUtility from '../dist/modal-utility';

describe('Modal Utility', () => {
    it('should create a modal container', () => {
        const actual = ModalUtility(createSampleElement().doc).createModal(
            { title: 'This is my title' }).outerHTML;
        const expected =
          '<div class="js-modal-container modal-container">' +
            '<div class="js-modal-mask modal-mask"></div>' +
              '<div class="modal" tabindex="0">' +
                '<div class="modal__title">' +
                  '<h1 class="modal__title-text">This is my title</h1>' +
                '</div>' +
                '<div class="modal__content"></div>' +
              '</div>' +
          '</div>';
        assert.equal(actual, expected);
    });

    it('should allow additional classes to be added', () => {
        const actual = ModalUtility(createSampleElement().doc).createModal(
            {
                title: 'This is my title',
                additionalClasses: ['additionalClass1', 'additionalClass2']
            }).outerHTML;
        const expected =
          '<div class="js-modal-container modal-container">' +
            '<div class="js-modal-mask modal-mask"></div>' +
              '<div class="modal additionalClass1 additionalClass2" tabindex="0">' +
                '<div class="modal__title">' +
                  '<h1 class="modal__title-text">This is my title</h1>' +
                '</div>' +
                '<div class="modal__content"></div>' +
              '</div>' +
          '</div>';
        assert.equal(actual, expected);
    });

    it('should allow contents to be set', () => {
        const modalFunctions = ModalUtility(createSampleElement().doc);
        const modal = modalFunctions.createModal(
            {
                title: 'This is my title',
            });

        const contentElement = createSampleElement().sampleElement;
        contentElement.textContent = 'Who Farted?';
        const actual = modalFunctions.setContents(modal, contentElement).outerHTML;
        const expected =
        '<div class="js-modal-container modal-container">' +
          '<div class="js-modal-mask modal-mask"></div>' +
            '<div class="modal" tabindex="0">' +
              '<div class="modal__title">' +
                '<h1 class="modal__title-text">This is my title</h1>' +
              '</div>' +
              '<div class="modal__content"><div id="sample-element" tabindex="0">Who Farted?</div>' +
            '</div>' +
            '</div>' +
        '</div>';
        assert.equal(actual, expected);
    });

    it('should be able to attach a modal to the dom', () => {
        'use strict';
        const modalFunctions = ModalUtility(createSampleElement().doc);
        const modal = modalFunctions.createModal(
            {
                title: 'This is my title',
            });

        const actual = modalFunctions.showModal(modal).querySelectorAll('.modal').length === 1;
        const expected = true;
        assert.equal(actual, expected);
    });

    it('should be able to remove a modal from the dom', () => {
        'use strict';
        const modalFunctions = ModalUtility(createSampleElement().doc);
        const modal = modalFunctions.createModal(
            {
                title: 'This is my title',
            });
        modalFunctions.showModal(modal);
        const actual = modalFunctions.hideModal().querySelectorAll('.modal').length === 0;
        const expected = true;
        assert.equal(actual, expected);
    });

    it('should allow the modal to be focused', () => {
        'use strict';
        const modalFunctions = ModalUtility(createSampleElement().doc);
        const modal = modalFunctions.createModal(
            {
                title: 'This is my title',
            });
        modalFunctions.showModal(modal);
        const actual = modalFunctions.focusModal().activeElement.classList.contains('modal');
        const expected = true;
        assert.equal(actual, expected);
    });

    it('should return focus to the last active element after closing the modal', () => {
        'use strict';
        const doc = createSampleElement().doc;
        const modalFunctions = ModalUtility(doc);
        const modal = modalFunctions.createModal(
            {
                title: 'This is my title',
            });

        // save the active element before adding the modal
        const expected = doc.activeElement.outerHTML;
        const addedModalDoc = modalFunctions.showModal(modal);

        // hide the modal, get the active Element again
        const actual = modalFunctions.hideModal().activeElement.outerHTML;

        // the active element before and after showing the modal should be the same element
        assert.equal(actual, expected);
    });
});

describe('Modal Utility Events', () => {
    'use strict';
    it('should hide the modal when someone presses Esc', () => {
        'use strict';
        const samples = createSampleElement();
        const modalFunctions = ModalUtility(samples.doc);
        const modal = modalFunctions.createModal(
            {
                title: 'This is my title',
            });
        modalFunctions.showModal(modal);

        // trigger the key press
        const EscDown = new samples.window.KeyboardEvent('keydown', { code: 'Escape' });
        samples.doc.dispatchEvent(EscDown);

        const actual = samples.doc.querySelectorAll('.modal').length === 0;
        const expected = true;
        assert.equal(actual, expected);
    });

    it('should hide the modal when someone clicks the modal mask', () => {
        'use strict';
        const doc = createSampleElement().doc;
        const modalFunctions = ModalUtility(doc);
        const modal = modalFunctions.createModal(
            {
                title: 'This is my title',
            });

        modalFunctions.showModal(modal);

        // trigger the click on modal mask
        doc.querySelector('.modal-mask').click();

        const actual = doc.querySelectorAll('.modal').length === 0;
        const expected = true;
        assert.equal(actual, expected);
    });

    it('it should not remove the modal when dismissable is false', () => {
        'use strict';
        const samples = createSampleElement();
        const modalFunctions = ModalUtility(samples.doc);
        const modal = modalFunctions.createModal(
            {
                title: 'This is my title',
                dismissable: false
            });

        modalFunctions.showModal(modal);

        // trigger the key press
        samples.doc.querySelector('.modal-mask').click();

        // trigger the click on modal-mask
        samples.doc.querySelector('.modal-mask').click();

        const actual = samples.doc.querySelectorAll('.modal').length === 0;
        const expected = false;
        assert.equal(actual, expected);
    });
});

function createSampleElement() {
    const window = new JSDOM('<!DOCTYPE html><html><body><div id="sample-element" tabindex="0">'
        + 'Sample</div><div id="validation-container"></div></body></html>').window;
    const document = window.document;
    return {
        window,
        doc: document,
        sampleElement: document.getElementById('sample-element'),
        validationContainer: document.getElementById('validation-container')
    };
}
