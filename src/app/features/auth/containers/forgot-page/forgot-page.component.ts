import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { IForgot } from 'src/app/shared/models/auth/auth';
import { ValidateIsEmailValid } from 'src/app/shared/validators/field.validator';

@Component({
  selector: 'app-forgot-page',
  templateUrl: './forgot-page.component.html',
  styleUrls: ['./forgot-page.component.scss'],
})
export class ForgotPageComponent implements OnInit {

  public title: string = "Forgot Password"
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
      email: ['', [ValidateIsEmailValid]]
    })
  }

  public onForgot() {
    if (this.form.valid) {
      console.log('form forgot submitted');
      const payload: IForgot = this.form.value
      this.authService.forgot(payload)
    }
  }

  public onReset() {
    this.form.reset();
  }

}