class option_panel extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <nav class="option-panel" id="option-panel">
            <div class = "textos">
                <div>
                <p>
                La Universidad Rafael Urdaneta es una institución de educación superior cuyo propósito se fundamenta en la generación y aplicación de conocimientos que contribuyen con la evolución integral del ser humano y la formación de profesionales dotados de valores, autoeficaces, pertinentes, altamente competitivos y comprometidos con el desarrollo científico, técnico y humanístico del entorno social para elaborar proyectos viables que solucionen los problemas del estado y la nación.</p>
                
                </div>
                <div>
                    <img class="img-insti" src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Aula_magna_uru.jpg" alt="URU"/>
                </div>
            </div>
        </nav> 
        `
    }
}

window.customElements.define("option-panel",option_panel);