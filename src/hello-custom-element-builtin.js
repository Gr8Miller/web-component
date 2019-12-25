class HelloCustomElementBuiltin extends HTMLParagraphElement {
  connectedCallback() {
    let $child = toElement(`<i class="inner" style="background-color: yellowgreen">Hello, Custom Component!</i>`);
    this.appendChild($child);
  }
}
customElements.define('hello-custom-element-builtin', HelloCustomElementBuiltin, {extends: "p"});
