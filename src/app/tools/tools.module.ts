import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesModule } from "./stories/stories.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoriesModule,
  ],
  exports: [
    StoriesModule
  ]
})
export class ToolsModule { }
