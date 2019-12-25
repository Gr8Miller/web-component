class HelloCustomElement extends HTMLElement {
  connectedCallback() {
    let $child = toElement(`<i class="inner" style="background-color: yellowgreen">Hello, Custom Component!</i>`);
    this.appendChild($child);
  }
}

customElements.define('hello-custom-element', HelloCustomElement);
