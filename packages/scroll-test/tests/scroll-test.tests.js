/* global describe, it, assert, document, window */

import scrollTest from '../dist/scroll-test';

describe('Scroll test', () => {
  it('should return true if the viewport bottom has scrolled at least till the bottom of the element', () => {
    const actual = scrollTest(window, document.querySelector('.onscreen-box'));
    const expected = true;
    assert.equal(actual, expected);
  });

  it('should return false if the viewport bottom has not scrolled at least till the bottom of the element', () => {
    const actual = scrollTest(window, document.querySelector('.offscreen-box'));
    const expected = false;
    assert.equal(actual, expected);
  });

  it('should return true if the viewport has been scrolled to the bottom of the document', () => {
    const actual = scrollTest(window);
    const expected = true;
    assert.equal(actual, expected);
  });

  it('should throw a TypeError if either parameter isn\'t what\'s expected.', () => {
    assert.throws(() => { scrollTest(undefined, document.querySelector('.offscreen-box')); }, /Expected the window object, got something else./);
  });

});
