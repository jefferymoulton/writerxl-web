import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProfileComponent } from "./profile/profile.component";
import { ReviewerModule } from "../reviewer/reviewer.module";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    DashboardComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    ReviewerModule,
    FormsModule,
  ]
})
export class UserAreaModule { }
