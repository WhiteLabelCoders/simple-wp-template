class Scroll {
    constructor() {
        this.links = document.querySelectorAll('a[href*="#"]')

        this.init();
    }

    init() {
        this.bindEvent();
    }

    bindEvent() {
        this.links.forEach(link => link.addEventListener('click', (e) => {
            e.preventDefault();

            const hash = e.target.getAttribute('href');


            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }))
    }
}

export default Scroll;