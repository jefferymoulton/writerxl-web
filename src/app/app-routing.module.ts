import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
  {
    path: 'app/profile',
    component: ProfileComponent,
    canActivate: [ AuthGuard ],

  },
  {
    path: 'app',
    component: DashboardComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
