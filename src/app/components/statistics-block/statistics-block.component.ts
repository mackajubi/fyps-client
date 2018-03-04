import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fiyps-statistics-block',
  templateUrl: './statistics-block.component.html',
  styleUrls: ['./statistics-block.component.css']
})
export class StatisticsBlockComponent implements OnInit {
  @Input()  name: string = null; 
  @Input()  count: string = null; 
  @Input()  lastBlock: string = null;
  @Input()  color: string = null;

  constructor() { }

  ngOnInit() {
  }

}
