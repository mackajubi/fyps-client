import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';
import {Observable} from 'rxjs/Rx';
import * as $ from 'jquery';

@Component({
  selector: 'fiyps-archived-projects-page',
  templateUrl: './archived-projects-page.component.html',
  styleUrls: ['./archived-projects-page.component.css']
})
export class ArchivedProjectsPageComponent implements OnInit {
  private archivedProjectsForm;
  private archivedProjects: any[] = null;
  private projectDetails: any[] = null;
  private isDesc: boolean;
  private column: string;
  private direction: number;
  private pageSize: number;
  private page: number;
  private total: number;
  private show: string = null;

  @Input() private showDetails:string = 'home';
  private homeBtn: string = null;

  constructor( private api: ApiService) {
    this.homeBtn = this.api._getHomeValue()
    console.log(this.homeBtn);
  }

  ngOnInit() {
    //$(".archived-projects-wrapper").css('height',window.outerHeight - 100);
    setInterval(() =>{
      this.homeBtn = this.api._getHomeValue();
    },1000);

    this.archivedProjectsForm = new FormGroup({
      search: new FormControl(""),
      size: new FormControl("10")
    });

    this._fetch();
    
    if(this.archivedProjects){
      this.isDesc = false;
      this.column = 'group_name';
      this.page = 1;
      this.pageSize = 10;
      this.direction = -1;
      this.total = this.archivedProjects.length;      
    }

    this._sort(this.column);
  }

