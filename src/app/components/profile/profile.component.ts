import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { Profile } from "../../models/profile.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public profile: ProfileService
  ) { }

  ngOnInit(): void { }

}
