import { Component, OnInit, Input ,Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'fiyps-all-documents',
  templateUrl: './all-documents.component.html',
  styleUrls: ['./all-documents.component.css']
})
export class AllDocumentsComponent implements OnInit {

  @Input() private userType: string = null;
  @Input() private projects: string = null;

  @Output() private onChat = new EventEmitter;
  @Output() private onViewGroup = new EventEmitter;
  @Output() private onHistory = new EventEmitter;

  private projectsForm;
  private isDesc: boolean;
  private column: string;
  private direction: number;
  private pageSize: number;
  private page: number;
  private total: number;
  private show: string = null;
  
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
