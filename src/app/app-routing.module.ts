import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { UserLoggedGuard } from './shared/guards/user-logged.guard';
import { UserUnloggedGuard } from './shared/guards/user-unlogged.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', canActivate: [UserLoggedGuard], loadChildren: './features/dashboard/dashboard.module#DashboardModule' },
  { path: 'auth', canActivate: [UserUnloggedGuard], loadChildren: './features/auth/auth.module#AuthModule' },
  { path: 'personal', canActivate: [UserLoggedGuard], loadChildren: './features/personal/personal.module#PersonalModule' },
  { path: 'vehicles', canActivate: [UserLoggedGuard], loadChildren: './features/vehicle/vehicle.module#VehicleModule' },
  { path: 'accidents', canActivate: [UserLoggedGuard], loadChildren: './features/accident/accident.module#AccidentModule' },
  { path: 'insurances', canActivate: [UserLoggedGuard], loadChildren: './features/insurance/insurance.module#InsuranceModule' },
  { path: 'emergency', canActivate: [UserLoggedGuard], loadChildren: './features/emergency/emergency.module#EmergencyModule' },
  { path: 'feedback', canActivate: [UserLoggedGuard], loadChildren: './features/feedback/feedback.module#FeedbackModule' },
  { path: 'transmit', canActivate: [UserLoggedGuard], loadChildren: './features/transmit/transmit.module#TransmitModule' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
