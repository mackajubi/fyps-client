import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ApiService } from '../../service/api.service';
import * as $ from 'jquery';
import { Ng2PopupComponent, Ng2MessagePopupComponent } from 'ng2-popup';


@Component({
  selector: 'fyps-supervision-groups',
  templateUrl: './supervision-groups.component.html',
  styleUrls: ['./supervision-groups.component.css']
})
export class SupervisionGroupsComponent implements OnInit {
  groups: any[] = null;
  total: number = 0

  @Output() selectedGroup = new EventEmitter

  @ViewChild(Ng2PopupComponent) popup: Ng2PopupComponent;

  constructor( private api: ApiService ) { 

  }

  ngOnInit() {
    this._fetch()
  }

  /* Fetch the groups partaining the supervision id */
  _fetch(){
    $.ajax({
      type: "GET",
      url: this.api.getFetchGroupsEndPoint(),
      error:((e) =>{
        this.openPopup('Request failed.Please contact our IT Support team at mactechlabs1@gmail.com');
      }),
      success:((data) =>{
        console.log("the data sent over:", data)
        if( data['data']){
          if(data['data'] != 'empty'){
            this.groups =  data['data']
          }else{
            this.groups = []
          }
        }else{
          this.openPopup('Server Error.Please contact our IT Support team at mactechlabs1@gmail.com');
          this.groups = []
        }
        this.total = this.groups.length
      })
    })
  }

  /* handle group details of the selected group */
  _reviewGroup(classname,groupname){
    this.selectedGroup.emit({groupname})
    $(".groupname").removeClass("hightlight");
    $("._"+classname+"").addClass("hightlight");
  }

  /* Pop over */
  openPopup(msg) {
    this.popup.open(Ng2MessagePopupComponent, {
      message: msg,
    })
  } 

}
