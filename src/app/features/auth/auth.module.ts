import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { LoginPageComponent } from './containers/login-page/login-page.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { ForgotPageComponent } from './containers/forgot-page/forgot-page.component';
import { FieldErrorMessageComponent } from 'src/app/shared/ui/field-error-message/field-error-message.component';

@NgModule({
  declarations: [
    AuthPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPageComponent,
    FieldErrorMessageComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: AuthPageComponent, children: [
          { path: "login", component: LoginPageComponent },
          { path: "register", component: RegisterPageComponent },
          { path: "forgot", component: ForgotPageComponent },
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
