import CoreAnimation from "../animations/CoreAnimation";

class MobileMenu {
    constructor() {
        this.DOM = {
            menu: document.querySelector('.header__navigation'),
            toggleButtons: document.querySelectorAll('.header__burger')
        }

        this.active = false;
        this.init();
    }

    init() {
        this.bindEvents()
    }

    bindEvents() {
        this.DOM.toggleButtons.forEach(item => item.addEventListener('click', () => this.toggle()))
    }

    toggle() {
        const method = this.active ? 'remove' : 'add';
        this.DOM.menu.classList[method]('js--active');
        this.DOM.toggleButtons.forEach(item => item.classList[method]('js--active'));
        CoreAnimation.slideToggle(this.DOM.menu);

        this.active = !this.active;
    }
}

export default MobileMenu;