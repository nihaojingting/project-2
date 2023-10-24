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
        max-width: 100%;
        height: auto;
        border: 2px solid #444;
        transition: filter 0.3s;
      }

      a.chip:hover img {
        border: 2px solid #0099da;
        filter: brightness(1.2) sepia(1) hue-rotate(180deg);
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

      .chip-container {
        display: flex;
        flex-wrap: wrap; /* Allow cards to wrap to the next row */
      }

      @media (max-width: 768px) {
        .chip-container {
          flex-direction: column; /* Switch to vertical layout on smaller screens */
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
      <div class="chip-container">
        <a class="chip" href="${this.link}" target="_blank">
          <img src="${this.imageSrc}" alt="${this.name}">
          <slot>${this.name}</slot>
        </a>
      </div>
    `;
  }
}
