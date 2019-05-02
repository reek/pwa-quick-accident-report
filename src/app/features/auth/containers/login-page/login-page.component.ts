import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ILogin } from 'src/app/shared/models/auth/auth';
import { ValidateIsEmailValid } from 'src/app/shared/validators/field.validator';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  public title: string = "Login"
  public form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  public ngOnInit() {
    this.buildForm()
  }

  public buildForm() {
    this.form = this.formBuilder.group({
      email: ['test@mail.com', [ValidateIsEmailValid]],
      password: ['1234', [Validators.minLength(4)]]
    })
  }

  public onLogin() {
    if (this.form.valid) {
      console.log('form login submitted');
      const payload: ILogin = this.form.value
      this.authService.login(payload).subscribe((res: any) => {
        console.log('login response', res)
        if (res.user && res.token) {
          return this.router.navigateByUrl("/")
        }
      });
    }
  }

  public onReset() {
    this.form.reset();
  }

}


