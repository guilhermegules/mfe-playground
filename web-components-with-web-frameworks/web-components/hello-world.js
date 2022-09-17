export class HelloWorldComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<h1>Hello world!</h1>`;
    this.style.color = "#c56";
  }
}

customElements.define("hello-world", HelloWorldComponent);
