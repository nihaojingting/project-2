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

      a.chip {
        position: relative;
        display: block;
        cursor: pointer;
      }

      a.chip::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(	30, 64, 124, 0.35); /* Navy blue with 35% opacity */
        opacity: 0; /* Initially transparent */
      }

      a.chip:hover::before {
        opacity: 1; /* Make the overlay fully visible on hover */
      }

      a.chip img {
    max-width: 100%;
    display: block;
    height: auto;
    width: 100%;
      }

      a.chip {
        font-weight: bold;
        text-decoration: none;
        padding: 0px 0px;
        font-size: 16px;
      }

      .cardcontainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center; /* Center horizontally */
        align-items: center; /* Center vertically */
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
