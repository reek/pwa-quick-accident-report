import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../core/services/user/user.service';
import { IPerson } from 'src/app/shared/models/person/person';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-personal-view',
  templateUrl: './personal-view.component.html',
  styleUrls: ['./personal-view.component.scss'],
})
export class PersonalViewComponent implements OnInit {

  public payload: any[] = []
  public step: number = 1
  public userPersonalData$: Observable<IPerson>

  constructor(
    private router: Router,
    private userService: UserService) {
  }

  public ngOnInit() {
    this.userPersonalData$ = this.userService.getUserPersonal()
  }

  public onSave(payload: any): void {
    console.log('save user personal data', payload)
    this.userService.updateUserPersonal(payload)
  }

}
