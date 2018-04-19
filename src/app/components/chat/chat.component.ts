import { Component, OnInit, OnChanges, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import * as $ from 'jquery';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';

@Component({
  selector: 'fiyps-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  newChatForm;
  currentSize: number = 0;
  chatMsg: string = null;
  maxLength: number = 600;
  chats: any[]; 
  username: string = null;
  userImg: string = null;
  visibility: boolean = false;
  rows: number = 6;
  totalChats: number = 0;

  @Input()  userType: string = null;
  @Input()  deliverableTypeId: string = null;
  @Input()  groupDetails: string = null;

  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  constructor(private api: ApiService) {
    this.username = this.api._getUserName();
    this.userImg = this.api._getUserImg();
  }

  ngOnInit() {

    this.newChatForm = new FormGroup({
      chatMsg: new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(this.maxLength)
      ]))
    }); 
  }
  
  /* Toggle container visibility */
  _slideToggle(container,icon,maxSize){
    $(".chat-header-icon > .icon").toggleClass("closed");
    this.api._slideToggle(container,icon,maxSize);
  }
  

  /* Track the number of characters the user has typed */
  _chatMsgSize(msg){
    this.currentSize = msg.length;
    this.chatMsg = msg;
  }
  
  /* Submit the user's chat */
  _submitChat(data){
    this.commitChat(data.chatMsg);
  }

  /* Handle submits with the enter btn */
  enterBtnSubmit(event){
    if(event.keyCode == 13){
      this.commitChat(this.chatMsg);
    }
  }


  /* commit the chat data to the db */
  commitChat(data){
    var d = {'data':data}
    $.ajax({
      type: "POST",
      data: d,
      url: this.api.getChatEndPoint()+"/"+this.deliverableTypeId+"/"+this.userType+"/"+this.groupDetails+"?token="+this.api._getToken(),
      error:((error)=>{
        console.log("Request error::",error);
      })
    }).done((data)=>{
      if(data['data']){
        /* Retrieve the latest chats */
        this.newChatForm.reset();
        this._fetch();
      }else{
        if(data['invalidData']){
          this.openPopup("Please avoid writing messages with html tags");
        }
      }
    });
  }

  /* Fetch the chats */
  _fetch(){
    this.visibility = true;
    this.api._fetchChats(this.deliverableTypeId,this.groupDetails).subscribe((data) =>{
      if(data['data']){
        if(data['data'] != 'empty'){
          this.chats = data['data'];
          console.log(this.chats)
        }else{
          this.chats = [];
        }
        this.totalChats = this.chats.length
      }else if(data['error']){
        console.log("Error:",data['error']);
      }
    });     
    setTimeout(() =>{
      this.visibility = false;
    },500);
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
    if(this.groupDetails){
      this._fetch();
    }
  }

}
