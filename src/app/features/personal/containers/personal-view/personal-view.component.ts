import { Component, OnInit } from '@angular/core';
import { PersonalService } from '../../personal.service';
import { IPersonal } from 'src/app/shared/models/personal/personal';
import { IAddress } from 'src/app/shared/models/address/address';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-personal-view',
  templateUrl: './personal-view.component.html',
  styleUrls: ['./personal-view.component.scss'],
})
export class PersonalViewComponent implements OnInit {

  public payload: any[] = []
  public step: number = 1

  public addressData$: Observable<IAddress>;
  public personData$: Observable<IPersonal>;

  constructor(
    private router: Router,
    private personalService: PersonalService) {
  }

  public ngOnInit() {
    this.personData$ = this.personalService.getPersonal()
    this.addressData$ = this.personData$.pipe(map((data: IPersonal) => data.address))
  }

  public onNext(data: any): void {
    this.payload.push(data)
    this.step += 1
    console.log('push', data, this.payload)
  }

  public onBack(): void {
    if (this.step > 0)
      this.step -= 1
  }

  public onSave(): void {
    console.log('save personal data', this.payload)
    const payload: IPersonal = Object.assign({}, ...this.payload)
    this.personalService.updatePersonal(payload).subscribe((res: any) => {
      if (res.user && res.token)
        this.router.navigateByUrl("/")
    })
  }

}
