import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'fiyps-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registerForm;
  private invalid: boolean = false;
  private invalidCount = null;
  private redirect: Boolean = false;

  constructor( private http: HttpClient, private router: Router ) { 
    this.invalidCount = 0;
    this.redirect = false;
    this.invalid = false;

  }

  ngOnInit() {
    $(document).ready(function(){
      $(".register-box").show(0);
    });
    
    this.registerForm = new FormGroup({
      course: new FormControl("BSE",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      name_1: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      reg_1: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      phone_1: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      email_1: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      name_2: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      reg_2: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      phone_2: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      email_2: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      name_3: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      reg_3: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      phone_3: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      email_3: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      name_4: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      reg_4: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      phone_4: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
      email_4: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(5),
      ])),   
    })    
  }

  _login(user){
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
