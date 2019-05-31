import { Component, OnInit } from '@angular/core';
import { AccidentService } from 'src/app/features/accident/accident.service';
import { IAccident } from 'src/app/shared/models/accident/accident';
import { ITakePicture } from 'src/app/shared/models/take-picture/take-picture';

@Component({
  selector: 'app-accident-new',
  templateUrl: './accident-new.component.html',
  styleUrls: ['./accident-new.component.scss'],
})
export class AccidentNewComponent implements OnInit {

  public step: number = 1
  public payload: IAccident[] = []
  public images: ITakePicture[] = []

  constructor(
    private accidentService: AccidentService) { }

  public ngOnInit() {
  }

  public onNext(data: any, propName: string): void {
    if (data.imageUrl) {
      this.images.push(data)
    } else {
      if (propName)
        data = JSON.parse(`{ "${propName}" : ${JSON.stringify(data)} }`)
      this.payload.push(data)
    }
    this.step += 1
    console.log('pushed', data)
  }

  public onBack(): void {
    if (this.step > 0)
      this.step -= 1
  }

  public onSave(): void {
    const payload: IAccident = Object.assign({}, ...this.payload, { images: this.images })
    console.log('save new accident', payload)
    this.accidentService.newUserAccident(payload)
  }
}