import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { IRegister } from 'src/app/shared/models/auth/auth';
import { ValidateIsPasswordMatch, ValidateIsEmailValid } from 'src/app/shared/validators/field.validator';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {

  public title: string = "Register"
  public form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) { }

  public ngOnInit() { // validator.emailMalformed()
    this.form = this.formBuilder.group({
      email: ['', [ValidateIsEmailValid], this.isEmailTaken.bind(this)],
      password: ['', [Validators.minLength(4)]],
      confirmPassword: ['', [Validators.minLength(4)]]
    }, {
        validator: ValidateIsPasswordMatch
      })
  }

  private isEmailTaken(control: AbstractControl) {
    return this.authService.checkEmailTaken({ email: control.value })
      .pipe(
        map((res: any) => {
          return !res.exists ? null : { emailTaken: true };
        }))
  }

  public onRegister() {
    if (this.form.valid) {
      console.log('form register submitted');
      const payload: IRegister = this.form.value
      this.authService.register(payload).subscribe((res: any) => {
        console.log('register response', res)
        if (res.user && res.token) {
          return this.router.navigateByUrl("/personal/view")
        }
      });

    }
  }

  public onReset() {
    this.form.reset();
  }

}

