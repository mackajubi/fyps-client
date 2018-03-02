import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fiyps-statistics-block',
  templateUrl: './statistics-block.component.html',
  styleUrls: ['./statistics-block.component.css']
})
export class StatisticsBlockComponent implements OnInit {
  @Input() private name: string = null; 
  @Input() private count: string = null; 
  @Input() private lastBlock: string = null;
  @Input() private color: string = null;

  constructor() { }

  ngOnInit() {
  }

}
