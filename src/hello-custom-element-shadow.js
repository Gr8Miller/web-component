class HelloCustomElementShadow extends HTMLElement {
  connectedCallback() {
    let $child = toElement(`<i class="inner" style="background-color: yellowgreen">Hello, Custom Component with Shadow!</i>`);
    const shadow = this.attachShadow({mode: 'open'});
    shadow.append($child);
  }
}

customElements.define('hello-custom-element-shadow', HelloCustomElementShadow);
