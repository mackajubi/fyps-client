import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators}  from '@angular/forms';
import { FileHolder } from "angular2-image-upload";
import * as $ from 'jquery';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';
import { Router } from '@angular/router';

@Component({
  selector: 'fiyps-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  url: string = null;
  token: string = null;
  imgMaxUpload: number = 1;
  userType: string = null;
  userImg: string = null;
  studentForm :FormGroup;
  supervisorForm :FormGroup;
  groupForm :FormGroup;
  passwordForm:FormGroup;
  course: string = null;
  groupMembers: any[] = [];
  groupDetailsValid: boolean = false;
  redirect: boolean = false;

  titleSize: number = 0;
  descSize: number = 0;
  nameSize: number = 0;
  usernameSize: number = 0;
  emailSize: number = 0;
  contactSize: number = 0;
  courseSize: number = 0;
  departmentSize: number = 0;
  blogUrlLength: number = 0;

  maxTitleLength: number = 100;
  maxDescLength: number = 500;
  maxPwdLength: number = 15;
  maxNameLength: number = 45;
  maxUsernameLength: number = 45;
  maxEmailLength: number = 45;
  maxContactLength: number = 15;
  maxCourseLength: number = 45;
  maxDeparmentLength: number = 45;
  maxBlogUrlLength: number = 100;
  
  minTitleLength: number = 10;
  minDescLength: number = 500;
  minPwdLength: number = 2;
  minNameLength: number = 10;
  minUsernameLength: number = 2;
  minEmailLength: number = 15;
  minContactLength: number = 10;
  minCourseLength: number = 2;
  minDeparmentLength: number = 4;
  minBlogUrlLength: number = 10;

  oldPassword: string = null;
  formFields: any[] = null;
  changePwdText: string = "change password ?";
  changePwd: boolean = false;
  pwdValid: boolean = false;

  @Output() onUserImageChange = new EventEmitter;
  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  constructor( private api: ApiService, private formBuilder: FormBuilder, private router: Router ) { 
    this.url = this.api.getUploadProfileImageEndpoint();
    this.token = this.api._getToken();
    this.userType = this.api._getUserType();
    this.oldPassword = this.api._getUserPwd();
    this.userImg = this.api._getUserImg();
    this.formFields = ['names','regNos','contacts','emails'];
  }

  ngOnInit() {
    $(document).ready(function(){
      $(".new-pwd").hide();
      $(".confirm-pwd").hide();
    });

    this._fetchProfileDetails();

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
      blogUrl: new FormControl("Having discovered, with the Survey we conducted that the current system does not enable Supervisors to track and monitor the progress level of their individual Student groups per deliverable being handled till project completion:- We saw the need for a platform to enable Supervisors, Students as well as Coordinators to smoothly overcome all these difficulties among others. By providing functionality that enables",Validators.compose([
        Validators.minLength(this.minBlogUrlLength),
        Validators.maxLength(this.maxBlogUrlLength)
      ])),
    });

    /* Supervisor's form */
    this.supervisorForm = new FormGroup({
      name: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minNameLength),
        Validators.maxLength(this.maxNameLength)
      ])),
      username: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minUsernameLength),
        Validators.maxLength(this.maxUsernameLength)
      ])),
      course: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minCourseLength),
        Validators.maxLength(this.maxCourseLength)
      ])),
      email: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minEmailLength),
        Validators.maxLength(this.maxEmailLength)
      ])),
      contact: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minContactLength),
        Validators.maxLength(this.maxContactLength)
      ])),
      department: new FormControl("",Validators.compose([
        Validators.required,
        Validators.minLength(this.minDeparmentLength),
        Validators.maxLength(this.maxDeparmentLength)
      ])),
    });

    this.passwordForm = new FormGroup({
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
    })

  }

  /* Track the Title size*/
  _titleSize(title){
    this.titleSize = title.length;
  }
  
  /* Track name size*/
  _nameSize(name){
    this.nameSize = name.length;
  }
    
  /* Track name size*/
  _username(name){
    this.usernameSize = name.length;
  }
  
  /* Track course size*/
  _courseSize(course){
    this.courseSize = course.length;
  }
  
  /* Track course size*/
  _departmentSize(dept){
    this.departmentSize = dept.length;
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
  
  /* Track the Description size*/
  _blogUrlSize(url){
    this.blogUrlLength = url.length;
  }
  
  /* Show change pwd container */
  _showChangePwdContainer(){
    this.changePwd = !this.changePwd;
    this.changePwdText = this.changePwd == true ? 'Have changed my mine' : 'change password ?';
    if(!this.changePwd){
      this.pwdValid = false;
    }
  }

  _validatePwd(){
    $.ajax({
      type: "GET",
      url: this.api.getValidatePassword(this.oldPassword),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if(data['data']){
          this.openPopup(data['data']);
          this.pwdValid = true;
          this.passwordForm.patchValue({
            'oldPassword':this.oldPassword
          })
        }else if (data['error']){
          this.openPopup(data['error']);
          this.pwdValid = false;         
        }
      })
    })
  }

    /* validate old password */
  _oldPassword(oldPwd){
    this.oldPassword = oldPwd;
  }

  /* Update the password */
  _updatePwd(data){
    if( data['newPassword'] === data['confirmPassword'] && this.passwordForm.valid){
      $(".pwd").addClass('correct-pwd');
      $.get({
        type: "POST",
        url: this.api.getValidatePassword(data['newPassword']),
        error: ((err) =>{
          this.openPopup(this.api.getRequestError());
        }),
        success: ((data) =>{
          console.log("Here is the data sent back",data);
          if(data['data']){
            this.openPopup("Update was successfull.Please login a fresh")
          }else{
            this.openPopup(data['error']);
          }
        }), 
      });
    }else if ( data['newPassword'] != data['confirmPassword'] && this.passwordForm.invalid ){
      $(".pwd").removeClass('correct-pwd');
      this.openPopup("Passwords don't match")
    }
  }

  /* Update the profile */
  _submitForm(data){
    console.log("Supervisor's data");
    console.log(data);    
    /*
    $.ajax({
      type: "POST",
      data: data,
      url: this.api.getProfileEndpoint(),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if (data['data']){
          this.openPopup("Update was successfull.You will be signed out in 2 seconds");
          setTimeout(() =>{
            // Sign out the user
            this.route.navigate['/'];
          },2000);
        }else{
          this.openPopup(data['error']);
        }
      }) 
    });
    */
  }  
  /* Update Supervisor's details */
  _updateSupervisor(data){
    this.redirect = true;
    this._commitUpdates(data);  
  }

  /* Image upload complete */
  imageFinishedUploading(file: FileHolder) {
    console.log(JSON.stringify(file.serverResponse));
  }
  
  /* Image removed */
  onRemoved(file: FileHolder) {
    console.log("image has been removed");
  }

  /* can be used to activate the update btn after the image has been update */
  onUploadStateChanged(state: boolean) {
    console.log(JSON.stringify(state));
  }

  /* Profile image upload complete */
  onUploadFinished(event){
    $.ajax({
      type: 'GET',
      url: this.api.getProfileImageEndpoint(),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if( data['img']){
          this.userImg = data['img'];
          this.onUserImageChange.emit(this.userImg);
        }else{
          this.openPopup(data['error']);
        }
      }),
    });
  }

  /* Populate the data forms */
  _fetchProfileDetails(){
    $.ajax({
      type: "GET",
      url: this.api.getProfileEndpoint(),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if (data['data'] || (data['groupMembers'] && data['groupDetails'])){
          if(this.userType == '2' || this.userType == '3'){
            this.supervisorForm.patchValue({
              'name':data['data'][0]['name'],
              'username':data['data'][0]['username'],
              'email':data['data'][0]['email'],
              'contact':data['data'][0]['contact'],
              'course':data['data'][0]['course'],
              'department':data['data'][0]['department'],
            })
          }else if (this.userType == '1' && (data['groupMembers'] && data['groupDetails'])){
            this.groupMembers = data['groupMembers'];
            this.course = data['groupDetails'][0]['course'];
            this.studentForm.patchValue({
              'projectTitle':data['groupDetails'][0]['projectTitle'],
              'projectDescription': data['groupDetails'][0]['projectDescription'],
              'blogUrl': data['groupDetails'][0]['blogUrl']
            });
            this.groupDetailsValid = true;
          }
        }else{
          this.openPopup(data['error']);
        }
      }) 
    });
  }

  /* Save group changes */
  _submitGroupUpdates(event,id){
    event.preventDefault();
    console.log("The id::",id);
    var name = $('#_name'+id+"").val();
    var regNo = $('#_regNo'+id+"").val();
    var phoneNo = $('#_phoneNo'+id+"").val();
    var email = $('#_email'+id+"").val();

    if ((name == '') || (regNo == '') || (phoneNo == '') || (email == '')){
      this.openPopup("Please fill in all the fields");
    }else{
      var data = {'id':id,'name':name,'regNo':regNo,'phoneNo':phoneNo,'email':email};
      console.log("here is the complete object::",data)
      this.redirect = false;
      this._commitUpdates(data);     
    }


    console.log("name::",name);
    console.log("regNo::",regNo);
    console.log("phoneNo::",phoneNo);
    console.log("email::",email);

  }

  /* commit the changes to the backend */
  _commitUpdates(data){
    $.ajax({
      type: "POST",
      data: data,
      url: this.api.getProfileEndpoint(),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if (data['data']){
          if(this.redirect){
            this.openPopup("Update was successfull.You will be signed out in 2 seconds");
          }else{
            this.openPopup("Update was successfull.");
          }
          setTimeout(() =>{
            // Sign out the user
            if(this.redirect){
              this.router.navigate(['/']);
            }
          },2000);
        }else{
          this.openPopup(data['error']);
        }
      }) 
    });     
  }

  /* Submit student group general data */
  _submitGeneralStudentData(data){
    console.log("Upload this data::",data);
    $.ajax({
      type: "POST",
      data: data,
      url: this.api.getUpdateStudentGroupDetailsEndpoint(),
      error: ((err) =>{
        this.openPopup(this.api.getRequestError());
      }),
      success: ((data) =>{
        if (data['data']){
          if(this.redirect){
            this.openPopup("Update was successfull.You will be signed out in 2 seconds");
          }else{
            this.openPopup("Update was successfull.");
          }
        }else{
          this.openPopup(data['error']);
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
