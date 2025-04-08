/**
 * Copyright 2025 eman1230
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { DDDPulseEffectSuper, DDD } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-steps-list`
 * 
 * @demo index.html
 * @element ddd-steps-list
 */
export class DddStepsListItem extends DDDPulseEffectSuper(I18NMixin(DDD)) {

  static get tag() {
    return "ddd-steps-list-item";
  }

  constructor() {
    super();
    this.title = "";
    this.body = "";
    this.count = 0;
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
      body: { type: String },
      count: { type: Number }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        /* background-color: var(--component-background-color, transparent); */
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        display: flex;
        flex-direction: column;
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }

      h3 span {
        font-size: var(--ddd-steps-list-label-font-size, var(--ddd-font-size-s));
      }

      .header-content {
        display: flex;
      }

      .index {
          display: inline-block;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: var(--ddd-theme-primary);
          color: white;
          font-size: 20px;
          font-weight: bold;
          margin-right: 8px;
          font-weight: 400;
          z-index: 1;
      }

      .count{
        padding-left: 19px;
        padding-top: 11px;
      }

      h3 {
        display: inline-block;
        margin: 0px;
        padding-top: 12px;
        font-size: 20px;
        margin-left: 12px;
        color: var(--ddd-theme-primary);
      }
      
      .bodytext{
        display: flex;
        flex-direction: column;
      }

      .content{
        max-width: 480px;
        align-items: center;
        margin-left: 46px;
      }

      ::slotted(ddd-steps-list-item){
        --myddd-test: #000140;
        display: flex;
      } 

      .text{
        padding-left: 48px;
      }

      .vl {
        margin-left: 23px;
        border-left: 2px dashed var(--ddd-theme-default-nittanyNavy);
      }

      @media screen and (max-width: 1280px) {
      .content {
        max-width: 900px;
      }
      .count {
        width: 29px;
      }
      }

      
    `];
  }


  // Lit render the HTML
  render() {
    return html`
  <div class="wrapper">
    <div class="header-content">
      <div class="index">
        <div class="count">
          ${this.count}
        </div>
      </div>
      <h3>${this.title}</h3>
    </div>
    <div class="vl">
      <div class="content">
        <div class="bodytext">
          <slot class="body"></slot>
        </div>
      </div>
    </div>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return {
      type: "element",
      canScale: true,

      canEditSource: true,
      gizmo: {
        title: "Call to action",
        description: "A simple button with a link to take action.",
        icon: "image:crop-16-9",
        color: "orange",
        tags: ["Layout", "marketing", "button", "link", "url", "design", "cta"],
        handles: [
          {
            type: "link",
            source: "link",
            title: "label",
          },
        ],
        meta: {
          author: "HAXTheWeb core team",
        },
      },
      settings: {
        configure: [
          {
            property: "label",
            title: "Label",
            description: "Link label",
            inputMethod: "textfield",
            required: true,
          },
          {
            property: "link",
            title: "Link",
            description: "Enter a link to any resource",
            inputMethod: "haxupload",
            noVoiceRecord: true,
            noCamera: true,
            required: true,
          },
          {
            property: "accentColor",
            title: "Accent Color",
            description: "An optional accent color.",
            inputMethod: "colorpicker",
            icon: "editor:format-color-fill",
          },
          {
            property: "hideIcon",
            title: "Hide icon",
            description: "Hide the icon used to accent text",
            inputMethod: "boolean",
          },
        ],
        advanced: [
          {
            property: "icon",
            title: "Icon",
            description: "Action link icon",
            inputMethod: "iconpicker",
          },
        ],
      },
      saveOptions: {
        unsetAttributes: ["colors", "element-visible"],
      },
      demoSchema: [
        {
          tag: "simple-cta",
          properties: {
            label: "Click to learn more",
            link: "https://haxtheweb.org/",
          },
          content: "",
        },
      ],
    };
  }

}

globalThis.customElements.define(DddStepsListItem.tag, DddStepsListItem);