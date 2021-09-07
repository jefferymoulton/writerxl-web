import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from "../../services/profile.service";
import { Profile } from "../../models/profile.model";
import { ToastService } from "../../services/toast.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  toastMessage = '';
  saving = false;

  @Input()
  profile: Profile = {
    email: '',
    name: '',
    nickname: '',
    picture: '',
    description: '',
  }

  constructor(
    public profileService: ProfileService,
    private toastService: ToastService,
  ) { }

  ngOnInit(): void {
    this.profileService.profile$.subscribe(subProfile => {
      if (subProfile !== null) {
        this.profile = subProfile;
        if (this.saving) {
          this.toastService.show('Profile has been saved.', {
            classname: 'bg-success text-light',
            autohide: true,
          })
        }
      }
    });
  }

  saveProfile(): void {
    this.saving = true;
    this.profileService.updateProfile(this.profile);
  }

}
