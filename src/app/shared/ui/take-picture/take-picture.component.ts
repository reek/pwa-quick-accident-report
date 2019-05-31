import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { CameraService } from 'src/app/core/services/camera/camera.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ITakePicture } from '../../models/take-picture/take-picture';

@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.scss']
})
export class TakePictureComponent implements OnInit {

  @Input() public title: string = 'take picture'
  @Input() public instructions: string = 'take instructions'
  @Output() public onTaked: EventEmitter<ITakePicture> = new EventEmitter<ITakePicture>()

  public form: FormGroup
  public imageUrl: string = "assets/images/aperture.svg"
  public retry: boolean = false

  constructor(
    private formBuilder: FormBuilder,
    private cameraService: CameraService,
    private sanitizer: DomSanitizer) {
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

  public async onTake(useFake: boolean = false) {
    if (useFake) {
      const imageBlob = await fetch("https://picsum.photos/400/200/?_=" + Date.now()).then(res => res.blob()).catch(err => err);
      this.imageUrl = await this.blobToBase64(imageBlob).then(base64Url => base64Url).catch(err => err);
    } else {
      this.imageUrl = await this.cameraService.takePicture() || this.imageUrl
    }
    this.form.get('imageUrl').setValue(this.imageUrl);
    this.retry = true
    console.log(this.imageUrl)
  }

  public onSubmit() {
    if (this.form.valid) {
      const value: ITakePicture = this.form.value
      this.onTaked.emit(value)
      console.info('TakePictureform');
    }
  }

}