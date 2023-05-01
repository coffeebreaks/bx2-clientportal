class MobileMenu extends HTMLElement {

    
    constructor(){
    super()
    fetch("mobileMenu.html")
    .then((response) => response.text())
    .then((html) => {
        const template = document.createElement("template")
        template.innerHTML = html
        this.appendChild(template.content.cloneNode(true))
    })
    .catch((error) => {
        console.error("Error loading HTML file:", error)
    })

    fetch("mobileMenu.css")
    .then((response) => response.text())
    .then((css) => {
        const style = document.createElement("style")
        style.innerHTML = css
        this.appendChild(style)
    })
    .catch((error) => {
        console.error("Error loading CSS file:", error)
    }
    )
    
    
    
}

}
customElements.define("mobile-menu", MobileMenu)