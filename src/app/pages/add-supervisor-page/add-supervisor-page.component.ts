import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { ApiService } from '../../api.service';

@Component({
  selector: 'fiyps-add-supervisor-page',
  templateUrl: './add-supervisor-page.component.html',
  styleUrls: ['./add-supervisor-page.component.css']
})
export class AddSupervisorPageComponent implements OnInit {
  private addSupervisorForm;
  private searchForm;

  private supervisors: any[];
  private maxNameLength: number = 40;
  private minNameLength: number = 10;
  private maxEmailLength: number = 40;
  private minEmailLength: number = 15;
  private maxContactLength: number = 15;
  private minContactLength: number = 10;
  private maxCourseLength: number = 40;
  private minCourseLength: number = 2;

  private nameSize: number = 0;
  private emailSize: number = 0;
  private contactSize: number = 0;
  private courseSize: number = 0;

  private isDesc: boolean;
  private column: string;
  private direction: number;
  private pageSize: number;
  private page: number;
  private total: number;
  private show: string = null;  

  constructor(private api: ApiService) { }

  ngOnInit() {

    $(document).ready(function(){
      $(".form-horizontal").hide();
    });

    this.addSupervisorForm = new FormGroup({
      name: new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(this.maxNameLength),
        Validators.minLength(this.minNameLength)
      ])),
      course: new FormControl("BSE",Validators.compose([
        Validators.required,
        Validators.minLength(this.minCourseLength),
        Validators.maxLength(this.maxCourseLength)
      ])),
      email: new FormControl("",Validators.compose([
        Validators.required,
        Validators.email,
        Validators.maxLength(this.maxEmailLength),
        Validators.minLength(this.minEmailLength)
      ])),
      contact: new FormControl("",Validators.compose([
        Validators.required,
        Validators.maxLength(this.maxContactLength),
        Validators.minLength(this.minContactLength)
      ])),
    });

    this.searchForm = new FormGroup({
      search: new FormControl(""),
      size: new FormControl("25")
    });    

    this._fetch();

    if(this.supervisors){
      this.isDesc = false;
      this.column = 'name';
      this.page = 1;
      this.pageSize = 25;
      this.direction = -1;
      this.total = this.supervisors.length;     
    }

  }
  /* Toggle inner container visibility */
  _slideToggle(className,icon){
    $("._show").toggleClass("hide");
    $(".dataTables_filter").toggleClass("hide");
    $("."+icon+" > .icon").toggleClass("closed");
    this.api._slideToggle(className,icon,'');
  }  
  /* Switch table size */
  _show(size){
    console.log(size);
    this.pageSize = size;
  }  
  /* Fetch data */
  _fetch(){
    this.supervisors = [
      {
        'id':1,
        'name':'Nsabagwa Mary',
        'course':'ALL',
        'contact':'0700111987',
        'email':'mnsabagwa@cit.ac.ug'
      },
      {
        'id':2,
        'name':'Paul Bakaki',
        'course':'CS',
        'contact':'0700231987',
        'email':'pbakaki@gmail.com'
      },
      {
        'id':3,
        'name':'Grace Kobusinge',
        'course':'BIS',
        'contact':'0700111887',
        'email':'gkobusinge@cit.mak.ac.ug'
      },
      {
        'id':4,
        'name':'Agaba Joab Ezra',
        'course':'BSE',
        'contact':'0700111987',
        'email':'jagaba@cit.mak.ac.ug'
      },
      {
        'id':5,
        'name':'Grace B. Kamulegeya',
        'course':'	BSE',
        'contact':'0700111987',
        'email':'kougaus@gmail.com'
      },
      {
        'id':6,
        'name':'Engineer Bainomugisha',
        'course':'CS',
        'contact':'0700111987',
        'email':'baino@cit.mak.ac.ug'
      },
      {
        'id':7,
        'name':'Mercy Amiyo',
        'course':'BIS',
        'contact':'0700111987',
        'email':'mamiyo@cit.mak.ac.ug'
      },
      {
        'id':8,
        'name':'Emmanuel Eilu',
        'course':'BIS',
        'contact':'0700111987',
        'email':'eiluemma@yahoo.co.uk'
      },
      {
        'id':9,
        'name':'Irene Nakiyimba',
        'course':'BIS',
        'contact':'0700111987',
        'email':'inakiyimba@cit.mak.ac.ug'
      },
      {
        'id':10,
        'name':'Richard Mayanja',
        'course':'BIS',
        'contact':'0700111987',
        'email':'rmayanja@cit.mak.ac.ug'
      },
      {
        'id':11,
        'name':'Amina Zawedde',
        'course':'BIT',
        'contact':'0700111987',
        'email':'sazawedde@cit.ac.ug'
      },
      {
        'id':12,
        'name':'Emmanuel Mugejera',
        'course':'BIT',
        'contact':'0700111987',
        'email':'emugejera@cit.mak.ac.ug'
      },
      {
        'id':13,
        'name':'Paul Ssemalulu',
        'course':'BIT',
        'contact':'0700111987',
        'email':'pssemaluulu@cit.mak.ac.ug'
      },
      {
        'id':14,
        'name':'Fiona Tulinayo',
        'course':'BIT',
        'contact':'0700111987',
        'email':'ftulinayo@cit.mak.ac.ug'
      },
      {
        'id':15,
        'name':'Marriette Katarahweirwe',
        'course':'CS',
        'contact':'0700111987',
        'email':'kmarriette@cit.mak.ac.ug'
      },
      {
        'id':16,
        'name':'Halim Chongomweru',
        'course':'BIT',
        'contact':'0700111987',
        'email':'hchongomweru@cis.ac.ug'
      },
      {
        'id':17,
        'name':'Diana Nakiyinji',
        'course':'CS',
        'contact':'0700111987',
        'email':'dnakiyingi@cit.mak.ac.ug'
      },
      {
        'id':18,
        'name':'Drake K Mirembe',
        'course':'BSE',
        'contact':'0700111987',
        'email':'dmiremebe@cit.mak.ac.ug'
      },
      {
        'id':19,
        'name':'Ruth Mbabazi Mutebi',
        'course':'BSE',
        'contact':'0700111987',
        'email':'rmbabazi@cis.mak.ac.ug'
      },
      {
        'id':20,
        'name':'Nasser Kimbugwe',
        'course':'BSE',
        'contact':'0700111987',
        'email':'mkimbugwe@cis.mak.ac.ug'
      },
      {
        'id':21,
        'name':'Innocent Ndibatya',
        'course':'BIT',
        'contact':'0700111987',
        'email':'indibatya@cis.mak.ac.ug'
      },
      {
        'id':22,
        'name':'Henry Serugunda',
        'course':'BIT',
        'contact':'0700111987',
        'email':'hserugunda@cis.mak.ac.ug'
      },
      {
        'id':23,
        'name':'Dr John Ngubiri',
        'course':'CS',
        'contact':'0700111987',
        'email':'ngubiri@cis.mak.ac.ug'
      },
      {
        'id':24,
        'name':'rose Nakibuule',
        'course':'CS',
        'contact':'0700111987',
        'email':'rnakibuule@cis.mak.ac.ug'
      },
      {
        'id':25,
        'name':'Michael Kizito',
        'course':'CS',
        'contact':'0700111987',
        'email':'mkizito@cis.ac.ug'
      },
    ]
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
  /* Show form */
  _showForm(){
    $(".form-horizontal").removeClass("fadeOutUp").addClass("visible").show();
  }
  /* Hide Form */
  _hideForm(){
    $(".form-horizontal").addClass("fadeOutUp").removeClass("visible").hide();
  }
  /* Submit new supervisor data */
  _addSupervisor(data){
    let id = this.supervisors.length + 1;
    this.supervisors.push({
      'id': id,
      'name':data.name,
      'course':data.course,
      'email':data.email,
      'contact':data.contact,
    });
    this.supervisors.reverse();
    this.addSupervisorForm.setValue({
      'name':'',
      'course':'',
      'email':'',
      'contact':''
    })
  }
}
