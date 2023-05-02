export class PlaceOrder extends HTMLElement {
    constructor() {
      super();
  
      fetch("./components/placeOrder.html")
        .then((response) => response.text())
        .then((html) => {
          const template = document.createElement("template");
          template.innerHTML = html;
          this.appendChild(template.content.cloneNode(true));
        })
        .catch((error) => {
          console.error("Error loading HTML file:", error);
        });
    }
  }
  
  customElements.define("place-order", PlaceOrder);