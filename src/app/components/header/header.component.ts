import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
//import { ApiServiceService } from '../../api-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'fiyps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   today = Date.now();
   time = this.today;

  constructor( private http: HttpClient, private route: Router ) { }

  ngOnInit() {
    //Clock
    setInterval(() =>{
      this.time = Date.now();
    },1000);
  }

  _sigout(){
    this.route.navigate(['/']); 
    //this.api_service._checkSession();
    /*
    if(this.api_service._getLoggedInStatus){
      this.http.post( this.api_service.apiUrl+"/signout", this.api_service._getSession())
      .subscribe( 
        data => {
          console.log(data['token'])
          if((data['status']) && (data['status']) == 'sign-out'){
            console.log(data['status']) 
          }else if(data['error']){
            console.log(data['error'])
          } 
          this.api_service._usetLoggedInStatus();   
          this.route.navigate(['/']);        
        }
      ); 
    }else{
      console.log("User already signed out");
      setTimeout(() =>{
        this.api_service._usetLoggedInStatus();
        this.route.navigate(['/']);
      },2000)
    }
    */
  }

}
