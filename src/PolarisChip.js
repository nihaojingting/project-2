import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      imageSrc: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 0 12px 12px 0;
      }

      a.chip img {
        max-width: 300px;
        height: auto;
      }

      a.chip:hover img {
        filter: hue-rotate(180deg); /* Navy blue hue without changing brightness and saturation */
      }



      a.chip {
        display: block;
        cursor: pointer;
      }

      a.chip:focus,
      a.chip:hover,
      :host([active]) a.chip {
        background-color: #e4e5e7;
        color: #005fa9;
        cursor: pointer;
        text-decoration: underline;
      }

      a.chip {
        font-weight: bold;
        text-decoration: none;
        padding: 8px 4px;
        font-size: 16px;
      }

      .cardcontainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
        /* height: 100vh; Make the container cover the full viewport height */
      }

      a.chip img {
        max-width: 300px;
        height: auto;
      }

      @media (max-width: 768px) {
        .cardcontainer {
          flex-direction: column;
        }
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = '';
    this.imageSrc = '';
  }

  render() {
    return html`
      <div class="cardcontainer">
        <a class="chip" href="${this.link}" target="_blank">
          <img src="${this.imageSrc}" alt="${this.name}">
          <slot>${this.name}</slot>
        </a>
      </div>
    `;
  }
}
