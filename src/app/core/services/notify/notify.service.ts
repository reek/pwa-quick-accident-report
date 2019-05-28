import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(
    private platform: Platform,
    private toastController: ToastController) { }

  public async show(message: string, duration: number = 5000) {
    const toast = await this.toastController.create({
      message,
      duration,
      //color: "light",
      //header: "Notification",
      showCloseButton: true,
      closeButtonText: "✖",
      translucent: true,
      // buttons: [{
      //   text: 'Done',
      //   role: 'cancel',
      //   handler: () => {
      //     console.log('Cancel clicked');
      //   }
      // }
      // ]
    });
    await toast.present();
  }

  public howInstallApp() {

    this.platform.ready().then(() => {
      const platform = this.platform.platforms().toString().toLowerCase()

      // Detects if device is on iOS 
      const isIos = () => {
        const userAgent = platform || window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
      }

      // Detects if device is in standalone mode
      const isStandalone = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);

      // Checks if should display install popup notification:
      if (isIos() && !isStandalone()) {
        this.show('To install App tap "Share" then "Add to Home Screen"', 10000);
      }

    });

  }

}
