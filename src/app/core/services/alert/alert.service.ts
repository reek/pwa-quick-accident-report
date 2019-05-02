import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController) { }

  public async deleteConfirm(okayHandler = () => { }, cancelHandler = () => { }) {
    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Are you sure you want to delete ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('delete confirm Cancel');
            cancelHandler()
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('delete confirm Okay');
            okayHandler()
          }
        }
      ]
    });

    await alert.present();
  }

}
