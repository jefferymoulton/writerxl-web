import { Injectable } from '@angular/core';
import { Profile } from "./profile.model";
import { Observable, ReplaySubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@auth0/auth0-angular";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profile$: Observable<Profile>;
  private subject = new ReplaySubject<Profile>();

  firstLogin = false;

  private API_URL = `${environment.API_URL}/profile`;

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

    const url = `${this.API_URL}/${email}`;

    this.http.get<Profile>(url).subscribe({
      next: profile => {
        if (profile !== null) {
          this.subject.next(profile);
        }
      },
      error: err => {
        if (err.status === 404) {
          this.firstLogin = true;
          this.createProfile();
        }
      }
    });
  }

  createProfile() {
    this.auth.user$.subscribe(authUser => {
      if (authUser !== null) {
        let req = {
          email: authUser?.email,
          name: authUser?.name,
          nickname: authUser?.nickname,
          picture: authUser?.picture
        };

        console.log("Profile was not found. Creating profile based on auth user...", authUser, req);

        this.http.post<Profile>(this.API_URL, req).subscribe(profile => {
          if (profile !== null) {
            console.log("Profile created.", profile);
            this.subject.next(profile);
          }
        });
      }
    });
  }

  updateProfile(updated: Profile) {
    this.http.put<Profile>(this.API_URL, updated).subscribe(profile => {
      if (profile !== null) {
        console.log("Profile updated.", profile);
        this.subject.next(profile);
      }
    });
  }
}
