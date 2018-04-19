import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { ApiService } from '../../service/api.service';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { TooltipModule } from "ngx-tooltip";
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';

@Component({
  selector: 'fiyps-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.css']
})
export class UploadedFilesComponent implements OnInit {
  confirmDeleteForm;
  files: any[] = null;
  fileFound: boolean = false;
  visibility: boolean = false;
  deleteSeletedFile: number = 0;

  config: DropzoneConfigInterface = { };

  @Output() selectedFile = new EventEmitter;

  @Input()  userType: string = null;
  @Input()  deliverableTypeId: string = null;
  @Input()  groupDetails: string = null;
  @Input()  refreshUploadsTableFiles: number = null;

  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.confirmDeleteForm = new FormGroup({
      yes: new FormControl("yes",Validators.compose([
        Validators.required
      ])),
      no: new FormControl("no",Validators.compose([
        Validators.required
      ])),
    });

    this.config = {
      url: this.api._getUploadFilesEndPoint()+"?token="+this.api._getToken()+"&deliverableTypeId="+this.deliverableTypeId+"&userType="+this.userType,
      method: 'post',
      maxFilesize: 3,
      clickable: true,
      acceptedFiles: '.pdf,'       
    };

  }
  /* On upload error of the file */
  onUploadError(event){
    console.log("Request failed::"+event);
  }
  /* Toggle container visibility */
  _slideToggle(container,icon,maxSize){
    $("."+icon+" > .icon").toggleClass("closed");
    this.api._slideToggle(container,icon,maxSize);
  }

  /* On successful upload of the file */
  onUploadSuccess(event){
    this.visibility = true;
    this._fetchFiles();
    $(".dz-wrapper").css("height","auto");
    setTimeout(() =>{
      this.visibility = false;
    },500);    
  }
  /* Fetch files from the api */
  _fetchFiles(){
    this.api._fetchUploadedFiles(this.deliverableTypeId,this.groupDetails).subscribe(data => {
      if(data['data']){
        console.log(data['data'])
        if((data['data'] != 'empty')){
          this.fileFound = true;
          this.files = data['data'].reverse();
        }else{
          this.fileFound = false;
          this.files = [];
        }
      }else if(data['error']){
        this.openPopup(data['error']);
      }      
    }
    ,error => console.log(error))    
  }
  /* Remove the selected file */
  _removeFile(id){
    this.deleteSeletedFile = id;
    console.log(id);
    $("#mb-confirm-delete").addClass("open");
  }
  /* Remove the selected file */
  _yes(rep){
    //empty the deleteSelectedFile variable
    console.log("Delete the selected id"+ rep);
    $("#mb-confirm-delete").removeClass("open");
    console.log("Go ahead and delete this file:", this.deleteSeletedFile)
    $.ajax({
      type: "POST",
      url: this.api.getDeleteFileEndpoint(this.deleteSeletedFile),
      error: ((err) =>{
        this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
      }),
      success:((data) =>{
        if(data['data'] == "success"){
          console.log("File has been successfully deleted")
          this.openPopup('File successfully deleted');
          this._fetchFiles()
        }else if(data['error']){
          this.openPopup(data['error']);
        }
      })   
    })
  }

  /* Handle no responses */
  _no(rep){
    //empty the deleteSelectedFile variable
    $("#mb-confirm-delete").removeClass("open");
    this.deleteSeletedFile = null;
  }

  /* Handle Read file event */
  _readFile(id,studentGroupId,name){
    this.selectedFile.emit({'id':id,'studentGroupId':studentGroupId,'name':name});
  }

  /* Handle submission events */
  _submitForGrading(filename,id,approval){
    if(approval == 'true'){
      $.ajax({
        type:'POST',
        url: this.api.getSubmitDeliverableEndpoint(id),
        error: ((err) =>{
          this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
        }),
        success:((data) =>{
          if(data['data']){
            this.openPopup("The "+filename + " has been successfully submitted for grading");
            this._fetchFiles();
          }else{
            this.openPopup(data['data'])
          }
        })
      })
    }else{
      this.openPopup("This file is not ready for submission");
    }

  }

  /* Pop over */
  openPopup(msg) {
    this.popup.open(Ng2MessagePopupComponent, {
      message: msg,
    })
  } 

  ngOnChanges(){
    if(this.userType == '1'){
      this.groupDetails = this.api._getUserName()
    }
    if(this.groupDetails || (this.refreshUploadsTableFiles != 0)){
      this._fetchFiles();
    }
  }


}
