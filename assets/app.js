import './scss/styles.scss';
import MobileMenu from './js/menu/MobileMenu';
import Scroll from './js/scroll/Scroll';
import ScrollAfterReload from './js/scrollafterreload/ScrollAfterReload';

document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
    new Scroll();
    new ScrollAfterReload();
})
