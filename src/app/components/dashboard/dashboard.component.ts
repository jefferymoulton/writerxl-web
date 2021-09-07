import { Component, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    public profileService: ProfileService
  ) { }

  ngOnInit(): void {
  }

}
