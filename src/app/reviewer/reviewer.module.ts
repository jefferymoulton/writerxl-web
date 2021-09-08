import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmissionListComponent } from './submissions/submission-list.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SubmissionFormComponent } from "./submissions/submission-form.component";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    SubmissionListComponent,
    SubmissionFormComponent
  ],
  exports: [
    SubmissionListComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
  ]
})
export class ReviewerModule { }
