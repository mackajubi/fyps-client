import { Component,OnInit,OnChanges, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'fiyps-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit{
  //@Input() _cat: String = null;
  //@Input() _new_path: String = null;
  //@Input() _hide: String = null;
   breadcrumb = [];

  @Input()
  set setBreadcrumb(currentGroup: any[]){
    console.log("update the breadcrumb");
    console.log(currentGroup);
  }

   newPostForm;
   maxLengthTitle: number = 20;
   maxLength: number = 400;
   currentTitleSize: number = 0;
   currentSize: number = 0;

  @Output()  event = new EventEmitter<string>();
  
  constructor(private api: ApiService){

  }

  ngOnInit(){

    setInterval(() =>{
      this.breadcrumb = [];

      this.api._getBreadcrumb().subscribe(item =>{
        this.breadcrumb.push(item);
      });
    },100);

    this.newPostForm = new FormGroup({
      title: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(this.maxLengthTitle)
      ])),
      message: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(this.maxLength)
      ]))
    });

  }
  /* Show the form */
  _showForm(){
    $("#new-post").show();
  }
  /* Remove the form */
  _hideForm(){
    this.newPostForm.setValue({
      title:"",
      message:""
    });
    $("#new-post").hide();
  }
  /* Track the Title size*/
  _titleSize(title){
    this.currentTitleSize = title.length;
  }
  /* Track the message size*/
  _messageSize(message){
    this.currentSize = message.length;
  }
  /* Submit post */
  _submitForm(data){
    console.log("New post data");
    console.log(data)
  }
  /* Return to the pages' landing page */
  _return(category){
    if(category === 'Archived Projects'){
      this.api._setHomeValue('home');
    }
  }
}
