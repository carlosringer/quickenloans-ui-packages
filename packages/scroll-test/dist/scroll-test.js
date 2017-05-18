function scrollTest (window, element) {
    if (!window) {
        throw TypeError('Expected the window object, got something else.');
    }

    if (!element) {
        const B = window.document.body;
        const H = window.document.documentElement;
        let height;

        if (typeof window.document.height !== 'undefined') {
            height = window.document.height
        } else {
            height = Math.max( B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight );
        }
        return window.innerHeight >= height;
    } else {
        return window.innerHeight >= element.getBoundingClientRect().bottom;
    }
}

export default scrollTest;
