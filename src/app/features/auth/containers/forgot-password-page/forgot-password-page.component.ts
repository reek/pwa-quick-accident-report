import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { IForgotPassword } from 'src/app/shared/models/auth/auth';
import { ValidateIsEmailValid } from 'src/app/shared/validators/field.validator';
import { NotifyService } from 'src/app/core/services/notify/notify.service';
import { Subscription } from 'rxjs';
import { AutoUnsubscribe } from "ngx-auto-unsubscribe";

@AutoUnsubscribe()
@Component({
  selector: 'app-forgot-password-page',
  templateUrl: './forgot-password-page.component.html',
  styleUrls: ['./forgot-password-page.component.scss'],
})
export class ForgotPasswordPageComponent implements OnInit, OnDestroy {

  public title: string = "Forgot Password"
  public form: FormGroup
  public forgotPasswordSubs: Subscription

  constructor(
    @Inject(NotifyService) private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  public ngOnInit() {
    this.buildForm()
  }

  public ngOnDestroy() {
    // AutoUnsubscribe
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [ValidateIsEmailValid]],
    })
  }

  public onForgotPassword() {
    if (this.form.valid) {
      console.log(this.title, 'form submitted');
      const payload: IForgotPassword = this.form.value
      payload.baseUrl = location.href.replace("/forgot/", "/reset/")

      this.forgotPasswordSubs = this.authService.forgotPassword(payload)
        .subscribe((res: any) => {
          this.notifyService.show(res.message)
        }, (err: any) => console.error(this.title, "service", err),
          () => console.log(this.title, "subscription completed"))
    }
  }

}