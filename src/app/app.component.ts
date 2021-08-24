import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { UserService } from "./services/user.service";
import { Observable } from "rxjs";
import { WxlUser } from "./models/user.model";

@Component({
  selector: 'wxl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'writerxl-web';

  constructor(
    private auth: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(authUser => {
      if (authUser != null) {
        console.log("Auth user logged in", authUser);

        let wxlUser = new WxlUser();
        wxlUser.email = authUser.email;
        wxlUser.nickname = authUser.nickname;
        wxlUser.name = authUser.name;
        wxlUser.picture = authUser.picture;

        this.getWriterXLUser(wxlUser);
      }
    });
  }

  getWriterXLUser(wxlUser: WxlUser): void {
    this.userService.getUserByEmail(wxlUser.email).subscribe({
      next: user => {
          console.log("Writer XL user retrieved.", user);
          this.userService.user = user;
          console.log("User service user.", this.userService.user);
      },
      error: err => {
        if (err.status === 404) {
          console.log("Writer XL user does not exist. Creating new user...");
          this.createWriterXLUser(wxlUser);
        }
      }
    });
  }

  createWriterXLUser(wxlUser: WxlUser): void {
    this.userService.createUser(wxlUser).subscribe({
      next: user => {
        console.log("WriterXL user created.", user);
        this.userService.user = user;
        console.log("User service user.", this.userService.user);
      },
      error: err => console.log("Unable to create new WriterXL user.", err)
    })
  }
}
