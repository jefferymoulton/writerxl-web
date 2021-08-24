import { Injectable, OnInit } from '@angular/core';
import { WxlUser } from "../models/user.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@auth0/auth0-angular";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user!: WxlUser;

  private userUrl = 'api/users.json';

  constructor(
    private http: HttpClient
  ) { }

  createUser(user: WxlUser): Observable<WxlUser> {
    const url = 'http://localhost:5000/api/user';

    console.log("Creating user from auth...");
    console.log(user);

    return this.http.post<WxlUser>(url, user);
  }

  getUserByEmail(email: string | undefined): Observable<WxlUser> {
    const url = 'http://localhost:5000/api/user/email/' + email;
    console.log("Getting user with email address: " + email);
    return this.http.get<WxlUser>(url);
  }
}
