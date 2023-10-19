import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true}
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        /* up,down,right,left */
        margin: 0 12px 12px 0;

      }

      .image-link {
        display: block;
        cursor: pointer;
      }

      .image-link img {
        max-width: 100%;
        height: auto;
      }
      
      .link:focus,
      .link:hover,
      :host([active]) .link{
        background-color: #e4e5e7;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
      }

      .link {
        font-weight: bold;
        text-decoration: none;
        /* top/bottom & sides */
        padding: 8px 4px;
        border: 2px solid #444;
        color: #444;
        font-size: 16px
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = "https://psu.edu/news/research/";
    this.imageSrc = "https://img.doutuwang.com/2020/03/20200309721135_vcaPZM.jpg";
  }

  render() {
    return html`
      <a class="chip" href="${this.link}" target="_blank">
        <img src="${this.imageSrc}" alt="${this.name}">
        <slot>${this.name}</slot>
      </a>
    `;
  }
}