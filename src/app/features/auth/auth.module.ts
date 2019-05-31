import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './containers/forgot-password-page/forgot-password-page.component';
import { ResetPasswordPageComponent } from './containers/reset-password-page/reset-password-page.component';
import { FieldErrorMessageComponent } from 'src/app/shared/ui/field-error-message/field-error-message.component';
import { VerifyEmailPageComponent } from './containers/verify-email-page/verify-email-page.component';

@NgModule({
  declarations: [
    AuthPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPasswordPageComponent,
    ResetPasswordPageComponent,
    VerifyEmailPageComponent,
    FieldErrorMessageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthPageComponent, children: [
          { path: "login", component: LoginPageComponent },
          { path: "register", component: RegisterPageComponent },
          { path: "forgot/password", component: ForgotPasswordPageComponent },
          { path: "reset/password/:token", component: ResetPasswordPageComponent },
          { path: "verify/email/:token", component: VerifyEmailPageComponent },
          {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ]
})
export class AuthModule { }
