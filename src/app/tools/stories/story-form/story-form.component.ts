import { Component, OnInit } from '@angular/core';
import { Story } from "../story.model";

@Component({
  selector: 'wxl-story-form',
  templateUrl: './story-form.component.html',
  styleUrls: ['./story-form.component.scss']
})
export class StoryFormComponent implements OnInit {
  story: Story = {
    ID: 0,
    title: '',
    description: '',
    text: '',
    created: new Date(),
  }

  constructor() { }

  ngOnInit(): void {
  }

}
