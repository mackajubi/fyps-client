import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Observable } from 'rxjs/Rx';
import * as $ from 'jquery';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';

@Component({
  selector: 'fiyps-archived-projects-page',
  templateUrl: './archived-projects-page.component.html',
  styleUrls: ['./archived-projects-page.component.css']
})
export class ArchivedProjectsPageComponent implements OnInit {
   archivedProjectsForm;
   archivedProjects: any[] = null;
   projectDetails: any[] = null;
   isDesc: boolean;
   column: string;
   direction: number;
   pageSize: number;
   page: number;
   total: number;
   show: string = null;

   deliverableTypeId:string = null;
   studentGroupId:string = null;
   fileId:string = null;
   groupName: string = null;
   showFile:boolean = false;

  @Input()  showDetails:string = 'home';
   homeBtn: string = null;

   @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  constructor( private api: ApiService) {
    this.homeBtn = this.api._getHomeValue()
    console.log(this.homeBtn);
  }

  ngOnInit() {
    //$(".archived-projects-wrapper").css('height',window.outerHeight - 100);
    setInterval(() =>{
      this.homeBtn = this.api._getHomeValue();
    },1000);

    this.archivedProjectsForm = new FormGroup({
      search: new FormControl(""),
      size: new FormControl("10")
    });

    this._fetch();
    
    if(this.archivedProjects){
      this.isDesc = false;
      this.column = 'group_name';
      this.page = 1;
      this.pageSize = 10;
      this.direction = -1;
      this.total = this.archivedProjects.length;      
    }

    this._sort(this.column);

  }

  /* Fetch data */
  _fetch(){
   $.ajax({
     type: "GET",
     url: this.api.getArchivedProjects(),
     error: ((err) =>{
       this.openPopup(this.api.getRequestError())
     }),
     success: ((data) =>{
       if(data['data'] && data['groups'] && data['groupNames']){
         this.archivedProjects = data['data']
         var groups = data['groups']
         var groupNames = data['groupNames']
         var count = 0;
         this.archivedProjects.filter((pro) =>{
          pro.members = groups[count]
          pro.name = data['groupNames'][count]
          count++;
         });
         this._show(10);
       }else{
         this.openPopup(data['error']);
       }
     })
   });
  }

  /* Switch table size */
  _show(size){
    console.log(size);
    this.pageSize = size;
  }
  
  /* Search archived Projects */
  _searchArchivedProjects(term){
    console.log("Search Option");
    console.log(term)
  }
  
  /* Re-arrange in descending or ascending order */
  _sort(field){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = field;
    this.direction = this.isDesc ? 1 : -1;  
  }
  
  /* View details about a particular group */
  _viewGroup(id){
   $.ajax({
     type: "GET",
     url: this.api.getArchivedProjectDetails(id),
     error: ((err) =>{
       this.openPopup(this.api.getRequestError());
     }),
     success: ((data) =>{
       if(data['data']){
        this.projectDetails = data['data'];
        this.projectDetails.filter((item) =>{
          item.groupMembers = data['groupMembers'];
          item.groupName = data['groupName'];
          item.deliverables = data['groupDeliverables']
        });
        this.api._updateBreadcrumb(2,this.projectDetails[0]['groupName'],'')
        this.showDetails = 'details';
        this.homeBtn = 'details';
        this.api._setHomeValue('details');    
       }else{
         this.openPopup(data['error']);
       }
     })
   })
  }
 
  /* Read the Group's selected documentation */
  _readDocument(groupName,groupId,id,path){
    this.api._updateBreadcrumb(3,path,'')
    this.studentGroupId = groupId;
    this.fileId = id;
    this.groupName = groupName;
    this.showFile = true;
  }

  /* Pop over */
  openPopup(msg) {
    this.popup.open(Ng2MessagePopupComponent, {
      message: msg,
    })
  } 

  /* Handle the pdf viewer on close event */
  onClose($event){
    console.log("Close the pdf view");
    this.showFile = false;
  }

}
