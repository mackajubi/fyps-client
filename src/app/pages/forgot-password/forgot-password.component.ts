import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import * as $ from 'jquery';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswardForm;
  url: string = null;
  invalid: boolean = false;
  invalidCount = null;
  mailSent: Boolean = false;
  switch: string = 'login';
  smBtn: string = 'login';
  mailto: string = null;
  mail: string = null;
  showProgressBar: boolean = false;

  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  constructor( private http: HttpClient, private router: Router, private api: ApiService ) { 
    this.invalid = false;
    this.url = this.api._getLoginEndpoint();
    this.mail = "mactechlabs1@gmail.com";
    this.mailto = "mactechlabs1@gmail.com?subject=Haven't received the new password";
  }

  ngOnInit() {
    $(document).ready(function(){
      $(".login-box").show(0);
    });
    
    this.forgotPasswardForm = new FormGroup({
      username: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])),   
    })    
  }

  _resetPassword(username){
    console.log(username)
    this.showProgressBar = true
    
    $.ajax({
      url: this.api.getResetPasswordEndpoint(),
      type: 'GET',
      data: username,
      error: ((error)=>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data)=>{
        if(data['data']){
          this.invalid = false;
          this.mailSent = true;
        }else if(data['error']){
          console.log(data['error']);
          this.invalid = true;    
          this.mailSent = false;        
        }
        this.showProgressBar = false;
      })
    });

  }

  /* Pop over */
  openPopup(msg) {
    this.popup.open(Ng2MessagePopupComponent, {
      message: msg,
    })
  } 

}

