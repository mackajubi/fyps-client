import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';


@Injectable()
export class ApiService {
  private apiUrl: string = "http://localhost:92";

  private ep_chats: string = '/chat'

  private Token: string = "MyToken";
  private homeBtn: string = 'home';
  private breadcrumb: any[] = null;
  private userType: string = null;//supervisor
  private userPwd: string = null;
  private userName: string = null;
  private userImg: string = null;
  private supervisors: any[] = null;
  private logs: any[] = null;
  public tempImgs: any[] = [
    {
      'userType':'student',
      'img':'mark.png',
      'name':'Mark kajubi',
    },
    {
      'userType':'supervisor',
      'img':'alex mwotil.png',
      'name':'alex mwotil',
    },
    {
      'userType':'coordinator',
      'img':'mary.jpg',
      'name':'mary nsabagwa',
    },
    {
      'userType':'sysAdmin',
      'img':'mary.jpg',
      'name':'mary nsabagwa',
    },
  ]

  constructor( private http: Http ) {
    //Remove these lines once the backend is implemented...
    this.breadcrumb = [{'level':1,'name': 'Forum'}]
    this._setUserPwd('123456');
    this._setSupervisors('data');
  }

  _setSupervisors(data){
    //this.supervisors = data
    this.supervisors = [
      {
        'id':1,
        'name':'Nsabagwa Mary',
        'groupsCount':2
      },
      {
        'id':2,
        'name':'Paul Bakaki',
        'groupsCount':4
      },
      {
        'id':3,
        'name':'Grace Kobusinge',
        'groupsCount':0
      },
      {
        'id':4,
        'name':'Agaba Joab Ezra',
        'groupsCount':0
      },
      {
        'id':5,
        'name':'Grace B. Kamulegeya',
        'groupsCount':1
      },
      {
        'id':6,
        'name':'Engineer Bainomugisha',
        'groupsCount':10
      },
      {
        'id':7,
        'name':'Mercy Amiyo',
        'groupsCount':0
      },
      {
        'id':8,
        'name':'Emmanuel Eilu',
        'groupsCount':9
      },
      {
        'id':9,
        'name':'Irene Nakiyimba',
        'groupsCount':0
      },
      {
        'id':10,
        'name':'Richard Mayanja',
        'groupsCount':3
      },
      {
        'id':11,
        'name':'Amina Zawedde',
        'groupsCount':0
      },
      {
        'id':12,
        'name':'Emmanuel Mugejera',
        'groupsCount':1
      },
      {
        'id':13,
        'name':'Paul Ssemalulu',
        'groupsCount':2
      },
      {
        'id':14,
        'name':'Fiona Tulinayo',
        'groupsCount':3
      },
      {
        'id':15,
        'name':'Marriette Katarahweirwe',
        'groupsCount':5
      },
      {
        'id':16,
        'name':'Halim Chongomweru',
        'groupsCount':0
      },
      {
        'id':17,
        'name':'Diana Nakiyinji',
        'groupsCount':1
      },
      {
        'id':18,
        'name':'Drake K Mirembe',
        'groupsCount':0
      },
      {
        'id':19,
        'name':'Ruth Mbabazi Mutebi',
        'groupsCount':7
      },
      {
        'id':20,
        'name':'Nasser Kimbugwe',
        'groupsCount':0
      },
      {
        'id':21,
        'name':'Innocent Ndibatya',
        'groupsCount':0
      },
      {
        'id':22,
        'name':'Henry Serugunda',
        'groupsCount':0
      },
      {
        'id':23,
        'name':'Dr John Ngubiri',
        'groupsCount':0
      },
      {
        'id':24,
        'name':'rose Nakibuule',
        'groupsCount':0
      },
      {
        'id':25,
        'name':'Michael Kizito',
        'groupsCount':0
      },
    ]
  }

  _onSupervisorSelect(name){
    this.supervisors.filter((item) =>{
      if(item.name == name){
        item.groupsCount = parseInt(item.groupsCount) + 1;
      }
    });
    return this.supervisors;
  }

  _onSupervisorChange(name){
    this.supervisors.filter((item) =>{
      if(item.name == name){
        item.groupsCount = parseInt(item.groupsCount) - 1;
      }
    });
    return this.supervisors;
  }

  _getSupervisors(){
    return this.supervisors;
  }

  _getApiUrl(){
    return this.apiUrl;
  }

  _getToken(){
    return this.Token;
  }

  _setUserImg(img){
    this.userImg = img;
  }

  _getUserImg(){
    return this.userImg;
  }

  _setUserName(userName){
    this.userName = userName
  }

  _getUserName(){
    return this.userName;
  }

  _setUserPwd(pwd){
    this.userPwd = pwd;
  }

  _getUserPwd(){
    return this.userPwd;
  }

  _setUserType(user){
    this.userType = user;
  }

  _getUserType(){
    return this.userType;
  }

