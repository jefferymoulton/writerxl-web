import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SecuredModule { }
