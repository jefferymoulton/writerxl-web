import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from "@auth0/auth0-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UserAreaModule } from "./user-area/user-area.module";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from "./shared/footer/footer.component";
import { NavBarComponent } from "./shared/nav-bar/nav-bar.component";
import { ToastComponent } from "./shared/toast/toast.component";

import { environment as env } from '../environments/environment';

import { ProfileService } from "./shared/profile.service";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    ToastComponent,
    WelcomeComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor
      }
    }),
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    UserAreaModule,
  ],
  exports: [
    NgbModule,
  ],
  providers: [
    ProfileService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
