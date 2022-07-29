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

            const hash = e.currentTarget.hash;
            console.log(hash)
            const hashElement = document.querySelector(hash);
            
            if (!hashElement) {
                localStorage.setItem('targetElement', hash);
                window.location.href = '/'         
            } else {
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }))
    }
}

export default Scroll;
