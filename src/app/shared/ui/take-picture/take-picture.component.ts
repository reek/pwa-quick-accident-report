import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CameraService } from 'src/app/core/services/camera/camera.service';
import { IPicture } from '../../models/picture/picture';
import * as Tesseract from 'tesseract.js'


@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.scss']
})
export class TakePictureComponent implements OnInit {

  @Input() public title: string = 'take picture'
  @Output() public onTaked: EventEmitter<IPicture> = new EventEmitter<IPicture>()

  public form: FormGroup
  public imageUrl: any = "assets/images/aperture.png"
  public retry: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private cameraService: CameraService) {
  }

  public ngOnInit() {
    this.buildForm()
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      title: [this.title, [Validators.required]],
      imageUrl: ['', [Validators.required]]
    })
  }

  public async base64toBlob(base64Data: string): Promise<Blob> {
    return await fetch(base64Data).then(res => res.blob());
  }

  public async blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(blob)
      reader.onloadend = () => {
        resolve(reader.result)
      }
      reader.onerror = (err) => {
        reader.abort();
        reject(err)
      }
    })
  }

  public async onTake(fake: boolean = false) {
    if (fake) {
      //this.imageUrl = await fetch("https://loremflickr.com/300/200/car&_=" + Date.now()).then(res => res.url)
      const blob = await fetch("https://loremflickr.com/300/200/car&_=" + Date.now()).then(res => res.blob()).catch(err => err);
      this.imageUrl = await this.blobToBase64(blob).then(base64 => base64).catch(err => err);
    } else {
      this.imageUrl = await this.cameraService.takePicture()
    }
    this.form.get('imageUrl').setValue(this.imageUrl);

    /*     
    const blob = await this.base64toBlob(this.imageUrl)
        console.log(5, this.imageUrl, blob)
    
        const tesseract = Tesseract.create({
          langPath: '/assets/lib/fra.traineddata',
          corePath: '/assets/lib/index.js',
          workerPath: '/assets/lib/worker.js',
        });
    
        tesseract.recognize(blob)
          .progress(message => console.log(message))
          .catch(err => console.error(err))
          .then(result => console.log(result))
          .finally(resultOrError => console.log(resultOrError)) 
          */
    this.retry = true
  }

  public onSubmit() {
    if (this.form.valid) {
      const value: IPicture = this.form.value
      this.onTaked.emit(value)
      console.info('TakePictureform');
    }
  }

}