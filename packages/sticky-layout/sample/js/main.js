import '../css/main.scss';
import StickyLayout from '../../dist/sticky-layout';
var elementToApplyStickyTo = document.querySelector('.js-sticky-footer');
StickyLayout.init(elementToApplyStickyTo, ['l-sticky', 'l-sticky--bottom']);
