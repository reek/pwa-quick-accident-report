import { Injectable } from '@angular/core';
import { Capacitor, Plugins, CameraResultType, CameraSource, CameraOptions, CameraDirection } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  public async takePicture() {
    // docs: https://capacitor.ionicframework.com/docs/apis/camera/
    const { Camera } = Plugins;
    const options: CameraOptions = {
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      direction: CameraDirection.Rear
    }
    const image = await Camera.getPhoto(options).catch(err => console.error(err))

    // Example of using the Base64 return type. It's recommended to use CameraResultType.Uri
    // instead for performance reasons when showing large, or a large amount of images.
    //this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.base64Data));
    return await (image && image.dataUrl) || null
  }
}
