import { Component, OnInit } from '@angular/core';
import { AuthService } from "@auth0/auth0-angular";
import { ProfileService } from "./shared/services/profile.service";

@Component({
  selector: 'wxl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'writerxl-web';

  constructor(
    private auth: AuthService,
    private profile: ProfileService
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(authUser => {
      if (authUser !== null) {
        this.profile.getProfile(authUser?.email);
      }
    });
  }
}
