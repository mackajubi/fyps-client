import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators}  from '@angular/forms';
import { FileHolder } from "angular2-image-upload";
import * as $ from 'jquery';

@Component({
  selector: 'fiyps-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  private url: string = null;
  private token: string = null;
  private imgMaxUpload: number = 1;
  private userType: string = null;
  private userImg: string = null;
  private studentForm :FormGroup;
  private supervisorForm :FormGroup;
  private groupForm :FormGroup;
  private titleSize: number = 0;
  private descSize: number = 0;
  private nameSize: number = 0;
  private emailSize: number = 0;
  private contactSize: number = 0;
  private courseSize: number = 0;

  private maxTitleLength: number = 100;
  private maxDescLength: number = 500;
  private maxPwdLength: number = 15;
  private maxNameLength: number = 40;
  private maxEmailLength: number = 40;
  private maxContactLength: number = 15;
  private maxCourseLength: number = 40;

  private minTitleLength: number = 10;
  private minDescLength: number = 500;
  private minPwdLength: number = 6;
  private minNameLength: number = 10;
  private minEmailLength: number = 15;
  private minContactLength: number = 10;
  private minCourseLength: number = 2;

  private oldPassword: string = null;
  private formFields: any[] = null;

  constructor( private api: ApiService, private formBuilder: FormBuilder ) { 
    this.url = this.api._getApiUrl();
    this.token = this.api._getToken();
    this.userType = 'supervisor';//this.api._getUserType();
    this.oldPassword = this.api._getUserPwd();
    this.userImg = this.api._getUserImg();
    this.formFields = ['names','regNos','contacts','emails'];
  }

  ngOnInit() {
    $(document).ready(function(){
      $(".new-pwd").hide();
      $(".confirm-pwd").hide();
    });
    /* Student's form */
    this.studentForm = new FormGroup({
      projectTitle: new FormControl("Final Year Projects System",Validators.compose([
        Validators.required,
        Validators.minLength(this.minTitleLength),
        Validators.maxLength(this.maxTitleLength)
      ])),
      projectDescription: new FormControl("Having discovered, with the Survey we conducted that the current system does not enable Supervisors to track and monitor the progress level of their individual Student groups per deliverable being handled till project completion:- We saw the need for a platform to enable Supervisors, Students as well as Coordinators to smoothly overcome all these difficulties among others. By providing functionality that enables",Validators.compose([
        Validators.required,
        Validators.minLength(this.minDescLength),
        Validators.maxLength(this.maxDescLength)
      ])),
      oldPassword: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minPwdLength),
        Validators.maxLength(this.maxPwdLength)
      ])),
      newPassword: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minPwdLength),
        Validators.maxLength(this.maxPwdLength)
      ])),
      confirmPassword: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minPwdLength),
        Validators.maxLength(this.maxPwdLength)
      ])),
    });

    /* Supervisor's form */
    this.supervisorForm = new FormGroup({
      name: new FormControl("Alex Mwotil",Validators.compose([
        Validators.required,
        Validators.minLength(this.minNameLength),
        Validators.maxLength(this.maxNameLength)
      ])),
      course: new FormControl("BSE",Validators.compose([
        Validators.required,
        Validators.minLength(this.minCourseLength),
        Validators.maxLength(this.maxCourseLength)
      ])),
      email: new FormControl("amwotil@cis.mak.ac.ug",Validators.compose([
        Validators.required,
        Validators.minLength(this.minEmailLength),
        Validators.maxLength(this.maxEmailLength)
      ])),
      contact: new FormControl("0772084725",Validators.compose([
        Validators.required,
        Validators.minLength(this.minContactLength),
        Validators.maxLength(this.maxContactLength)
      ])),
      oldPassword: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minPwdLength),
        Validators.maxLength(this.maxPwdLength)
      ])),
      newPassword: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minPwdLength),
        Validators.maxLength(this.maxPwdLength)
      ])),
      confirmPassword: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minPwdLength),
        Validators.maxLength(this.maxPwdLength)
      ])),
    });

    this.groupForm = new FormGroup({
      'names': new FormArray([ new FormControl('',Validators.compose([ Validators.required,Validators.minLength(3),Validators.maxLength(50)]))]),
      'regNos': new FormArray([new FormControl('',Validators.compose([ Validators.required,Validators.minLength(8),Validators.maxLength(14)]))]),
      'contacts': new FormArray([new FormControl('',Validators.compose([ Validators.required,Validators.minLength(10),Validators.maxLength(15)]))]),
      'emails': new FormArray([new FormControl('',Validators.compose([ Validators.required,Validators.email,Validators.minLength(10),Validators.maxLength(40)]))]),
    });

    //provide 4 rows for a start
    var counter = 0;
    for (counter; counter < 3; counter++){
      this._addRow();
    }    

  }
  /* Add form fields */
  _addRow() {
    var elements = this.formFields;
    var counter = 0;
    for (counter; counter < elements.length; counter++){
      (<FormArray>this.groupForm.get(elements[counter])).push(new FormControl(''));
    }
  }  
  /* Track the Title size*/
  _titleSize(title){
    this.titleSize = title.length;
  }
  /* Track name size*/
  _nameSize(name){
    this.nameSize = name.length;
  }
  /* Track course size*/
  _courseSize(course){
    this.courseSize = course.length;
  }
  /* Track email size*/
  _emailSize(email){
    this.emailSize = email.length;
  }
  /* Track contact size*/
  _contactSize(contact){
    this.contactSize = contact.length;
  }
  /* Track the Description size*/
  _descSize(description){
    this.descSize = description.length;
  }
  /* validate old password */
  _oldPassword(oldPwd){
    if (oldPwd === this.oldPassword){
      $(".old-pwd").removeClass('incorrect-pwd').addClass('correct-pwd');
      $(".new-pwd").show().addClass('visible');
      $(".confirm-pwd").show().addClass('visible');
    }else{
      $(".new-pwd").hide();
      $(".confirm-pwd").removeClass('visible').hide();
      $(".old-pwd").removeClass('correct-pwd').addClass('incorrect-pwd');
    }
  }
  /* validate new password */
  _confirmPwd(confirmPwd){
    console.log(confirmPwd)
  }
  /* Update the profile */
  _submitForm(data){
    console.log("Commit data");
    console.log(data)
  }  
  /* Update Supervisor's details */
  _updateSupervisor(data){
    console.log("Supervisor's data");
    console.log(data);
  }

  imageFinishedUploading(file: FileHolder) {
    console.log(JSON.stringify(file.serverResponse));
  }
  
  onRemoved(file: FileHolder) {
    console.log("image has been removed");
    console.log(file);
    // do some stuff with the removed file.
  }

  /* can be used to activate the update btn after the image has been update */
  onUploadStateChanged(state: boolean) {
    console.log(JSON.stringify(state));
  }

}
