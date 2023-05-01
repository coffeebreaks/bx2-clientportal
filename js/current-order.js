export class CurrentOrder extends HTMLElement {
  constructor() {
    super();

    fetch("currentOrder.html")
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

customElements.define("current-order", CurrentOrder);


