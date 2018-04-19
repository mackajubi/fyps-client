import { Component, OnInit, Input, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';
import * as $ from 'jquery';
import { ApiService } from '../../service/api.service';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';

@Component({
  selector: 'fiyps-document-review',
  templateUrl: './document-review.component.html',
  styleUrls: ['./document-review.component.css']
})
export class DocumentReviewComponent implements OnInit {
  fullscreen: boolean = false;
  visibility: boolean = false;
  fileId: string = null;
  studentGroupId: string = null;
  filename: string = null;

  @Output() refreshUploadsTable = new EventEmitter;

  @Input()  userType: string = null;
  @Input()  selectedFileId: string = null;
  @Input()  deliverableTypeId: string = null;

  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  constructor(private api: ApiService) { 
    
  }

  ngOnInit() {

  }

  /* Toggle container visibility */
  _slideToggle(container,icon,maxSize){
    $("."+icon+" > .icon").toggleClass("closed");
    $(".document-review-wrapper > .defaults-container").slideToggle("fast","linear");
    this.api._slideToggle(container,icon,maxSize);
  }
  
/*
  onSave(event){
    event.preventDefault();
    console.log("Data recieved from the form.")
    console.log(event)
  }
*/
  /* Approve file event */
  _approveFile(){
    $.ajax({
      type: "GET",
      url: this.api.getApproveDeliverableEndPoint()+"/"+this.fileId+"/"+this.studentGroupId+"?token="+this.api._getToken(),
      error:((error) =>{
        this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
      }),
      success:((data) =>{
        this.openPopup('Deliverable approved');
        this.refreshUploadsTable.emit();
      })      
    })
  }

  /* Handle toggle fullscreen */
  toggleFullScreen(mode){
    if(mode === 'full'){
      this.fullscreen = true;
      $(".pdfViewerContainer").addClass("fullscreen-pdfViewerContainer");
    }else if (mode === 'restore'){
      this.fullscreen = false;
      $(".pdfViewerContainer").removeClass("fullscreen-pdfViewerContainer");
    }
  }

  /* Pop over */
  openPopup(msg) {
    this.popup.open(Ng2MessagePopupComponent, {
      message: msg,
    })
  } 

  ngOnChanges(){
    if (this.selectedFileId){
      /* Fetch the file */
      this.filename = this.selectedFileId['name'];
      this.fileId = this.selectedFileId['id'];
      this.studentGroupId = this.selectedFileId['studentGroupId'];
      console.log(this.studentGroupId)
    }
  }

}
