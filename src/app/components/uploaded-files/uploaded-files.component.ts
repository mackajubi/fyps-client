import { Component, OnInit, Input } from '@angular/core';
import { UploadEvent, UploadFile } from 'ngx-file-drop';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { ApiService } from '../../api.service';

@Component({
  selector: 'fiyps-uploaded-files',
  templateUrl: './uploaded-files.component.html',
  styleUrls: ['./uploaded-files.component.css']
})
export class UploadedFilesComponent implements OnInit {
  private confirmDeleteForm;
  public files: any[] = null;
  private visibility: boolean = false;
  private deleteSeletedFile: number = 0;

  @Input() private userType: string = null;

  constructor(private api: ApiService) {
    this._fetchFiles();
  }

  ngOnInit() {
    this.confirmDeleteForm = new FormGroup({
      yes: new FormControl("yes",Validators.compose([
        Validators.required
      ])),
      no: new FormControl("no",Validators.compose([
        Validators.required
      ])),
    });
  }
  /* On upload error of the file */
  onUploadError(event){
    this.visibility = true;
    console.log(event);
    $(".dz-wrapper").css("height","auto");
    console.log("Upload failed");
    let i = this.files.length + 1;
    let size = ((event[0].size) / 1000000).toFixed(2);
    this.files.push({
      'id': i,
      'name':event[0].name,
      'size':size + ' MB',
      'dateModified':event[0].lastModifiedDate
    });
    this.files.reverse();
    console.log(this.files);
    setTimeout(() =>{
      console.log("Wait for 2 seconds");
      this.visibility = false;
    },2000);
    
  }
  /* Toggle container visibility */
  _slideToggle(container,icon,maxSize){
    $("."+icon+" > .icon").toggleClass("closed");
    this.api._slideToggle(container,icon,maxSize);
  }

  /* On successful upload of the file */
  onUploadSuccess(event){
    console.log("File successfully uploaded");
    console.log(event);
  }
  /* Fetch files from the api */
  _fetchFiles(){
    console.log("Fetch the files currently in the db");
    this.files = [
      {
        'id':1,
        'name':'Second draft',
        'size':'1.2 MB',
        'dateModified':'Thu Dec 14 2017 07:34:57'
      },
      {
        'id':2,
        'name':'First draft',
        'size':'1.2 MB',
        'dateModified':'Thu Dec 14 2017 07:34:57'
      },
    ]
  }
  /* Remove the selected file */
  _removeFile(id){
    let ID = parseInt(id) + 1;
    this.deleteSeletedFile = ID;
    console.log(id);
  }
  /* Remove the selected file */
  _clearId(confirmDeleteForm){
    this.deleteSeletedFile = null;
    console.log(this.deleteSeletedFile)
  }
  /* Remove the selected file */
  _yes(rep){
    console.log("Delete the selected id"+ rep);
    //empty the deleteSelectedFile variable
  }

  _no(rep){
    console.log("Delete the selected id" + rep);
    //empty the deleteSelectedFile variable
  }
}
