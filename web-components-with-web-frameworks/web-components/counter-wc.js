export class Counter extends HTMLElement {
  #currentValue = 0;
  increment = 1;
  static observedAttributes = ["color"];

  constructor() {
    super();

    const container = document.createElement("div");

    this.span = document.createElement("span");

    const increment = document.createElement("button");
    increment.innerText = "Increment";
    increment.addEventListener("click", () => {
      this.#value = this.#currentValue + this.increment;
    });

    container.appendChild(this.span);
    container.appendChild(document.createElement("br"));
    container.appendChild(increment);

    this.container = container;
  }

  connectedCallback() {
    this.appendChild(this.container);
    this.update();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "color") {
      this.update();
    }
  }

  set #value(val) {
    this.#currentValue = val;
    this.update();
  }

  update() {
    this.span.innerText = this.#currentValue;
    this.span.style.color = this.getAttribute("color") || "black";
  }
}

customElements.define("counter-wc", Counter);
