class redespanel extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <nav class="red-panel" id="red-panel">
            <div class = "redes">
                <div class = "redes-container">
                    <a class="red-text" href="https://www.instagram.com/">
                        <img class="red" src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-instagram-icon-logo-png-image_3560507.jpg" alt="Instagram"/>
                        <span>Instagram</span>
                    </a>
                </div>
                <div class = "redes-container">
                <a class="red-text" href="https://twitter.com">
                        <img class="red" src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-twitter-icon-logo-png-image_3560525.jpg" alt="Twitter"/>
                        <span>Twitter</span>
                    </a>
                </div>
                <div class = "redes-container">
                    <a class="red-text" href="https://www.facebook.com/">
                        <img class="red" src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-facebook-icon-png-image_3560489.jpg" alt="Facebook"/>
                        <span>Facebook</span>
                    </a>
                </div>
            </div>
        </nav> 
        `
    }
}
window.customElements.define("redes-panel", redespanel);