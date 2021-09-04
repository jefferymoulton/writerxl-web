import { Injectable } from '@angular/core';
import { Profile } from "../models/profile.model";
import { Observable, ReplaySubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@auth0/auth0-angular";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile$: Observable<Profile>;
  private subject = new ReplaySubject<Profile>();

  profile?: Profile;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.profile$ = this.subject.asObservable();
  }

  getProfile(email: string | undefined) {
    if (email === undefined) {
      throw new Error("Email is undefined.");
    }

    const url = `http://localhost:5000/api/profile/${email}`;

    this.http.get<Profile>(url).subscribe({
      next: profile => {
        if (profile !== null) {
          this.profile = profile;
          this.subject.next(profile);
        }
      },
      error: err => {
        if (err.status === 404) {
          this.createProfile();
        }
      }
    });
  }

  createProfile() {
    const url = 'http://localhost:5000/api/profile';

    this.auth.user$.subscribe(authUser => {
      if (authUser !== null) {
        let req = {
          email: authUser?.email,
          name: authUser?.name,
          nickname: authUser?.nickname,
          picture: authUser?.picture
        };

        console.log("Profile was not found. Creating profile based on auth user...", authUser, req);

        this.http.post<Profile>(url, req).subscribe(profile => {
          if (profile !== null) {
            console.log("Profile created.", profile);

            this.profile = profile;
            this.subject.next(profile);
          }
        });
      }
    })
  }
}
