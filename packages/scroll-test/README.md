# Scroll Test 

This module provides a function to test whether the user has 
scrolled past an element or has scrolled to the bottom of the page.

## Getting Started

    npm install scroll-test
    
You only need to import this file into your build:

    dist/scroll-test.js

Once its imported, you'll be able to test the scroll like this:

    var element = document.querySelector('.js-my-element');
    scrollTest(window, element);

or like this, for the document itself:

    scrollTest(window);
    
scrollTest() will return true if the user has scrolled the viewport
passed the bottom of the element, or up to the bottom of the page.

### Parameters for the test function

| Parameter | Purpose |
| ------------- |:-------------:|
| window | Needs window for getting the current height of the viewport |
| element (optional) | If passed, will compare the height of the viewport vs the bottom of the element. If not passed, will compare the height of the viewport against the height of the page.|

## Contribution

* Fork, open a PR
