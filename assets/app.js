import './scss/styles.scss';
import MobileMenu from './js/menu/MobileMenu';
import Scroll from './js/scroll/Scroll';

document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
    new Scroll();
})
