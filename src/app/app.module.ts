import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "@auth0/auth0-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfileComponent } from './components/profile/profile.component';

import { environment as env } from '../environments/environment';
import { UserService } from "./services/user.service";
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashboardComponent,
    NavBarComponent,
    ProfileComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor
      }
    }),
    NgbModule,
    FontAwesomeModule,
  ],
  providers: [
    UserService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
