import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from "@auth0/auth0-angular";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment as env } from '../environments/environment';
import { ProfileService } from "./shared/profile/profile.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { SecuredModule } from "./secured/secured.module";
import { PublicModule } from "./public/public.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
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
    FormsModule,
    HttpClientModule,
    NgbModule,
    PublicModule,
    SecuredModule,
    SharedModule,
  ],
  providers: [
    ProfileService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
