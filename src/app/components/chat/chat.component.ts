import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'fiyps-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
   newChatForm;
   currentSize: number = 0;
   chatMsg: string = null;
   maxLength: number = 200;
   chats: any[]; 
   username: string = null;
   userImg: string = null;
   visibility: boolean = false;

  @Input()  userType: string = null;

  constructor(private api: ApiService) {
    this.username = this.api._getUserName();
    this.userImg = this.api._getUserImg();
  }

  ngOnInit() {
    console.log(this.username);
    this._fetch();
    console.log(this.chats);

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
  /*
  enterBtnSubmit(event){
    if(event.keyCode == 13){
      this.commitChat(this.chatMsg);
    }
  }
*/

  /* commit the chat data to the db */
  commitChat(data){
    this.newChatForm.setValue({chatMsg:""});  //Clear the pallete.
    let id = this.chats.length;
    this.chats.push({
      'id':id,
      'ownerName':this.username,
      'img':this.userImg,
      'time':'11:45 pm',
      'msgBody':data
    })
  }

  /* Fetch the chats */
  _fetch(){
    this.visibility = true;
    this.chats = [
      {
        'id': 1,
        'ownerName':'Miriam Nanteza'.toLowerCase(),
        'img':'miriam.jpg',
        'time':'13:05 pm',
        'msgBody':"It may be more economical to create the forms dynamically, based on metadata that describes the business object model."
      },
      {
        'id': 2,
        'ownerName':'Miriam Nanteza'.toLowerCase(),
        'img':'miriam.jpg',
        'time':'13:25 pm',
        'msgBody':"It may be more economical to create the forms dynamically, based on metadata that describes the business object model."
      },
      {
        'id': 3,
        'ownerName':'Jane Nantege'.toLowerCase(),
        'img':'jane.jpg',
        'time':'13:25 pm',
        'msgBody':"It may be more economical to create the forms dynamically, based on metadata that describes the business object model."
      },
      {
        'id': 4,
        'ownerName':'Mark Kajubi'.toLowerCase(),
        'img':'mark.png',
        'time':'13:35 pm',
        'msgBody':"It may be more economical to create the forms dynamically, based on metadata that describes the business object model."
      },
      {
        'id': 5,
        'ownerName':'Hope Aliyinza'.toLowerCase(),
        'img':'hope.jpg',
        'time':'13:00 pm',
        'msgBody':"It may be more economical to create the forms dynamically, based on metadata that describes the business object model."
      },
      {
        'id': 6,
        'ownerName':'Miriam Nanteza'.toLowerCase(),
        'img':'miriam.jpg',
        'time':'14:40 pm',
        'msgBody':"It may be more economical to create the forms dynamically, based on metadata that describes the business object model."
      },
      {
        'id': 7,
        'ownerName':'Hope Aliyinza'.toLowerCase(),
        'img':'hope.jpg',
        'time':'14:45 pm',
        'msgBody':"It may be more economical to create the forms dynamically, based on metadata that describes the business object model."
      },
    ]
    /*
    this.api._fetchChats().subscribe((data) =>{
      this.chats = data['data']
    });*/      
    setTimeout(() =>{
      console.log("Wait for 2 seconds");
      this.visibility = false;
    },1000);
  }

  ngOnChanges(){
    console.log("Fetch the latest chat");
    //this._fetch();
  }

}
