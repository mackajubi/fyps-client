import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'fiyps-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.css']
})
export class AllDocumentsComponent implements OnInit {

  @Input()  userType: string = null;
  @Input()  projects: string = null;

  @Output()  onChat = new EventEmitter;
  @Output()  onViewGroup = new EventEmitter;
  @Output()  onHistory = new EventEmitter;

   projectsForm;
   isDesc: boolean;
   column: string;
   direction: number;
   pageSize: number;
   page: number;
   total: number;
   show: string = null;
  
  constructor() { }

  ngOnInit() {
    if(this.projects){
      this.isDesc = false;
      this.column = 'group_name';
      this.page = 1;
      this.pageSize = 10;
      this.direction = -1;
      this.total = this.projects.length;      
    }   

    this.projectsForm = new FormGroup({
      search: new FormControl(""),
      size: new FormControl("10")
    });     
  }

  /* Switch table size */
  _show(size){
    console.log(size);
    this.pageSize = size;
  }

  _viewGroup(id){
    console.log("View group: " + id);
    this.onViewGroup.emit(id);
  }

  /* Chat with the group */
  _chat(id){
    console.log("Chat with group: " + id)
    this.onChat.emit(id);
  }
  
  /* Chat with the group */
  _projectChatHistory(id){
    console.log("View Chat group chat history: " + id)
    this.onHistory.emit(id);
  }

}
