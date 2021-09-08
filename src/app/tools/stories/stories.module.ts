import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";
import { StoryListComponent } from "./story-list/story-list.component";
import { StoryFormComponent } from './story-form/story-form.component';



@NgModule({
  declarations: [
    StoryListComponent,
    StoryFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    StoryListComponent,
  ]
})
export class StoriesModule { }
