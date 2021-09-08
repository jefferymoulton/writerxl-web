import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from "./public/welcome/welcome.component";
import { DashboardComponent } from "./secured/dashboard/dashboard.component";
import { AuthGuard } from "@auth0/auth0-angular";
import { ProfileComponent } from "./secured/profile/profile.component";
import { AboutComponent } from "./public/about/about.component";

const routes: Routes = [
  {
    path: 'app/profile',
    component: ProfileComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'app',
    component: DashboardComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
