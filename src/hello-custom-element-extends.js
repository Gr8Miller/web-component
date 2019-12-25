class HelloCustomElementExtends extends HelloCustomElement {
  connectedCallback() {
    super.connectedCallback();
    let $child = toElement(`<i class="inner" style="background-color: yellowgreen">Hello, Extended Custom Component!</i>`);
    this.appendChild(document.createElement('br'));
    this.appendChild($child);
  }
}

customElements.define('hello-custom-element-extends', HelloCustomElementExtends);
