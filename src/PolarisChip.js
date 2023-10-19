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
        margin: 0 12px 12px 0;
      }
  
      a.chip img {
        max-width: 100%;
        height: auto;
        border: 2px solid #444; /* Default border color */
      }
  
      a.chip:hover img {
        border: 2px solid #0099da; /* Border color on hover */
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
    this.link = "https://psu.edu/news/research/";
    this.imageSrc = "https://cdn-useast1.kapwing.com/collections/Z0rCB56Hqs-video_image--ksRh0WJQI.jpeg?Expires=1698552010&GoogleAccessId=dev-sa-videoprocessing%40kapwing-dev.iam.gserviceaccount.com&Signature=JkF4xoWTmjdjsIw9OGsiaXzwxYdurIdTeXrkXv3nnFaQ2qzjSSXRZ6cTY4PIBO8ZFx%2FtvHyuJ4AU1De%2FyjjKZ1DphHBgZ9%2B6YkTqMUb5413ON%2FWB5G8yFu3Lg9ZC1PBcJP0waI%2BiMdRmyrS0iwnZv7gax0LaBwA6DdxEhGkKzfF4GTWXopL1plam56dkzldWwYGYZA0qyiB3k4DnqF58%2BPAi7Pqv4luXAuNuIUHno4KxaJUb89Ejpw8SHF7OjNM3TTZeJ1tE6XDtJB%2FYmZqrlT74i7%2Fsq2H9oG73GLmQJ4nHr5xmI6tGHLZ0LxJMEQEDFX8%2BXogha1bx3opa7OT%2Fpg%3D%3D";
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