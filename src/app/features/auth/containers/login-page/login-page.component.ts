import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/shared/models/auth/auth';
import { ValidateIsEmailValid } from 'src/app/shared/validators/field.validator';
import { NotifyService } from 'src/app/core/services/notify/notify.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {

  public title: string = "Login"
  public form: FormGroup

  constructor(
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  public ngOnInit() {
    this.buildForm()
  }

  public ngOnDestroy() {
    // AutoUnsubscribe
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      email: [env.loginEmail, [ValidateIsEmailValid]],
      password: [env.loginPassword, [Validators.minLength(4)]]
    })
  }

  public onLogin() {
    if (this.form.valid) {
      console.log(this.title, 'form submitted');
      const payload: ILogin = this.form.value
      const subs = this.authService.login(payload).subscribe((res: any) => {
        console.log(this.title, 'response', res)
        if (res.user && res.token) {
          return this.router.navigateByUrl("/")
        }
      }, (err: any) => this.notifyService.show("Sorry, bad login 😞"),
        () => subs.unsubscribe());
    }
  }

}


