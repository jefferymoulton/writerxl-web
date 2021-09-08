import { Component, Inject } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";
import { ProfileService } from "../profile.service";

@Component({
  selector: 'wxl-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  faUser = faUser;

  constructor(
    public auth: AuthService,
    public profile: ProfileService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
