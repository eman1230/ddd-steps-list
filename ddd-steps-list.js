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
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
      }
      .vl {
        content: "";
        position: absolute;
        width: 2px;
        margin-top: 24px;
        left: 91.5px;
        height: calc(100% - 16px);
        transform: translate(-50%);
        background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="2" height="157" viewBox="0 0 2 157" fill="none"><path d="M1.50001 1L1.50001 0.5L0.500007 0.5L0.500007 1L1.50001 1ZM1.5 157L1.5 154.563L0.5 154.562L0.5 157L1.5 157ZM1.5 149.688L1.5 144.813L0.500001 144.812L0.5 149.687L1.5 149.688ZM1.5 139.938L1.5 135.063L0.500001 135.062L0.500001 139.937L1.5 139.938ZM1.5 130.188L1.5 125.313L0.500001 125.312L0.500001 130.187L1.5 130.188ZM1.5 120.438L1.5 115.563L0.500002 115.562L0.500002 120.437L1.5 120.438ZM1.5 110.688L1.5 105.813L0.500002 105.812L0.500002 110.687L1.5 110.688ZM1.5 100.938L1.5 96.0625L0.500003 96.0625L0.500002 100.937L1.5 100.938ZM1.5 91.1875L1.5 86.3125L0.500003 86.3125L0.500003 91.1875L1.5 91.1875ZM1.5 81.4375L1.5 76.5625L0.500004 76.5625L0.500003 81.4375L1.5 81.4375ZM1.5 71.6875L1.5 66.8125L0.500004 66.8125L0.500004 71.6875L1.5 71.6875ZM1.5 61.9375L1.5 57.0625L0.500004 57.0625L0.500004 61.9375L1.5 61.9375ZM1.5 52.1875L1.5 47.3125L0.500005 47.3125L0.500005 52.1875L1.5 52.1875ZM1.50001 42.4375L1.50001 37.5625L0.500005 37.5625L0.500005 42.4375L1.50001 42.4375ZM1.50001 32.6875L1.50001 27.8125L0.500006 27.8125L0.500005 32.6875L1.50001 32.6875ZM1.50001 22.9375L1.50001 18.0625L0.500006 18.0625L0.500006 22.9375L1.50001 22.9375ZM1.50001 13.1875L1.50001 8.3125L0.500006 8.3125L0.500006 13.1875L1.50001 13.1875ZM1.50001 3.4375L1.50001 1L0.500007 1L0.500007 3.4375L1.50001 3.4375Z" fill="%23001E44"/></svg>');
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

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
  <h3>${this.title}</h3>
    <div class="vl"></div>
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