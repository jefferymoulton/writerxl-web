import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { ToastComponent } from "./toast/toast.component";
import { ToastService } from "./toast/toast.service";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ProfileService } from "./profile/profile.service";
import { AppRoutingModule } from "../app-routing.module";

@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    ToastComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    NgbModule,
  ],
  providers: [
    ProfileService,
    ToastService,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    FooterComponent,
    NavBarComponent,
    ToastComponent,
  ]
})
export class SharedModule { }
