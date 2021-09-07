import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "@auth0/auth0-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { environment as env } from '../environments/environment';
import { ProfileService } from "./shared/services/profile.service";
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ToastComponent } from './shared/toast/toast.component';
import { UserAreaModule } from "./user-area/user-area.module";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavBarComponent,
    FooterComponent,
    ToastComponent,
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
  providers: [
    ProfileService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
