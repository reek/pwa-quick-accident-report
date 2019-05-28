import { Component, OnInit } from '@angular/core';
import QRCode from 'qrcode'
import { UserService } from 'src/app/core/services/user/user.service';
import { IPerson, Person } from 'src/app/shared/models/person/person';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-transmit-page',
  templateUrl: './transmit-page.component.html',
  styleUrls: ['./transmit-page.component.scss'],
})
export class TransmitPageComponent implements OnInit {

  public qrcode: string
  public email: string
  public text: string

  constructor(
    private userService: UserService) { }

  public ngOnInit() {
    const subs = this.userService.getUserPersonal()
      .pipe(
        map((data: IPerson) => new Person(data)))
      .subscribe((data: Person) => {
        this.text = data.toPrettyText()
        this.generateQRCode(this.text)
      }, (err: any) => console.error("getUserPersonal", err),
        () => subs.unsubscribe());
  }

  public generateQRCode(text: string) {
    // doc: https://www.npmjs.com/package/qrcode#usage
    QRCode.toDataURL(text)
      .then((dataUrl: string) => this.qrcode = dataUrl)
      .catch((err: any) => console.error(err))
  }

  public onSendEmail() {
    if (this.email && this.text) {
      console.log(this.email, this.text)
      /* return this.http.put(`${env.apiEndpoint}/users/data`, payload) */
    }
  }

}