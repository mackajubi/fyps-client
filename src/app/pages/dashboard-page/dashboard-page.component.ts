import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import {Observable} from 'rxjs/Rx';
import * as $ from 'jquery';

@Component({
  selector: 'fiyps-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
     userType: string = null;
     _activeClass: String = null;
     appName: String = null;
     cocis: string = null;
     username: String = null;
     user_image: string = null;
     user_role: String = null;
     switchValue:String = null;
     sidebarInnerSectionClasses: String[] = null;
     flag: string = "_flag";
     group_name: string = null;

    /* Archived Projects Breadcrumb variables */
     showDetails: boolean = false;
  
    loadAPI: Promise<any>;
  
    constructor(private http: HttpClient, private api: ApiService, private route: Router) {
      this.group_name = "BSE18-10";
      this.userType = this.api._getUserType();
      this._activeClass = "Server"; //home
      this.appName = "FIYPS";
      this.cocis = "COCIS";
      this.username = this.api._getUserName();
      this.user_image = this.api._getUserImg();
      this.user_role = "Full Stack Developer";
      this.sidebarInnerSectionClasses = ["serverLog","databaseLog","errorLogs","systemLogs","student","add","assignGroup","home","forum","arcPros","conPp","reqTls","srs","report","profile"];
      this.api._getBreadcrumb().subscribe((item) => {
        this.switchValue = item['name'];  
        this._navSwitch(this.switchValue,item['className']);
      });
      
      this.loadAPI = new Promise((resolve) => {
        this.loadScript();
        resolve(true);
      });      
  
    }
  
    ngOnInit() {
      $("html").css('background',"url(../../../assets/img/bg.png) left top repeat rgba(238, 237, 236, 0.38)");
      
      setTimeout(() =>{
        $(".page-container").css('display','block');
      },100);
      setTimeout(() =>{
        $(".profile-controls > a").fadeIn();
      },2500);
  
    }
  
    /* Load 3rd party Scripts */
    public loadScript() {        
      var isFound = false;
      var scripts = document.getElementsByTagName("script")
      for (var i = 0; i < scripts.length; ++i) {
          if (scripts[i].getAttribute('src') != null && scripts[i].getAttribute('src').includes("loader")) {
              isFound = true;
          }
      }
  
      if (!isFound) {
          var dynamicScripts = ["assets/js/plugins/jquery/jquery.min.js","assets/js/plugins/jquery/jquery-ui.min.js","assets/js/plugins/bootstrap/bootstrap.min.js","assets/js/plugins/icheck/icheck.min.js","assets/js/plugins/mcustomscrollbar/jquery.mCustomScrollbar.min.js","assets/js/plugins/scrolltotop/scrolltopcontrol.js","assets/js/plugins/morris/raphael-min.js","assets/js/plugins/morris/morris.min.js","assets/js/plugins/rickshaw/d3.v3.js","assets/js/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js","assets/js/plugins/jvectormap/jquery-jvectormap-world-mill-en.js","assets/js/plugins/bootstrap/bootstrap-datepicker.js","assets/js/plugins/datatables/jquery.dataTables.min.js","assets/js/plugins/moment.min.js","assets/js/plugins/daterangepicker/daterangepicker.js","assets/js/plugins.js","assets/js/actions.js","assets/js/demo_dashboard.js"];
  
          for (var i = 0; i < dynamicScripts.length; i++) {
              let node = document.createElement('script');
              node.src = dynamicScripts [i];
              node.type = 'text/javascript';
              node.async = false;
              node.charset = 'utf-8';
              document.getElementsByTagName('head')[0].appendChild(node);
          }
  
      }
    }
  
    _navSwitch(activated,className){
      this.switchValue = activated;
      this.api._updateBreadcrumb(1,this.switchValue, className)
      this._sidebarSettings(className);
    }

    _handleBreadcrumbEvent(e){
      this.showDetails = e
      console.log(this.showDetails);
    }

    _activeCategory(category){
      this.api._updateBreadcrumb(1,category,'')
    }

    _navSwitchInnerOne(activated,className){
      this.switchValue = activated;
      this.api._updateBreadcrumb(2,this.switchValue, className)
      this._sidebarSettings(className);
    }

    _sidebarSettings(className){
      this.sidebarInnerSectionClasses.filter((item)=>{
        if(item == className){
          $(".as").removeClass('active');
          this._activeClass = className;
          $("."+className+"").addClass('active');
        }
      });  
    }

  /*
    _refreshToken(){
      if(this.api_service._getLoggedInStatus){
        this.http.post( this.api_service.apiUrl+"/signout", this.api_service._getSession())
        .subscribe( 
          data => {
            console.log(data['token'])
            if((data['status']) && (data['status']) == 'sign-out'){
              console.log(data['status']) 
            }else if(data['error']){
              console.log(data['error'])
            } 
            this.api_service._usetLoggedInStatus();   
            $("._alertContainer").hide(0);
            this.route.navigate(['/']);        
          }
        ); 
      }else{
        console.log("User already signed out");
        setTimeout(() =>{
          this.api_service._usetLoggedInStatus();
          this.route.navigate(['/']);
        },2000)
      }   
  
    */
  
  }
  