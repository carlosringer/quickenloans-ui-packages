import '../css/main.scss';
import ModalUtility from '../../dist/modal-utility';

const modalContents = document.createElement('div');
const text = document.createElement('p');
text.textContent = 'This is some content type to go into a modal.';
const button = document.createElement('button');
button.textContent = 'Confirm';

modalContents.appendChild(text);
modalContents.appendChild(button);

const modalUtil = ModalUtility(document);
const modal = modalUtil.createModal({ title: 'This is my title' });

modalUtil.setContents(modal, modalContents);

document.addEventListener('click', (e) => {
    'use strict';
    if (e.target.classList.contains('js-modal-trigger')) {
        modalUtil.showModal(modal);
    }
});