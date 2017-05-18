export default {
  init: (element, classNames) => {
    if (!(classNames instanceof Array)) {
      throw TypeError("Expected an array of class names.");
    }
    classNames.map((name) => {
      element.classList.add(name);
    });
    return element;
  }
};
