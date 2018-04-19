import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ApiService } from '../../service/api.service';
import * as $ from 'jquery';

@Component({
  selector: 'fiyps-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.css']
})
export class PdfReaderComponent implements OnInit {

  @Input() params: any[] = [];
  @Input() studentGroupId: string = null;
  @Input() deliverableTypeId: string = null;
  @Input() groupName: string = null;
  @Input() fullscreen: string = null;

  @Output() onClose = new EventEmitter;
  
  userType: string = null
  visibility: boolean = false;
  pdfPage:number = 1;
  autoResize: boolean = true;
  originalSize: boolean = false;
  rotation: number[] = [0,90,180];
  currentPageLoaded:number = 0;
  totalPages: number = 0;
  isLoaded: boolean = false;
  progressTotal: number = 0;
  progressLoaded: number = 0;
  url: string = '';
  min:number = 1;

  constructor( private api_service: ApiService ) { 
    this.userType = this.api_service._getUserType();
    console.log("user type from the pdf reader: ", this.userType);
  }    

  ngOnInit() {
    var height = $(window).height();
    setInterval(() =>{
      //$(".pdfViewerContainer").css('height',height - 115);
    },1000);
  }

  /* Close the Pdf view */
  _close(){
    this.onClose.emit();
  }

  /* Navgate to the previous page */
  _prevPage() {
    this.pdfPage--;
  }

  /* Navigate to the next page */
  _nextPage() {
    this.pdfPage++;
  }

  /* Handling events fired off when the pdf is loading */
  _handleOnProgress(progressData: any){
    this.progressTotal = progressData.total;
    this.progressLoaded = progressData.loaded;
  }

  /* Recieve page number of the currently rendered page */
  _handlePageRendered(e: CustomEvent) {
    this.currentPageLoaded = e.detail.pageNumber;
    this.visibility = false;
    setTimeout(() =>{
      $(".btn-primary").addClass("show");
    },1500);    
  }

  /* Handle after load complete event */
  _handleLoadComplete(pdf: any) {
    this.totalPages = pdf.numPages;
    this.isLoaded = true;
 }

  /* Build the url for retrieving the document */
  _fetch(){
    this.visibility = false;
    this.url = this.api_service._getApiUrl()+ this.api_service.ep_readPDF+"/"+this.params+"/"+this.studentGroupId+"/"+this.deliverableTypeId+"/"+this.userType+"?token="+this.api_service._getToken();
  }

  _fetchArchivedProjectsFile(){
    this.visibility = false;
    this.url = this.api_service._getApiUrl()+ this.api_service.ep_readPDF+"/"+this.params+"/"+this.studentGroupId+"/"+this.groupName+"?token="+this.api_service._getToken();
  }

  /* Detect changes */
  ngOnChanges(){
    if(this.params != null && this.deliverableTypeId){
      this._fetch();
    }else{
      console.log("Here");
      this._fetchArchivedProjectsFile();
    }
  }


}