  /* Fetch data */
  _fetch(){
    this.archivedProjects = [
      {
        'id':1,
        'group_name':'BSE13-2',
        'title':'MUK guide',
        'supervisor':'David Bamutura',
        'supervisor_img':'user6.jpg',
        'department':'Department of Networks',
        'members':[
          {
            'id':1,
            'name':'Muhatsi Shaffic'.toLowerCase(),
            'img':'user.jpg'
          },
          {
            'id':2,
            'name':'Remo Samuel'.toLowerCase(),
            'img':'user4.jpg'
          },
          {
            'id':3,
            'name':'Paul Odur Gerald'.toLowerCase(),
            'img':'user5.jpg'
          },
          {
            'id':4,
            'name':'Okurut Jonathan'.toLowerCase(),
            'img':'user7.jpg'
          },
        ],
        'files':[
          {
            'id':1,
            'name':'concept paper',
            'date_published':'5/06/13 11:45',
            'marks':'80%',
            'file_path':'concept paper document path'
          },
          {
            'id':2,
            'name':'requirements tools',
            'date_published':'5/10/12 11:45',
            'marks':'80%',
            'file_path':'requirements tools document path'
          },
          {
            'id':3,
            'name':'SRS',
            'date_published':'5/12/13 11:45',
            'marks':'90%',
            'file_path':'srs document path'
          },
          {
            'id':4,
            'name':'SDD',
            'date_published':'5/05/13 11:45',
            'marks':'75%',
            'file_path':'sdd document path'
          },
          {
            'id':5,
            'name':'Report',
            'date_published':'5/06/13 11:45',
            'marks':'80%',
            'file_path':'report document path'
          },
        ]
      },
      {
        'id':2,
        'group_name':'BSE13-3',
        'title':'customer ordering and billing system',
        'supervisor':'Nsabagwa Mary',
        'members':[
          {
            'id':1,
            'name':'Othieno John'.toLowerCase(),
          },
          {
            'id':2,
            'name':'Bonyo Joseph'.toLowerCase(),
          },
          {
            'id':3,
            'name':'Sitati Ben'.toLowerCase(),
          },
          {
            'id':4,
            'name':'Kiberu Frank'.toLowerCase(),
          },
        ]
      },
      {
        'id':3,
        'group_name':'BSE13-4',
        'title':'Electronic Tollbooth monitoring system: A case study of KCCA',
        'supervisor':'Mary Nsabagwa',
        'members':[
          {
            'id':1,
            'name':'Mugabira Anthony'.toLowerCase(),
          },
          {
            'id':2,
            'name':'Kisakye Daniel'.toLowerCase(),
          },
          {
            'id':3,
            'name':'Kizza Peter'.toLowerCase(),
          },
          {
            'id':4,
            'name':'Nsubuga Ronald'.toLowerCase(),
          },
        ]
      },
      {
        'id':4,
        'group_name':'BSE13-6',
        'title':'A centralized solid waste managements system: a case study of NOREMA Services Limited',
        'supervisor':'Mary Nsabagwa',
        'members':[
          {
            'id':1,
            'name':'Iga Kogongo edward',
          },
          {
            'id':2,
            'name':'mugeere paul',
          },
          {
            'id':3,
            'name':'opio solomon',
          },
          {
            'id':4,
            'name':'lubwama enock',
          },
        ]
      },
      {
        'id':5,
        'group_name':'BSE13-7',
        'title':'Awesome SMS Gateway System',
        'supervisor':'Grace B. Kamulegeya',
        'members':[
          {
            'id':1,
            'name':'Katusiime Lisa',
          },
          {
            'id':2,
            'name':'Mugume Davies Arthur',
          },
          {
            'id':3,
            'name':'Emmanuel Okiria',
          },
          {
            'id':4,
            'name':'	Omiat Isaac',
          },
        ]
      },
      {
        'id':6,
        'group_name':'BSE13-8',
        'title':'An embedded system for a smart poultry farm',
        'supervisor':'Joab Ezra Agaba',
        'members':[
          {
            'id':1,
            'name':'Bbosa Ronald',
          },
          {
            'id':2,
            'name':'Semujju Stuart Dereck',
          },
          {
            'id':3,
            'name':'Matano Ali',
          },
          {
            'id':4,
            'name':'Kimbowa Charles',
          },
        ]
      },
      {
        'id':7,
        'group_name':'BSE13-9',
        'title':'Milk market predictor',
        'supervisor':'Steven Odongo',
        'members':[
          {
            'id':1,
            'name':'SSEKATE TONNY SSEWANYANA'.toLowerCase(),
          },
          {
            'id':2,
            'name':'BOGERE HUDSON'.toLowerCase(),
          },
          {
            'id':3,
            'name':'NDUNGUTSE PAUL'.toLowerCase(),
          },
          {
            'id':4,
            'name':'TUMUHAIRWE DEUS'.toLowerCase(),
          },
        ]
      },
      {
        'id':8,
        'group_name':'BSE13-10',
        'title':'Firefox voice plugin',
        'supervisor':'Grace B. Kamulegeya',
        'members':[
          {
            'id':1,
            'name':'Orach John Kevin',
          },
          {
            'id':2,
            'name':'Kigozi Moses',
          },
          {
            'id':3,
            'name':'Batte Moses',
          },
          {
            'id':4,
            'name':'Kato Paul',
          },
        ]
      },
      {
        'id':9,
        'group_name':'BSE13-11',
        'title':'Car SMS Security System',
        'supervisor':'Joab Ezra Agaba',
        'members':[
          {
            'id':1,
            'name':'NABWIRE SANDRA REBECCA'.toLowerCase(),
          },
          {
            'id':2,
            'name':'SSEBBUGGA DAVID'.toLowerCase(),
          },
          {
            'id':3,
            'name':'EBUKALI DAVID'.toLowerCase(),
          },
          {
            'id':4,
            'name':'NAAYA ABRAHAM'.toLowerCase(),
          },
        ]
      },
      {
        'id':10,
        'group_name':'BSE13-12',
        'title':'Home automation and security system',
        'supervisor':'Joab Ezra Agaba',
        'members':[
          {
            'id':1,
            'name':'KASULE JOSHUA'.toLowerCase(),
          },
          {
            'id':2,
            'name':'KABOGGOZA STEPHEN'.toLowerCase(),
          },
          {
            'id':3,
            'name':'ATUHAIRE MERCY'.toLowerCase(),
          },
          {
            'id':4,
            'name':'NUWAMANYA ALEX'.toLowerCase(),
          },
        ]
      },
      {
        'id':11,
        'group_name':'BSE13-13',
        'title':'Crop disease surveillance system (CDSS)',
        'supervisor':'Rose Nakibuule',
        'members':[
          {
            'id':1,
            'name':'ARINAITWE ADAM'.toLowerCase(),
          },
          {
            'id':2,
            'name':'KAHANGA LENIN'.toLowerCase(),
          },
          {
            'id':3,
            'name':'WANYOTO DENIS'.toLowerCase(),
          },
          {
            'id':4,
            'name':'MUDDE ENOCK'.toLowerCase(),
          },
        ]
      },
      {
        'id':12,
        'group_name':'BSE13-14',
        'title':'Mobile phone language translator',
        'supervisor':'Joab Ezra Agaba',
        'members':[
          {
            'id':1,
            'name':'OKIDI DENISH'.toLowerCase(),
          },
          {
            'id':2,
            'name':'SSESANGA SHAFIK'.toLowerCase(),
          },
          {
            'id':3,
            'name':'SEGAWA CHRISTOPHER'.toLowerCase(),
          },
          {
            'id':4,
            'name':'OCHIENG JOHN BAPTIST'.toLowerCase(),
          },
        ]
      },
      {
        'id':13,
        'group_name':'BSE13-15',
        'title':'Vision mobile news App',
        'supervisor':'David Bamutura',
        'members':[
          {
            'id':1,
            'name':'Bazzekuketta Timothy',
          },
          {
            'id':2,
            'name':'Namazzi Lornalex Zaake',
          },
          {
            'id':3,
            'name':'Ntege Edward',
          },
          {
            'id':4,
            'name':'Muwanga Mohammed',
          },
        ]
      },
      {
        'id':14,
        'group_name':'BSE13-16',
        'title':'Regional disease outbreak indicator',
        'supervisor':'Joab Ezra Agaba',
        'members':[
          {
            'id':1,
            'name':'Viola Bazanye Namuganyi',
          },
          {
            'id':2,
            'name':'Moses Gasana',
          },
          {
            'id':3,
            'name':'Martha Lukabwe',
          },
          {
            'id':4,
            'name':'Morine Amutorine',
          },
        ]
      },
      {
        'id':15,
        'group_name':'BSE13-17',
        'title':'Troubleshooting by example application (TBEA)',
        'supervisor':'Joab Ezra Agaba',
        'members':[
          {
            'id':1,
            'name':'Kiplimo k Peter',
          },
          {
            'id':2,
            'name':'Wamanga Isaac',
          },
          {
            'id':3,
            'name':'Kabali Shafique',
          },
          {
            'id':4,
            'name':'Asia Rogers',
          },
        ]
      },
      {
        'id':16,
        'group_name':'BSE13-18',
        'title':'Mobile Traffic Monitoring System',
        'supervisor':'Rose Nakibuule',
        'members':[
          {
            'id':1,
            'name':'ASINGWIRE CUTHBERT'.toLowerCase(),
          },
          {
            'id':2,
            'name':'NANSAMBU ERNEST'.toLowerCase(),
          },
          {
            'id':3,
            'name':'SSEBANYIIGA FRANCIS'.toLowerCase(),
          },
          {
            'id':4,
            'name':'OPIO ISAAC RONALD'.toLowerCase(),
          },
        ]
      },
      {
        'id':17,
        'group_name':'BSE13-19',
        'title':'Trade and logistics management system for exporters and importers and freight forwarding companies',
        'supervisor':'Joab Ezra Agaba',
        'members':[
          {
            'id':1,
            'name':'Kawuma Patrick',
          },
          {
            'id':2,
            'name':'Mukasa Liz Mirembe',
          },
          {
            'id':3,
            'name':'Abaho Micheal',
          },
          {
            'id':4,
            'name':'Namugaanyi Emily',
          },
        ]
      },
      {
        'id':18,
        'group_name':'BSE13-20',
        'title':'Farmer-aid vending machine',
        'supervisor':'Nsabagwa Mary',
        'members':[
          {
            'id':1,
            'name':'Batte Derick',
          },
          {
            'id':2,
            'name':'Henry Tebajjukira',
          },
          {
            'id':3,
            'name':'Nanjekye Joannah',
          },
          {
            'id':4,
            'name':'Ronald Kasujja',
          },
        ]
      },
      {
        'id':19,
        'group_name':'BSE13-21',
        'title':'Automobile navigation System (to be rephrased)',
        'supervisor':'Joab Ezra Agaba',
        'members':[
          {
            'id':1,
            'name':'BYAMUKAMA TADEO'.toLowerCase(),
          },
          {
            'id':2,
            'name':'KALEEBI LINDAH REBECCA'.toLowerCase(),
          },
          {
            'id':3,
            'name':'WALUGEMBE EVEREST'.toLowerCase(),
          },
          {
            'id':4,
            'name':'NAKABANDA SAMALIE'.toLowerCase(),
          },
        ]
      },
      {
        'id':20,
        'group_name':'BSE13-22',
        'title':'Mobile Based medical services and Resource allocation tool: a case study of save African Children',
        'supervisor':'Steven Odongo',
        'members':[
          {
            'id':1,
            'name':'Kakande Joshwa',
          },
          {
            'id':2,
            'name':'Muwonge Andrew',
          },
          {
            'id':3,
            'name':'Byamukama Oscar',
          },
          {
            'id':4,
            'name':'ssuuna sadat',
          },
        ]
      },
      {
        'id':21,
        'group_name':'BSE13-23',
        'title':'Taxi Stage Location System',
        'supervisor':'Steven Odongo',
        'members':[
          {
            'id':1,
            'name':'NABATEESA MILLY'.toLowerCase(),
          },
          {
            'id':2,
            'name':'NAMWEBYA FARIDAH'.toLowerCase(),
          },
        ]
      },
      {
        'id':22,
        'group_name':'BSE14-1',
        'title':'Automatic Pest Control and Irrigation',
        'supervisor':'Odongo Steven Eyub',
        'members':[
          {
            'id':1,
            'name':'Kisitu Cornelius',
          }
        ]
      },
      {
        'id':23,
        'group_name':'BSE14-2',
        'title':'Boda Boda registration and tracking: (embedded with GPS)',
        'supervisor':'Agaba Joab Ezra',
        'members':[
          {
            'id':1,
            'name':'KAYONDO NASIIFU'.toLowerCase(),
          },
          {
            'id':2,
            'name':'MURUNGI CISSY'.toLowerCase(),
          },
          {
            'id':3,
            'name':'NAKACHWA HELLEN'.toLowerCase(),
          },
          {
            'id':4,
            'name':'SEMPA JONATHAN'.toLowerCase(),
          },
        ]
      },
      {
        'id':24,
        'group_name':'BSE14-3',
        'title':'navigation',
        'supervisor':'Doreen Tuheirwe',
        'members':[
          {
            'id':1,
            'name':'SEBUYEGE MARTIN'.toLowerCase(),
          },
          {
            'id':2,
            'name':'Kayemba Lawrence'.toLowerCase(),
          },
        ]
      },
      {
        'id':25,
        'group_name':'BSE14-4',
        'title':'Mobile-Energy Saving System (MESS)',
        'supervisor':'Drake Mirembe',
        'members':[
          {
            'id':1,
            'name':'SSGONJE ISMAIL'.toLowerCase(),
          },
          {
            'id':2,
            'name':'AGABA PETER'.toLowerCase(),
          },
          {
            'id':3,
            'name':'WAMPAMBA NOHO'.toLowerCase(),
          },
          {
            'id':4,
            'name':'WAMPAMBA NOHO'.toLowerCase(),
          },
        ]
      },
      {
        'id':26,
        'group_name':'BSE14-5',
        'title':'QualiHewa (Air pollution detection and measuring)',
        'supervisor':'Nsabagwa Mary',
        'members':[
          {
            'id':1,
            'name':'Karamagi Phillip',
          },
          {
            'id':2,
            'name':'Lubega Mark',
          },
          {
            'id':3,
            'name':'Karungi Emilly',
          },
          {
            'id':4,
            'name':'Sande Marcellinus',
          },
        ]
      },
      {
        'id':27,
        'group_name':'BSE14-6',
        'title':'RFID Security Access and Control System for Red Cross Uganda',
        'supervisor':'Nsabagwa Mary',
        'members':[
          {
            'id':1,
            'name':'kyagambiddwa sirajje',
          },
          {
            'id':2,
            'name':'kimuli samuel',
          },
          {
            'id':3,
            'name':'mugoya edrin',
          },
          {
            'id':4,
            'name':'muhumuza arthur',
          },
        ]
      },
      {
        'id':28,
        'group_name':'BSE14-7',
        'title':'Doberman Surveillance',
        'supervisor':'Doreen Tuheirwe',
        'members':[
          {
            'id':1,
            'name':'Kemigisha Florence',
          },
          {
            'id':2,
            'name':'Mukasa Samuel',
          },
          {
            'id':3,
            'name':'Semakula Kraiba',
          },
          {
            'id':4,
            'name':'Ziwa Ali',
          },
        ]
      },
      {
        'id':29,
        'group_name':'BSE14-8',
        'title':'MoBET',
        'supervisor':'Agaba Joab Ezra',
        'members':[
          {
            'id':1,
            'name':'thembo emmanuel',
          },
          {
            'id':2,
            'name':'mukama godson',
          },
          {
            'id':3,
            'name':'nshimye joseph',
          },
          {
            'id':4,
            'name':'tinyefuza gordon',
          },
        ]
      },
      {
        'id':30,
        'group_name':'BSE14-9',
        'title':'Clinical diagnosis and treatment decision system',
        'supervisor':'Grace B. Kamulegeya',
        'members':[
          {
            'id':1,
            'name':'TWEHAMYE SILUS'.toLowerCase(),
          },
          {
            'id':2,
            'name':'KANAMWANJI JULIUS'.toLowerCase(),
          },
          {
            'id':3,
            'name':'MUGABIRWE CATHBERT'.toLowerCase(),
          },
        ]
      },
      {
        'id':31,
        'group_name':'BSE14-10',
        'title':'MOS Data recovery software',
        'supervisor':'Agaba Joab Ezra',
        'members':[
          {
            'id':1,
            'name':'Ekalet Sam',
          },
          {
            'id':2,
            'name':'Malinga John Robert',
          },
          {
            'id':3,
            'name':'Rubahinya Oreb',
          },
          {
            'id':4,
            'name':'Simon Orupia',
          },
        ]
      },
    ]
  }

  /* Switch table size */
  _show(size){
    console.log(size);
    this.pageSize = size;
  }
  /* Search archived Projects */
  _searchArchivedProjects(term){
    console.log("Search Option");
    console.log(term)
  }
  /* Re-arrange in descending or ascending order */
  _sort(field){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = field;
    this.direction = this.isDesc ? 1 : -1;  
  }
  /* View details about a particular group */
  _viewGroup(id){
    let ID = parseInt(id) + 1;
    this.showDetails = 'details';
    this.homeBtn = 'details';
    this.api._setHomeValue('details');
    console.log(this.api._getHomeValue());
    this.archivedProjects.filter(item =>{
      if(item.id === ID){
        this.projectDetails = item;
        this.api._updateBreadcrumb(2,item.group_name,'')
        //console.log(this.api._getBreadcrumb());
      }
    });
  }
  /* Read the Group's selected documentation */
  _readDocument(doc){
    this.api._updateBreadcrumb(3,doc,'')
  }
}
