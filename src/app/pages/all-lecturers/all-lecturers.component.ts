import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';


@Component({
  selector: 'fiyps-all-lecturers',
  templateUrl: './all-lecturers.component.html',
  styleUrls: ['./all-lecturers.component.css']
})
export class AllLecturersComponent implements OnInit {
  private userType: string = null;
  private supervisors: any[] = null;
  private confirmDeleteForm;
  private identifier: string = null;

  private groupsForm;
  private isDesc: boolean;
  private column: string;
  private direction: number;
  private pageSize: number;
  private page: number;
  private total: number;
  private show: string = null;
  private supervisorData: any[];
  constructor(private api: ApiService) {
    this.userType = this.api._getUserType();
   }

  ngOnInit() {

    this._fetch();

    if(this.supervisors){
      this.isDesc = false;
      this.column = 'group_name';
      this.page = 1;
      this.pageSize = 10;
      this.direction = -1;
      this.total = this.supervisors.length;      
    }   

    this.groupsForm = new FormGroup({
      search: new FormControl(""),
      size: new FormControl("10")
    });    
    
    this.confirmDeleteForm = new FormGroup({
      yes: new FormControl("yes",Validators.compose([
        Validators.required
      ])),
      no: new FormControl("no",Validators.compose([
        Validators.required
      ])),
    });    

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

  _show(size){
    console.log(size);
    this.pageSize = size;
  }
  
  edit(id){
    this.identifier = id;
    console.log("Edit this group: " + this.identifier)
  }
  
  showPopup(id){
    this.identifier = id;
    console.log("Show the popup for confirmation: " + this.identifier);
  }

  /* Remove the selected file */
  _yes(){
    console.log("Delete the selected id"+ this.identifier);
    //empty the deleteSelectedFile variable
  }

  _no(){
    this.identifier = null;
    console.log("don't Delete the selected id" + this.identifier);
    //empty the deleteSelectedFile variable
  }  

}

