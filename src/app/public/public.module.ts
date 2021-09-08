import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about/about.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    AboutComponent,
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PublicModule { }
