# Sticky Layout

This module provides Sass and a little Javascript that attaches a section of layout that stays in place regardless of user scrolling.

The layout can be attached to the top of the page or the bottom.

## Getting Started

    npm install sticky-layout
    
You only need to import these two files into your build:

    dist/_l-sticky.scss
    dist/sticky-layout.js

Once its imported, you'll need to run an init function like so:

    import StickyLayout from '../../dist/sticky-layout';

    var elementToApplyStickyTo = document.querySelector('.js-sticky-footer');

    StickyLayout.init(elementToAttachTo, classNames);

### Parameters for the init function

| Parameter | Purpose |
| ------------- |:-------------:|
| elementToAttachTo | This is the element to apply the sticky layout to|
| classNames | An array of classNames to apply to the element, should include l-sticky and l-sticky--top or l-sticky--bottom, depending on where you'd like it to attach. You can also add other classes here (overrides) if you like. |

## Notes

* When the viewport is less than 25rem (~400px at usual settings), the sticky layout will no longer be fixed in place and will render where it is in source order.

## Contribution

* Fork, open a PR
