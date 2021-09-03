import { Injectable, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import { BehaviorSubject, Observable, of, ReplaySubject, Subject, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@auth0/auth0-angular";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user$: Observable<User>;
  private userSubject = new Subject<User>();

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
    this.user$ = this.userSubject.asObservable();
  }

  getUser(email: string | undefined) {
    if (email === undefined) {
      throw new Error("Email is undefined.");
    }

    const url = 'http://localhost:5000/api/user/email/' + email;

    this.http.get<User>(url).subscribe({
      next: user => {
        if (user !== null) {
          this.userSubject.next(user);
        }
      },
      error: err => {
        if (err.status === 404) {
          this.createUser();
        }
      }
    });
  }

  createUser() {
    const url = 'http://localhost:5000/api/user';

    this.auth.user$.subscribe(authUser => {
      if (authUser !== null) {
        let req = {
          email: authUser?.email,
          name: authUser?.name,
          nickname: authUser?.nickname,
          picture: authUser?.picture
        };

        console.log("User was not found. Creating user based on auth user...", authUser, req);

        this.http.post<User>(url, req).subscribe(user => {
          if (user !== null) {
            console.log("User created.", user);
            this.userSubject.next(user);
          }
        });
      }
    })
  }
}
