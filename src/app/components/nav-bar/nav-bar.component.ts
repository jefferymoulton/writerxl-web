import { Component, Inject, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from "@auth0/auth0-angular";
import { DOCUMENT } from "@angular/common";
import { UserService } from "../../services/user.service";
import { IUser } from "../../models/user.model";

@Component({
  selector: 'wxl-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  public user: IUser | undefined;

  faUser = faUser;
  isNavbarCollapsed=true;

  constructor(
    public auth: AuthService,
    private userService: UserService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(authUser => {
      if (authUser != null) {
        console.log(authUser);
        this.getUserByEmail(authUser.email);
      }
    });
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

  getUserByEmail(email: string | undefined) {
    console.log({"email": email});
    this.userService.getUserByEmail(email).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
  }

}
