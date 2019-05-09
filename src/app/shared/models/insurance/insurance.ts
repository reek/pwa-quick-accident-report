export interface IInsurance {
  _id?: string
  logo: string
  compagny: string
  phone: string
  email: string
  website: string
}

export class Insurance implements IInsurance {
  public _id: string
  public logo: string
  public compagny: string
  public phone: string
  public email: string
  public website: string

  constructor(data: IInsurance) {
    this.fromData(data)
  }

  public fromData(data: IInsurance) {
    this._id = data._id || null
    this.logo = data.logo || ''
    this.compagny = data.compagny || ''
    this.phone = data.phone || ''
    this.email = data.email || ''
    this.website = data.website || ''
  }

  public toString(): string {
    return `#${this._id} - ${this.compagny} - ${this.phone}`
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

}