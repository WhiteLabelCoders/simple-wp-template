class ScrollAfterReload {
    constructor() {
       this.TargetElement = localStorage.getItem('targetElement') ? localStorage.getItem('targetElement') : '';
       this.TargetSelector = this.TargetElement != '' ? document.querySelector(this.TargetElement) : '';
        
        this.init();
    }
    
    init() {
        if(this.TargetSelector != '') {
            this.TargetSelector.scrollIntoView({
                behavior: 'smooth'
            });
            
            localStorage.removeItem('targetElement');
        }
    }
}

export default ScrollAfterReload;
