import { Observable } from 'rxjs';

export interface IInsurance {
  _id?: string
  description: string
  logo: string
  company: string
  phone: string
  email: string
  website: string
}

export class Insurance implements IInsurance {
  public _id: string
  public logo: string
  public description: string
  public company: string
  public phone: string
  public email: string
  public website: string

  constructor(data: IInsurance) {
    this.fromData(data)
  }

  public fromData(data: IInsurance) {
    this._id = data._id || null
    this.description = data.description || ''
    this.logo = data.logo || ''
    this.company = data.company || ''
    this.phone = data.phone || ''
    this.email = data.email || ''
    this.website = data.website || ''
  }

  public toString(): string {
    return `#${this._id} - ${this.company} - ${this.phone}`
  }

  public getDomain(): string {
    return this.website.split("/")[2]
  }

  public callIt(): void {
    location.href = 'tel:' + this.phone.replace(/\s+/, '')
  }

  public mailIt(): void {
    location.href = 'mailto:' + this.email
  }

  public visitIt(): void {
    //location.href = this.website
    window.open(this.website);
  }

  public getWebsiteDescription(): any {
    return fetch(`https://cors-anywhere.herokuapp.com/${this.website}`)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(html, 'text/html');
        const description = htmlDoc.querySelector('meta[name="description"]').getAttribute("content")
        console.log(description)
        return description
      }).catch(err => console.error(err));
  }
}