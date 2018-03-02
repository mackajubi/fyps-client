import { Component, OnInit, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'fiyps-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit {
  @Input() private visibility: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
