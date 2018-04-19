import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, NgForm, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'fiyps-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  registrationForm: FormGroup;
   invalid: boolean = false;
   invalidCount = null;
   redirect: Boolean = false;
   course: string = null;
   private apiEndPoint: string = "/groupRegistration";
   private status: string = null;
   stepOne: boolean = false;
   complete: boolean = false;
   groupMembers: number = 1;
   maxGroupMembers: number = 4;

   formElements: string[] = ['names','regNos','phoneNos','emails'];

  constructor( private http: HttpClient, private router: Router, private api:ApiService) { 
    this.invalidCount = 0;
    this.redirect = false;
    this.invalid = false;

  }

  ngOnInit() {
    $(document).ready(function(){
      $(".register-box").show(0);
    });
    
    /* Form builder */
    this.registrationForm = new FormGroup({
      'names': new FormArray([ new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(45),
      ]))]),
      'regNos': new FormArray([ new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
      ]))]),
      'phoneNos': new FormArray([ new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(16),
      ]))]),
      'emails': new FormArray([ new FormControl('',Validators.compose([
        Validators.required,
        Validators.maxLength(45)
      ]))])
    });

  }
  
  /* Capture the selected course*/
  _selectedCourse(course){
    this.course = course;
    console.log("Selected course: "+ this.course);
  }

  /* Generates a new form input row ...row[name,regNo,phoneNo,email] */
  _add() {
    if( this.groupMembers < this.maxGroupMembers){
      var elements = this.formElements;
      var counter = 0;
      for (counter; counter < elements.length; counter++){
        (<FormArray>this.registrationForm.get(elements[counter])).push(new FormControl(''));
      }
      this.groupMembers++;
    }
  }  

  /* Deletes a form input row */
  _remove(i: number) {
    this.groupMembers--;
    var elements = this.formElements;
    var counter = 0;
    for (counter; counter < elements.length; counter++){
      (<FormArray>this.registrationForm.get(elements[counter])).removeAt(i);
    }
  }

  /* Commit to the database */
  _submit(registrationForm: NgForm) {
    var size = registrationForm.value[this.formElements[0]].length;
    var elementsNum = this.formElements.length;
    var data = {};
    var counter = 0;
    for(counter; counter < elementsNum; counter++){
      var innerCounter = 0;
      var element = ''
      for(innerCounter; innerCounter < size; innerCounter++){
        element  = element + registrationForm.value[this.formElements[counter]][innerCounter] + ":"
      }
      data[this.formElements[counter]] = element;
    }
    data['size'] = size;   
    data['course'] = this.course;   

    console.log(data);   
    
    $.ajax({
      type: "POST",
      url: this.api._getApiUrl()+this.apiEndPoint,
      data: data,
    }).done((data) => {
      if(data.ok){
        this.status = data.ok
        console.log(this.status);
        this.complete = true;
        //$(alertId).html("successful");
      }else{
        this.status = data.error
        console.log(this.status);
        //$(alertId).html("Server Error. Please contact our Maintenance Team: kindsolutionsltd@gmail.com ");
      } 
    });  
    
  } 

  _unSetAlert(alertName,alertId){
    setTimeout(() => {  
      $(alertId).html("Processing Request");
    }, 3000);    
  }

  /* Go to the previous step */
  _previous(){
    console.log("Move back to the previous step");
    if(this.course != null && this.stepOne){
      console.log("student has picked a course");
      this.stepOne = false;
    }
  }
  
  /* Go to the next step */
  _next(){
    console.log("Move to the next step");
    console.log("Course selected: ", this.course);
    if(this.course != null){
      this.stepOne = true;
      console.log("Both flags have been set");
    }
  }
}
