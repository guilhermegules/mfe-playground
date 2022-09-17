export class BookCover extends HTMLElement {
  static observedAttributes = ["url"];

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "url") {
      this.createMainImage(newValue);
    }
  }

  set preview(val) {
    this.previewEl = this.createPreview(val);
    this.render();
  }

  createPreview(val) {
    if (typeof val === "string") {
      return base64Preview(val);
    } else {
      return blurHashPreview(val);
    }
  }

  createMainImage(url) {
    this.loaded = false;
    const img = document.createElement("img");
    img.alt = "Book cover";
    img.addEventListener("load", () => {
      if (img === this.imageEl) {
        this.loaded = true;
        this.render();
      }
    });
    img.src = url;
    this.imageEl = img;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const elementMaybe = this.loaded ? this.imageEl : this.previewEl;
    syncSingleChild(this, elementMaybe);
  }
}

function base64Preview(val) {
  const img = document.createElement("img");
  img.src = val;
  return img;
}

function blurHashPreview(preview) {
  const canvasEl = document.createElement("canvas");
  const { w: width, h: height } = preview;

  canvasEl.width = width;
  canvasEl.height = height;

  const pixels = decode(preview.blurhash, width, height);
  const ctx = canvasEl.getContext("2d");
  const imageData = ctx.createImageData(width, height);
  imageData.data.set(pixels);
  ctx.putImageData(imageData, 0, 0);

  return canvasEl;
}

export function syncSingleChild(container, child) {
  const currentChild = container.firstElementChild;
  if (currentChild !== child) {
    clearContainer(container);
    if (child) {
      container.appendChild(child);
    }
  }
}

export function clearContainer(el) {
  let child;

  while ((child = el.firstElementChild)) {
    el.removeChild(child);
  }
}

customElements.define("book-cover", BookCover);
