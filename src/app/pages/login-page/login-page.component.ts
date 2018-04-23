import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import * as $ from 'jquery';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';

@Component({
  selector: 'fiyps-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm;
  url: string = null;
  invalid: boolean = false;
  invalidCount = null;
  redirect: Boolean = false;
  switch: string = 'login';
  smBtn: string = 'login';

  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  constructor( private http: HttpClient, private router: Router, private api: ApiService ) { 
    this.invalidCount = 0;
    this.redirect = false;
    this.invalid = false;
    this.url = this.api._getLoginEndpoint();
  }

  ngOnInit() {
    $(document).ready(function(){
      $(".login-box").show(0);
    });
    
    this.loginForm = new FormGroup({
      username: new FormControl("a.mwotil",Validators.compose([
        Validators.required,
        Validators.minLength(2),
      ])),
      password: new FormControl("mwotil",Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(22)
      ]))    
    })    
  }

  _smLogin(){
    if(this.switch == 'login'){
      $("._login-general-info").hide();
      $("._login-wrapper").fadeIn(500);
    }else{
      $("._login-general-info").show(500);
      $("._login-wrapper").hide();
    }
    this.smBtn = this.smBtn == 'login' ? 'General Information' : 'login';
    this.switch = this.switch == 'login' ? 'gen-info' : 'login';
  }

  _login(user){
    $.ajax({
      url: this.url,
      type: 'GET',
      data: user,
      error: ((error)=>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data)=>{
        console.log(data)
        if(data['token']){
          this.api._setToken(data['token']);
          this.api._setUserType(data['user'].userType); //student
          this.api._setUserImg(data['user'].pic);
          this.api._setUserName(data['user'].username);
          if(data['user'].userType == 1){
            this.api._setBreadcrumb(1,'Forum','forum');
          }else if ((data['user'].userType == 2) || (data['user'].userType == 3)){
            this.api._setBreadcrumb(1,'Home','home');
          }
          //this.redirect = true;
          //this.invalid = false;
          console.log("here");
          setTimeout(()=>{
            this.router.navigate(['/fiyps']);
          },1000);
        }else if(data['error']){
          console.log(data['error']);
          this.invalidCount = this.invalidCount + 1;
          this.invalid = true;
          if(this.invalidCount == 3){
            console.log("maximum try count reached::",this.invalidCount);
            this.redirect = true;
            setTimeout(() => {  
              this.router.navigate(['/forgotPassword']);
            }, 3000);                 
          } 
        }
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
