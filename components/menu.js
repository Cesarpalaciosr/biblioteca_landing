class menu extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <div class="hamburger">
            <div id="ham" stat="open" class="hamburger-in" onclick="menuOnClick()">
                <div id="ham1" class = "bar"></div>
                <div id="ham2" class = "bar"></div>
                <div id="ham3" class = "bar"></div>
            </div>
                <nav class="nav" id="nav">
                <ul>
                    <li><a href="./index.html">Inicio</a></li>
                    <li><a href="#" onclick = "op1OnClick()">Quienes somos</a>
                        <option-panel></option-panel>
                    </li>
                    <li><a href="#" onclick = "redesOnClick()">Redes</a>
                        <redes-panel></redes-panel>
                    </li>
                    <li><a href="#" onclick = "historiaOnClick()">Nuestra historia</a>
                        <historia-panel></historia-panel>
                    </li>
                </ul>
            </nav> 
        </div>
        `
    }
}

window.customElements.define("page-menu",menu);