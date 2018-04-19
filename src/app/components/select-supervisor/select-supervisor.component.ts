import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Component({
  selector: 'fiyps-select-supervisor',
  templateUrl: './select-supervisor.component.html',
  styleUrls: ['./select-supervisor.component.css']
})
export class SelectSupervisorComponent implements OnInit {
   selectForm;
   supervisors: any[] = null;
   groupCountData: any[] = null;
   size: number = 1;
   currentSelection: string = null;

  @Output()  onSelect = new EventEmitter;
  @Output()  onCount = new EventEmitter;

  constructor(private api: ApiService) {
    // Fetch the data from the service.
    this.supervisors = this.api._getSupervisors();
   }

  ngOnInit() {
    this.selectForm = new FormGroup({
      supervisor: new FormControl("Assign a supervisor"),
    });
  }

  /* On selecting a supervisor */
  _selectSupervisor(data){
    if(this.currentSelection == null && data != "default"){
      console.log("first time");
      this._updateSupervisor(data);
    }else if(data != "default"){
      console.log(this.currentSelection);
      this.supervisors.filter((item) =>{
        if(item.name == this.currentSelection){
          this.currentSelection = null;
          this.onCount.emit(parseInt(item.groupsCount) - 1);
          this.supervisors = this.api._onSupervisorChange(data);
          this._updateSupervisor(data);
        }
      });      
    }
  }

  _updateSupervisor(data){
    this.supervisors.filter((item) =>{
      if(item.name == data){
        this.currentSelection = data;
        this.onCount.emit(parseInt(item.groupsCount) + 1);
        this.supervisors = this.api._onSupervisorSelect(data);
        this.onSelect.emit(item);
      }
    });
  }
}
