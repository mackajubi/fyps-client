import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from  '@angular/forms';
import * as $ from 'jquery';
import { ApiService } from '../../api.service';

@Component({
  selector: 'fiyps-document-review',
  templateUrl: './document-review.component.html',
  styleUrls: ['./document-review.component.css']
})
export class DocumentReviewComponent implements OnInit {
   content;
   docReviewForm;
   visibility: boolean = true;

  @Input()  userType: string = null;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.docReviewForm = new FormGroup({
      content: new FormControl(),
    })
  }

  /* Toggle container visibility */
  _slideToggle(container,icon,maxSize){
    $("."+icon+" > .icon").toggleClass("closed");
    this.api._slideToggle(container,icon,maxSize);
  }
  

  onEditorChange(event){
    console.log("On editor change: " + event);
  }

  onChange(event){
    console.log("on change: " + event);
  }

  onReady(event){
    console.log("editor ready");
    this.content = `<p> editor is ready </p>`
    this._fetch();
    this.visibility = false;
  }

  onFocus(event){
    console.log("on focus")
  }
  
  onBlur(event){
    console.log("on Blur")
  }

  onContentDom(event){
    console.log("content dom:" + event);
  }

  onFileUploadRequest(event){
    console.log("On file upload:" + event);
  }

  _fetch(){
    this.content = "assets/doc/Course Outline.docx";
  }

  onSave(event){
    event.preventDefault();
    console.log("Data recieved from the form.")
    console.log(event)
  }

}
