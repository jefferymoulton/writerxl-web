import { Component, Input, OnInit } from '@angular/core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Submission } from "./submission.model";

@Component({
  selector: 'wxl-reviewer-submission-list',
  templateUrl: './submission-list.component.html',
  styleUrls: ['./submission-list.component.scss']
})
export class SubmissionListComponent implements OnInit {
  //@ViewChild('submissionForm') modal: SubmissionFormComponent;

  @Input()
  submission: Submission = {
    ID: 0,
    title: '',
    description: '',
    text: '',
    version: 1,
    datePosted: new Date()
  }

  faPlusCircle = faPlusCircle;
  closeResult = '';

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  open(submission: any) {
    this.modalService.open(submission, {ariaLabelledBy: 'modal-basic-title', size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: ModalDismissReasons): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
