import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'fiyps-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  private logs: any[] = null;
  private visibility: boolean = false;

  constructor( private api: ApiService) {
    this._fetch();
  }

  ngOnInit() {

  }

  _fetch(){
    this.visibility = true;
    this.logs = this.api._fetchLogFiles();
    setTimeout(() =>{
      console.log("Wait for 2 seconds");
      this.visibility = false;
    },1500);
  }

}
