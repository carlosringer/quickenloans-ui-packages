# Modal Utility 

This module provides Javascript and Sass to enable creating modal windows.
General UI Events are provided by default (see parameters section) in relation to the modals:

* When a user presses the Esc key, the modal will be removed, and the focus returned to 
where it came from.
* When a user clicks the modal-mask (anywhere outside the modal), the modal will be removed and focus
is returned to where it came from.
* When a modal is shown, its given focus.
* When a user tries to Tab out of a modal, focus returns to the modal.

## Getting Started

    npm install modal-utility
    
You only need to import these two files into your build:

    dist/_modal-utility.scss
    dist/modal-utility.js

*The Javascript is an ES6 module*

Once its imported, you'll need to execute a setup function like so:

    const modalUtility = ModalUtility(document);

Then you can use a set of functions returned, like so:

config options

    const options = {
        title: 'This is my title',
        dismissable: true
    };

create some content

    const modalContents = document.createElement('p');
    modalContents.textContent = 'Hello, Modal';

create a modal

    let modal = modalUtility.createModal(document, options);

set the content into the modal

    modalUtility.setContents(modal, modalContents);

show the modal

    modalUtility.showModal(document, modal);

hide the modal

    modalUtility.hideModal(document);

### Optional Settings
| Setting | Description |
| ------- |:------------:|
| title   | The text to display in the title area of the modal |
| dismissable | True if the modal removal events should be bound, False if not. (default: true) |

### Parameters for the createModal function

| Parameter | Purpose |
| ------------- |:-------------:|
| options | An object containing various settings, see below |

### Parameters for the setContents function

| Parameter | Purpose |
| ---------- |:-------------:|
| modal      | a modal created with ModalUtility, contents will be inserted into its content area |
| contents   | a DOM Element containing 0 or more other Elements to be inserted |

### Parameters for the showModal function

| Parameter | Purpose |
| ---------- |:-------------:|
| modal      | a modal created with ModalUtility, appended to the given element |

## Notes

* When the viewport is very narrow or shallow, the modal will attach to the top 
of the viewport.
* hideModal will hide all modals created with ModalUtility.

## Contribution

* Fork, open a PR
