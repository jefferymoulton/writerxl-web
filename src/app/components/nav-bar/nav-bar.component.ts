import { Component, Inject, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'wxl-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  faUser = faUser;
  isNavbarCollapsed=true;

  constructor(
    public auth: AuthService,
    private user: UserService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => {
      console.log(user);
    });
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
