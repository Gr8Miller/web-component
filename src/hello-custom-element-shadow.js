class HelloCustomElementShadow extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    let $child = toElement(`<i class="inner" style="background-color: yellowgreen">Hello, Custom Component with Shadow!</i>`);
    shadow.append($child);
  }
}

customElements.define('hello-custom-element-shadow', HelloCustomElementShadow);
