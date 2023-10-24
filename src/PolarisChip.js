import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true },
      imageSrc: { type: String },
      date: { type: String },
      month: { type: String },
      day: { type: Number }
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
        background-color: rgba(30, 64, 124, 0.35); /* Navy blue with 35% opacity */
        opacity: 0; /* Initially transparent */
      }

      a.chip:hover::before {
        opacity: 1; /* Make the overlay fully visible on hover */
      }

      a.chip img {
        max-width: 300px;
        height: auto;
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
        padding: 16px; /* Add padding around the card container */
      }

      @media (max-width: 768px) {
        .cardcontainer {
          flex-direction: column;
        }
      }
      .container {
        display: flex;
        flex-direction: column;
        float: left;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        margin-right: 10px;
        line-height: 24px;
        text-align: center;
      }
      .month {
        background-color: #1E407C;
        background-clip: border-box;
        background-origin: padding-box;
        background-size: auto;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        color: white;
        font-size: 12.8px;
        font-weight: 700;
        line-height: 23.04px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 1px;
        padding-bottom: 1px;
        text-transform: uppercase;
      }
      .day {
        background-color: white;
        background-clip: border-box;
        background-origin: padding-box;
        background-size: auto;
        border-bottom-left-radius: 2px;
        border-bottom-right-radius: 2px;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
        color: #444444;
        font-size: 18px;
        font-weight: 900;
        line-height: 27px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.link = '';
    this.imageSrc = '';
    this.date = '01/01/2001'
    this.month = 'Jan';
    this.day = 1;
  }
  dateToMonth() {
    var inputDate = new Date(this.date);
    this.month = inputDate.toLocaleDateString('en-us', { month:"short" });
  }

  dateToDay() {
    var inputDate = new Date(this.date);
    this.day = inputDate.toLocaleDateString('en-us', { day:"numeric" });
  }

  render() {
    this.dateToMonth();
    this.dateToDay();
    
    return html`
      <div class="container">
        <div class="cardcontainer">
          <a class="chip" href="${this.link}" target="_blank">
            <img src="${this.imageSrc}" alt="${this.name}">
            <slot>${this.name}</slot>
          </a>
        </div>
        <div class="container">
          <span class="month">${this.month}</span>
          <span class="day">${this.day}</span>
        </div>
      </div>
    `;
  }
}  
