import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'fiyps-progress-scale',
  templateUrl: './progress-scale.component.html',
  styleUrls: ['./progress-scale.component.css']
})
export class ProgressScaleComponent implements OnInit {
  @Input()  progress: any[] = null;
  
   searchForm;
   isDesc: boolean;
   column: string;
   direction: number;
   pageSize: number;
   page: number;
   total: number;
   show: string = null;  

  constructor(private api: ApiService) {    

  }

  ngOnInit() {

    if(this.progress){
      console.log("Data has been sent")
      this.isDesc = false;
      this.column = 'group';
      this.page = 1;
      this.pageSize = 10;
      this.direction = -1;
      this.total = this.progress.length;
    }    
    
    this._sort(this.column);

    this.searchForm = new FormGroup({
      search: new FormControl(""),
      size: new FormControl("10")
    });

    $(document).ready(() => {
      setTimeout(()=>{
        //$(".records").show();
      },2000)
    });
  }

  /* Switch table size */
  _show(size){
    console.log(size);
    this.pageSize = size;
  }

  /* Re-arrange in descending or ascending order */
  _sort(field){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = field;
    this.direction = this.isDesc ? 1 : -1;  
  }  

  /* Toggle inner container visibility */
  _slideToggle(className,icon){
    $("._show").toggleClass("hide");
    $(".search-wrapper").toggleClass("hide");
    $("."+icon+" > .icon").toggleClass("closed");
    this.api._slideToggle(className,icon,'');
  }
  
  /* pending */
  _animatedProgressBars(){
    let count = 1;
    for(count; count <= this.total; count++){
      setTimeout(() =>{
        $("._count1").delay(200).removeClass("empty");
        $("._bar1").removeClass("emptyBars");
      },600);
      setTimeout(() =>{
        $("._count2").delay(200).removeClass("empty");
        $("._bar2").removeClass("emptyBars");
      },1300);
      setTimeout(() =>{
        $("._count3").delay(200).removeClass("empty");
        $("._bar3").removeClass("emptyBars");
      },1900);
    }
  }

}