  _setBreadcrumb(level,pathName,className){
    this.breadcrumb = [
      {
        'level': level,
        'name': pathName,
        'className':className
      }
    ]
  }

  _updateBreadcrumb(level,name, className){   
    let flag = false;
    this.breadcrumb.filter(item =>{
      if(item.level == level){
        flag = true;
        item.name = name;
      }
      if((parseInt(level) ==  1) && (this.breadcrumb.length > 1)){
        this._setHomeValue('home');
        let size = this.breadcrumb.length
        for(var i = 1; i < size; i++){
          this.breadcrumb.pop()
        }
      }
    });

    if(!flag){
      this.breadcrumb.push({'level':level,'name':name});
    }
  }

  _getBreadcrumb(): Observable<any[]>{
    if(this.breadcrumb){
      return Observable.from(this.breadcrumb);
    }
  }

  _setHomeValue(value){
    this.homeBtn = value;
  }

  _getHomeValue(){
    return this.homeBtn;
  }

  /* Toggle container visibility */
  _slideToggle(container,icon,maxSize){
    $("."+container+"").slideToggle("fast","linear");
    if(maxSize){
      $("."+maxSize+"").toggleClass("hide");
    }
  }
  
  _fetchLogFiles(){
    this.logs = [
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:05:49 -0800] "GET /twiki/bin/edit/Main/Double_bounce_sender?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12846',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:06:51 -0800] "GET /twiki/bin/rdiff/TWiki/NewUserTemplate?rev1=1.3&rev2=1.2 HTTP/1.1" 200 4523',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:10:02 -0800] "GET /mailman/listinfo/hsdivision HTTP/1.1" 200 6291',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:11:58 -0800] "GET /twiki/bin/view/TWiki/WikiSyntax HTTP/1.1" 200 7352',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:20:55 -0800] "GET /twiki/bin/view/Main/DCCAndPostFix HTTP/1.1" 200 5253',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:23:12 -0800] "GET /twiki/bin/oops/TWiki/AppendixFileSystem?template=oopsmore¶m1=1.12¶m2=1.12 HTTP/1.1" 200 11382',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:24:16 -0800] "GET /twiki/bin/view/Main/PeterThoeny HTTP/1.1" 200 4924',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:29:16 -0800] "GET /twiki/bin/edit/Main/Header_checks?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12851',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:30:29 -0800] "GET /twiki/bin/attach/Main/OfficeLocations HTTP/1.1" 401 12851',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:31:48 -0800] "GET /twiki/bin/view/TWiki/WebTopicEditTemplate HTTP/1.1" 200 3732',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:32:50 -0800] "GET /twiki/bin/view/Main/WebChanges HTTP/1.1" 200 40520',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:33:53 -0800] "GET /twiki/bin/edit/Main/Smtpd_etrn_restrictions?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12851',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:35:19 -0800] "GET /mailman/listinfo/business HTTP/1.1" 200 6379',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:36:22 -0800] "GET /twiki/bin/rdiff/Main/WebIndex?rev1=1.2&rev2=1.1 HTTP/1.1" 200 46373',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:37:27 -0800] "GET /twiki/bin/view/TWiki/DontNotify HTTP/1.1" 200 4140',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:39:24 -0800] "GET /twiki/bin/view/Main/TokyoOffice HTTP/1.1" 200 3853',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:43:54 -0800] "GET /twiki/bin/view/Main/MikeMannix HTTP/1.1" 200 3686',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:45:56 -0800] "GET /twiki/bin/attach/Main/PostfixCommands HTTP/1.1" 401 12846',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:47:12 -0800] "GET /robots.txt HTTP/1.1" 200 68',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:47:46 -0800] "GET /twiki/bin/rdiff/Know/ReadmeFirst?rev1=1.5&rev2=1.4 HTTP/1.1" 200 5724',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:49:04 -0800] "GET /twiki/bin/view/Main/TWikiGroups?rev=1.2 HTTP/1.1" 200 5162',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:50:54 -0800] "GET /twiki/bin/rdiff/Main/ConfigurationVariables HTTP/1.1" 200 59679',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:52:35 -0800] "GET /twiki/bin/edit/Main/Flush_service_name?topicparent=Main.ConfigurationVariables HTTP/1.1" 401 12851',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:53:46 -0800] "GET /twiki/bin/rdiff/TWiki/TWikiRegistration HTTP/1.1" 200 34395',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:54:55 -0800] "GET /twiki/bin/rdiff/Main/NicholasLee HTTP/1.1" 200 7235',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:56:39 -0800] "GET /twiki/bin/view/Sandbox/WebHome?rev=1.6 HTTP/1.1" 200 8545',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:16:58:54 -0800] "GET /mailman/listinfo/administration HTTP/1.1" 200 6459',
      },
      {
      'log':'lordgun.org - - [07/Mar/2004:17:01:53 -0800] "GET /razor.html HTTP/1.1" 200 2869',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:09:01 -0800] "GET /twiki/bin/search/Main/SearchResult?scope=text®ex=on&search=Joris%20*Benschop[^A-Za-z] HTTP/1.1" 200 4284',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:10:20 -0800] "GET /twiki/bin/oops/TWiki/TextFormattingRules?template=oopsmore¶m1=1.37¶m2=1.37 HTTP/1.1" 200 11400',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:13:50 -0800] "GET /twiki/bin/edit/TWiki/DefaultPlugin?t=1078688936 HTTP/1.1" 401 12846',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:16:00 -0800] "GET /twiki/bin/search/Main/?scope=topic®ex=on&search=^g HTTP/1.1" 200 3675',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:17:27 -0800] "GET /twiki/bin/search/TWiki/?scope=topic®ex=on&search=^d HTTP/1.1" 200 5773',
      },
      {
      'log':'lj1036.inktomisearch.com - - [07/Mar/2004:17:18:36 -0800] "GET /robots.txt HTTP/1.0" 200 68',
      },
      {
      'log':'lj1090.inktomisearch.com - - [07/Mar/2004:17:18:41 -0800] "GET /twiki/bin/view/Main/LondonOffice HTTP/1.0" 200 3860',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:21:44 -0800] "GET /twiki/bin/attach/TWiki/TablePlugin HTTP/1.1" 401 12846',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:22:49 -0800] "GET /twiki/bin/view/TWiki/ManagingWebs?rev=1.22 HTTP/1.1" 200 9310',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:23:54 -0800] "GET /twiki/bin/statistics/Main HTTP/1.1" 200 808',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:26:30 -0800] "GET /twiki/bin/view/TWiki/WikiCulture HTTP/1.1" 200 5935',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:27:37 -0800] "GET /twiki/bin/edit/Main/WebSearch?t=1078669682 HTTP/1.1" 401 12846',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:28:45 -0800] "GET /twiki/bin/oops/TWiki/ResetPassword?template=oopsmore¶m1=1.4¶m2=1.4 HTTP/1.1" 200 11281',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:29:59 -0800] "GET /twiki/bin/view/TWiki/ManagingWebs?skin=print HTTP/1.1" 200 8806',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:31:39 -0800] "GET /twiki/bin/edit/Main/UvscanAndPostFix?topicparent=Main.WebHome HTTP/1.1" 401 12846',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:35:35 -0800] "GET /twiki/bin/view/TWiki/KlausWriessnegger HTTP/1.1" 200 3848',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:39:39 -0800] "GET /twiki/bin/view/Main/SpamAssassin HTTP/1.1" 200 4081',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:42:15 -0800] "GET /twiki/bin/oops/TWiki/RichardDonkin?template=oopsmore¶m1=1.2¶m2=1.2 HTTP/1.1" 200 11281',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:46:17 -0800] "GET /twiki/bin/rdiff/TWiki/AlWilliams?rev1=1.3&rev2=1.2 HTTP/1.1" 200 4485',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:47:43 -0800] "GET /twiki/bin/rdiff/TWiki/AlWilliams?rev1=1.2&rev2=1.1 HTTP/1.1" 200 5234',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:50:44 -0800] "GET /twiki/bin/view/TWiki/SvenDowideit HTTP/1.1" 200 3616',
      },
      {
      'log':'64.242.88.10 - - [07/Mar/2004:17:53:45 -0800] "GET /twiki/bin/search/Main/SearchResult?scope=text®ex=on&search=Office%20*Locations[^A-Za-z] HTTP/1.1" 200 7771',
      },
      {
      'log':'[Sun Mar 7 16:02:00 2004] [notice] Apache/1.3.29 (Unix) configured -- resuming normal operations',
      },
      {
      'log':'[Sun Mar 7 16:02:00 2004] [info] Server built: Feb 27 2004 13:56:37',
      },
      {
      'log':'[Sun Mar 7 16:02:00 2004] [notice] Accept mutex: sysvsem (Default: sysvsem)',
      },
      {
      'log':'[Sun Mar 7 16:05:49 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed',
      },
      {
      'log':'[Sun Mar 7 16:45:56 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed',
      },
      {
      'log':'[Sun Mar 7 17:13:50 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed',
      },
      {
      'log':'[Sun Mar 7 17:21:44 2004] [info] [client 64.242.88.10] (104)Connection reset by peer: client stopped connection before send body completed',
      },
      {
      'log':'[Sun Mar 7 17:23:53 2004] statistics: Use of uninitialized value in concatenation (.) or string at /home/httpd/twiki/lib/TWiki.pm line 528.',
      },
      {
      'log':'[Sun Mar 7 17:23:53 2004] statistics: Can\'t create file /home/httpd/twiki/data/Main/WebStatistics.txt - Permission denied',
      },
    ]
    return this.logs;
  }

  _fetchChats(): Observable <any[]>{
    return this.http.post(this.apiUrl+this.ep_chats,'').map(res => res.json())
  }

}
