import { Component,OnInit,OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';

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
   maxLengthTitle: number = 90; // The other 10 characters are attached from the API
   maxLength: number = 20000;
   currentTitleSize: number = 0;
   currentSize: number = 0;

  @Input() showNewForumBtn: boolean = false;

  @Output()  event = new EventEmitter<string>();
  @Output()  refreshPosts = new EventEmitter<string>();

  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;
  
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
    $.ajax({
      type: "POST",
      data:data,
      url: this.api.getForumPostsEndpoint(),
      error:((err)=>{
        this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
      }),
      success:((data)=>{
        if(data['data'] === 'success'){
          this.openPopup('Your post has been successfully shared');
          this.newPostForm.setValue({
            title:'',
            message:''
          });
          this.refreshPosts.emit();
        }else{
          this.openPopup(data['error']);
        }
      })
    })
  }
  /* Return to the pages' landing page */
  _return(category){
    if(category === 'Archived Projects'){
      this.api._setHomeValue('home');
    }
  }

  /* Pop over */
  openPopup(msg) {
    this.popup.open(Ng2MessagePopupComponent, {
      message: msg,
    })
  } 


  ngOnChanges(){

  }

}
