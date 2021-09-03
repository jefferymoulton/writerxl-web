import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { UserService } from "./services/user.service";
import { User } from "./models/user.model";

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
      if (authUser !== null) {
        console.log('Auth user found', authUser);

        this.userService.getUser(authUser?.email);
      }
    });

    this.userService.user$.subscribe(user => {
      if (user !== null) {
        console.log('WriterXL user found.', user);
      }
    });
  }
}
