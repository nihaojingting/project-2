import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
      }

      a.chip img {
        max-width: 100%;
        height: auto;
        border: 2px solid #444; /* Default border color */
        transition: filter 0.3s; /* Add a smooth transition */
      }

      a.chip:hover img {
        border: 2px solid #0099da; /* Border color on hover */
        filter: brightness(1.2) sepia(1) hue-rotate(180deg); /* Apply a blue filter */
      }

      a.chip img {
        /* Set the width and height of the image */
        /* width: 900px;
        height: 400px; */
        max-width: 100%;
        display: block;
        height: auto;
        width: 100%;
      }

      a.chip {
        display: block;
        cursor: pointer;
      }

      a.chip:focus,
      a.chip:hover,
      :host([active]) a.chip {
        background-color: #e4e5e7;
        border: 2px solid #e4e5e7;
        border-radius: 2px;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
      }

      a.chip {
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        border: 2px solid #444;
        color: #444;
        font-size: 16px;
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = 'https://psu.edu/news/research/';
    this.imageSrc =
      'https://hr.psu.edu/sites/hr/files/styles/article_home_page/public/2023-10/ExpandedFamilySick_0.jpg?h=5265ff56&itok=e9egM1X8';
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
