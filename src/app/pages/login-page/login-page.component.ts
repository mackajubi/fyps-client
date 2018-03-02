import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import * as $ from 'jquery';

@Component({
  selector: 'fiyps-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm;
  private invalid: boolean = false;
  private invalidCount = null;
  private redirect: Boolean = false;
  private switch: string = 'login';
  private smBtn: string = 'login';

  constructor( private http: HttpClient, private router: Router, private api: ApiService ) { 
    this.invalidCount = 0;
    this.redirect = false;
    this.invalid = false;

  }

  ngOnInit() {
    $(document).ready(function(){
      $(".login-box").show(0);
    });
    
    this.loginForm = new FormGroup({
      user_email: new FormControl("student",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),
      password: new FormControl("123456",Validators.compose([
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
    
    this.api._setUserType(user['user_email']); //student
    this.api.tempImgs.filter((item) =>{
      if(item.userType == user['user_email']){
        this.api._setUserImg(item.img);
        this.api._setUserName('mark kajubi');
        this.api._setBreadcrumb(1,'Forum','forum');
      }else if(item.userType == user['user_email']){
        this.api._setUserImg(item.img)
        this.api._setUserName('alex mwotil');
        this.api._setBreadcrumb(1,'Home','home');
      }else if(item.userType == user['user_email']){
        this.api._setUserImg(item.img)
        this.api._setUserName('mary');
        this.api._setBreadcrumb(1,'Home','home');
      }
      this.router.navigate(['/fiyps']);
    })
    
    //console.log("Before sending the data" + user)
    var data = 
    [
      user['user_email'],
      user['password']
    ]   
    /*   
    this.http.post( this.api_service.apiUrl+"/login", data)
      .subscribe( 
        data => {
          if(data['token']){
            //console.log(data['token']);
            let user = data['user']
            //console.log(user['pic'])
            this.api_service._setUserImage(user['pic']);
            this.api_service._setUsername(user['username']);
            this.api_service._setSession(user['email']);
            this.api_service._setSecurityLevel(user['securityLevel']);
            this.api_service._setLoggedInStatus();
            this.api_service._setTokenStatus();
            let token = "?token="+data['token'];
            this.api_service._setToken(token);

            this.router.navigate(['/prems']);   
          }else if(data['error']){
            console.log(data['error'])
            this.invalidCount = this.invalidCount + 1;
            this.invalid = true;
            if(this.invalidCount == 3){
              this.redirect = true;
              setTimeout(() => {  
                this.router.navigate(['/forgotPassword']);
              }, 5000);                 
            }else{
              //route to the forgot password page
              console.log("maximum tries have hit 3: "+  this.invalidCount)
            }
          }           
        }
      );  */
  }

}
