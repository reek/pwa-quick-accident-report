import { Injectable } from '@angular/core';
import { Plugins, CameraResultType, CameraSource, CameraOptions } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor() { }

  public async takePicture() {
    const { Camera } = Plugins;
    const options: CameraOptions = {
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    }
    const image = await Camera.getPhoto(options).catch(err => err);
    console.log('getPhoto', image);
    if (!image) {
      return;
    }
    // Example of using the Base64 return type. It's recommended to use CameraResultType.Uri
    // instead for performance reasons when showing large, or a large amount of images.
    //this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.base64Data));
    return await image.dataUrl
  }
}
