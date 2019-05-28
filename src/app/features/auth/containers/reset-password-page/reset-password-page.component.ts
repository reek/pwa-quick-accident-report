import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { NotifyService } from 'src/app/core/services/notify/notify.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IResetPassword } from 'src/app/shared/models/auth/auth';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.scss'],
})
export class ResetPasswordPageComponent implements OnInit, OnDestroy {

  public title: string = "Reset Password"
  public form: FormGroup
  public token$: Subscription
  public resetPasswordSubs: Subscription

  constructor(
    @Inject(NotifyService) private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute) { }


  public ngOnInit() {
    this.buildForm()
    this.getParamToken()
  }

  public ngOnDestroy() {
    // auto unsubscribe
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      token: ['', [Validators.minLength(20)]],
      password: ['', [Validators.minLength(4)]]
    })
  }

  public onResetPassword() {
    if (this.form.valid) {
      console.log(this.title, 'form submitted');
      const payload: IResetPassword = this.form.value

      this.resetPasswordSubs = this.authService.resetPassword(payload).subscribe((res: any) => {
        this.notifyService.show(res.message)
      }, (err: any) => console.error(this.title, "service", err))
    }
  }

  public getParamToken() {
    this.token$ = this.route.paramMap
      .pipe(
        map((paramMap: ParamMap) => paramMap.get("token")),
      ).subscribe((token: string) => {
        this.form.controls.token.setValue(token)
      }, (err: any) => console.error("getParamToken", err))
  }

}