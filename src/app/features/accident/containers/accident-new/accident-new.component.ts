import { Component, OnInit } from '@angular/core';
import { AccidentService } from 'src/app/features/accident/accident.service';
import { IAccident } from 'src/app/shared/models/accident/accident';
import { IPicture } from 'src/app/shared/models/picture/picture';

@Component({
  selector: 'app-accident-new',
  templateUrl: './accident-new.component.html',
  styleUrls: ['./accident-new.component.scss'],
})
export class AccidentNewComponent implements OnInit {

  public step: number = 1
  public payload: IAccident[] = []
  public images: IPicture[] = []

  constructor(
    private accidentService: AccidentService) { }

  public ngOnInit() {
  }

  public onNext(data: any): void {
    if (data.imageUrl) {
      this.images.push(data)
    } else {
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
    this.accidentService.newAccident(payload)
  }
}