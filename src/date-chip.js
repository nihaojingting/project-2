import { LitElement, html, css } from 'lit';

export class DateChip extends LitElement {
  static get properties() {
    return {
      date: { type: String },
      month: { type: String },
      day: { type: Number }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .container {
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        width: 100%;
        height: 100%;
        margin: 0 10px -6px 0;
        line-height: 24px;
        text-align: center;
      }
      .month, .day {
        background-clip: border-box;
        background-origin: padding-box;
        background-size: auto;
        border-radius: 0 0 2px 2px;
        padding: 2px 10px;
      }
      .month {
        background-color: #1E407C;
        color: white;
        font-size: 14px;
        font-weight: 700;
        line-height: 23.04px;
        text-transform: uppercase;
      }
      .day {
        background-color: #f3f3f3;
        color: #444444;
        font-size: 18px;
        font-weight: 900;
        line-height: 27px;
        padding: 10px 20px;
      }
    `;
  }

  constructor() {
    super();
    this.date = '01/01/2001'
    this.month = 'Jan';
    this.day = 1;
  }

  dateToMonth() {
    const inputDate = new Date(this.date);
    this.month = inputDate.toLocaleDateString('en-us', { month: "short" });
  }

  dateToDay() {
    const inputDate = new Date(this.date);
    this.day = inputDate.toLocaleDateString('en-us', { day: "numeric" });
  }

  render() {
    this.dateToMonth();
    this.dateToDay();
    return html`
      <div class="container">
        <span class="month">${this.month}</span>
        <span class="day">${this.day}</span>
      </div>
    `;
  }
}

customElements.define('date-chip', DateChip);
