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
    console.log("Getting user with email address: " + email);

    this.http.get<User>(url).subscribe({
      next: user => {
        if (user !== null) {
          console.log("User found.", user);
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

        console.log("Retrieved authUser. Creating user...", authUser, req);

        this.http.post<User>(url, req).subscribe(user => {
          if (user !== null) {
            console.log("User created.", user);
            this.userSubject.next(user);
          }
        });
      }
    })
  }

/*
  getWriterXLUser(wxlUser: IUser) {
    this.getUserByEmail(wxlUser.email).subscribe({
      next: user => {
        console.log("WriterXL user retrieved.", user);
        console.log("WriterXL user name.", user.name);
        this.userBehaviorSubject.next(user);
      },
      error: err => {
        if (err.status === 404) {
          console.log("WriterXL user does not exist. Creating user...");
          this.createUser(wxlUser);
        }
      }
    });
  }

  getUserByEmail(email: string | undefined): Observable<IUser> {
    const url = 'http://localhost:5000/api/user/email/' + email;
    console.log("Getting user with email address: " + email);

    return this.http.get<IUser>(url);
  }

  createUser(user: IUser) {
    const url = 'http://localhost:5000/api/user';

    console.log("Creating user.", user);

    this.http.post<IUser>(url, user).subscribe((user) => {
      if (user !== null) {
        this.userBehaviorSubject.next(user);
      }
    });
  }
 */
}
