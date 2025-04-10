/**
 * Copyright 2025 eman1230
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./ddd-steps-list-item"

/**
 * `ddd-steps-list`
 * 
 * @demo index.html
 * @element ddd-steps-list
 */
export class DddStepsList extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-steps-list";
  }

  constructor() {
    super();
    this.index=0
    this.title = "";
    this.description = "";
    this.t = this.t || {};
    this.t = {
      ...this.t,
      title: "Title",
    };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/ddd-steps-list.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      index: { type: Number },
      description: { type: String },
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: 0 var(--ddd-spacing-2) auto;
        padding: 0 var(--ddd-spacing-4);
        margin-top: 0px;
        padding-top: 0px;
      }
      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
      }
      h2 {
        color: var(--ddd-theme-primary)
      }

      .description {
        display: flex;
        flex-direction: column;
        margin-bottom: 62px;
        margin-top: 0px;
        padding-top: 0px;
        /* width: 560px; */
        justify-content: center;
        align-items: center;
      }

    `];
  }

updated(changedProperties) {
  if (changedProperties.has('title')){
    this.indexcount();
  }
}

indexcount() {
  const items = this.querySelectorAll("ddd-steps-list-item");
  items.forEach((element, index) => {
    element.count=index+1
    console.log(element.count)
  })
}

valdiateChildren() { 
  const slot = this.shadowRoot.querySelector("#step-slot");
  if (!slot){
    console.error("Slot #step-slot not found in shadowRoot.");
    return;
  }
  const assignedElements = slot.assignedElements({
    flatten: true,
  });
  assignedElements.forEach((child) => {
    if (child.tagName.toLowerCase() !== "ddd-steps-list-item") {
      console.warn("Invalid Tag");
      child.remove();
    }
  })
}

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
<div class='description'>
  <h3>${this.title}</h3>
    ${this.description}
    </div>
      <div class="steps-items">
        <slot id="step-slot"></slot>
      </div>
</div>`;
  }
  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}
globalThis.customElements.define(DddStepsList.tag, DddStepsList);