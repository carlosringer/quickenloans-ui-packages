import mocha from 'mocha';
import { JSDOM } from 'jsdom';
import assert from 'assert';
import StickyButtons from '../dist/sticky-layout';

let sampleDocument;
let sampleElement;
let stickyFooter;
let actual;
let expected;

function createSampleElement() {
    const doc = new JSDOM('<!DOCTYPE html><html><body><div id="sample-element">'
    + 'Sample</div><div id="validation-container"></div></body></html>').window.document;
    return {
      sampleElement: doc.getElementById('sample-element'),
      validationContainer: doc.getElementById('validation-container')
    };
}

describe('Sticky Footer', () => {
  it('should add the sticky footer class to the containing element', () => {
    actual = StickyButtons.init(createSampleElement().sampleElement, ['l-sticky-footer']).classList[0];
    expected = "l-sticky-footer";
    assert.equal(actual, expected);
  });

  it('should throw a TypeError if passed unexpected input', () => {
    assert.throws(()=>{ StickyButtons.init(createSampleElement().sampleElement,
      'string'); }, /Expected an array of class names./);
  });
});
