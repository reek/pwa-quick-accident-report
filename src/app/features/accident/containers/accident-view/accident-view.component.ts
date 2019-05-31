import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { IAccident } from 'src/app/shared/models/accident/accident';
import { switchMap, tap, map } from 'rxjs/operators';
import { AccidentService } from '../../accident.service';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from 'src/app/shared/ui/image-viewer/image-viewer.component';

@Component({
  selector: 'app-accident-view',
  templateUrl: './accident-view.component.html',
  styleUrls: ['./accident-view.component.scss'],
})
export class AccidentViewComponent implements OnInit {

  public accident$: Observable<IAccident>
  private id$: Observable<String>

  constructor(
    private modalController: ModalController,
    private accidentService: AccidentService,
    private route: ActivatedRoute) {
  }

  public ngOnInit() {
    this.getUserAccident()
  }

  public getUserAccident() {
    // doc: https://angular.io/api/router/ParamMap
    this.id$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get('id')),
        tap((id: string) => console.log(`accident id: ${id}`))
      )

    this.accident$ = this.id$.pipe(
      // doc: https://www.learnrxjs.io/operators/transformation/switchmap.html
      switchMap((id: string) => this.accidentService.getUserAccident(id)),
      tap(res => console.log(this.mergeSubObject(res)))
    )
  }

  public onPrint() {
    window.print()
  }

  public camel2title(camelCase: string) {
    return camelCase.replace(/([A-Z])/g, (match) => ` ${match}`).replace(/^./, (match) => match.toUpperCase());
  }

  public mergeSubObject(obj: IAccident) {
    const newObj = {}
    for (let key in obj) {
      let value = obj[key]
      if (obj.hasOwnProperty(key)) {
        if (value instanceof Object) {
          for (let key in value) {
            newObj[key] = value[key]
          }
        } else {
          newObj[key] = obj[key]
        }
      }
    }
    return newObj
  }

  async viewImage(src: string, title: string = '', description: string = '') {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: {
        imgSource: src,
        imgTitle: title,
        imgDescription: description
      },
      cssClass: 'modal-fullscreen',
      keyboardClose: true,
      showBackdrop: true
    });

    return await modal.present();
  }

}