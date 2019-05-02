import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode'
import { PersonalService } from 'src/app/features/personal/personal.service';
import { IPersonal } from 'src/app/shared/models/personal/personal';

@Component({
  selector: 'app-transmit-page',
  templateUrl: './transmit-page.component.html',
  styleUrls: ['./transmit-page.component.scss'],
})
export class TransmitPageComponent implements OnInit {

  public qrCode: string
  public email: string
  public data: IPersonal

  constructor(
    private personalService: PersonalService) { }

  public ngOnInit() {
    this.personalService.getPersonal()
      .subscribe((data: IPersonal) => {
        this.data = data
        this.generateQRCode(data)
      })
  }

  public generateQRCode(data: IPersonal) {
    // doc: https://www.npmjs.com/package/qrcode#usage
    QRCode.toDataURL(JSON.stringify(data))
      .then(url => {
        this.qrCode = url
      })
      .catch(err => {
        console.error(err)
      })
  }

  public onSendEmail() {
    if (this.email && this.data) {
      console.log(this.email, this.data)
      /* return this.http.put(`${env.apiEndpoint}/users/personal`, payload) */
    }
  }

}