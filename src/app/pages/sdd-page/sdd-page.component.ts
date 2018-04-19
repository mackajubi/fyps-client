import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'fiyps-sdd-page',
  templateUrl: './sdd-page.component.html',
  styleUrls: ['./sdd-page.component.css']
})
export class SddPageComponent implements OnInit {
   userType: string = null;
   projects: any[];
   selectedFileId: string = null;
   groupDetails:any[] = null;
   refreshUploadsTableFiles: number = 0;

  constructor( private api: ApiService ) {
    this.userType = this.api._getUserType();
  }

  ngOnInit() {
    $(".page-content").addClass("fit-content");

    this._fetch();

  }

  /* Fetch data */
  _fetch(){
    this.projects = [
      {
        'id':1,
        'group_name':'BSE18-2',
        'title':'MUK guide',
        'supervisor':'David Bamutura',
        'supervisor_img':'user6.jpg',
        'department':'Department of Networks',
        'submissionTime':'01/10/17 12:00',
        'file':'SRS',
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
      },
      {
        'id':2,
        'group_name':'BSE18-3',
        'title':'customer ordering and billing system',
        'supervisor':'Nsabagwa Mary',
        'submissionTime':'02/10/17 12:00',
        'file':'SRS',
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
        'group_name':'BSE18-4',
        'title':'Electronic Tollbooth monitoring system: A case study of KCCA',
        'supervisor':'Mary Nsabagwa',
        'submissionTime':'02/10/17 02:00',
        'file':'SRS',
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
        'group_name':'BSE18-6',
        'title':'A centralized solid waste managements system: a case study of NOREMA Services Limited',
        'supervisor':'Mary Nsabagwa',
        'submissionTime':'02/10/17 05:00',
        'file':'SRS',
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
        'group_name':'BSE18-7',
        'title':'Awesome SMS Gateway System',
        'supervisor':'Grace B. Kamulegeya',
        'submissionTime':'02/10/17 05:00',
        'file':'SRS',
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
        'group_name':'BSE18-8',
        'title':'An embedded system for a smart poultry farm',
        'supervisor':'Joab Ezra Agaba',
        'submissionTime':'02/10/17 05:00',
        'file':'SRS',
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
        'group_name':'BSE18-9',
        'title':'Milk market predictor',
        'supervisor':'Steven Odongo',
        'submissionTime':'02/10/17 05:00',
        'file':'SRS',
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
        'group_name':'BSE18-10',
        'title':'Firefox voice plugin',
        'supervisor':'Grace B. Kamulegeya',
        'submissionTime':'02/10/17 03:00',
        'file':'SRS',
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
        'group_name':'BSE18-11',
        'title':'Car SMS Security System',
        'supervisor':'Joab Ezra Agaba',
        'submissionTime':'02/10/17 09:00',
        'file':'SRS',
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
        'group_name':'BSE18-12',
        'title':'Home automation and security system',
        'supervisor':'Joab Ezra Agaba',
        'submissionTime':'02/10/17 09:30',
        'file':'SRS',
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
        'group_name':'BSE18-13',
        'title':'Crop disease surveillance system (CDSS)',
        'supervisor':'Rose Nakibuule',
        'submissionTime':'02/10/17 09:30',
        'file':'SRS',
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
        'group_name':'BSE18-14',
        'title':'Mobile phone language translator',
        'supervisor':'Joab Ezra Agaba',
        'submissionTime':'03/10/17 10:30',
        'file':'SRS',
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
        'group_name':'BSE18-15',
        'title':'Vision mobile news App',
        'supervisor':'David Bamutura',
        'submissionTime':'03/10/17 11:30',
        'file':'SRS',
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
        'group_name':'BSE18-16',
        'title':'Regional disease outbreak indicator',
        'supervisor':'Joab Ezra Agaba',
        'submissionTime':'03/10/17 11:35',
        'file':'SRS',
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
        'group_name':'BSE18-17',
        'title':'Troubleshooting by example application (TBEA)',
        'supervisor':'Joab Ezra Agaba',
        'submissionTime':'03/10/17 11:37',
        'file':'SRS',
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
        'group_name':'BSE18-18',
        'title':'Mobile Traffic Monitoring System',
        'supervisor':'Rose Nakibuule',
        'submissionTime':'03/10/17 11:38',
        'file':'SRS',
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
        'group_name':'BSE18-19',
        'title':'Trade and logistics management system for exporters and importers and freight forwarding companies',
        'supervisor':'Joab Ezra Agaba',
        'submissionTime':'03/10/17 11:39',
        'file':'SRS',
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
        'group_name':'BSE18-20',
        'title':'Farmer-aid vending machine',
        'supervisor':'Nsabagwa Mary',
        'submissionTime':'03/10/17 11:40',
        'file':'SRS',
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
        'group_name':'BSE18-21',
        'title':'Automobile navigation System (to be rephrased)',
        'supervisor':'Joab Ezra Agaba',
        'submissionTime':'03/10/17 11:41',
        'file':'SRS',
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
        'group_name':'BSE18-22',
        'title':'Mobile Based medical services and Resource allocation tool: a case study of save African Children',
        'supervisor':'Steven Odongo',
        'submissionTime':'03/10/17 11:42',
        'file':'SRS',
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
        'group_name':'BSE18-23',
        'title':'Taxi Stage Location System',
        'supervisor':'Steven Odongo',
        'submissionTime':'03/10/17 11:43',
        'file':'SRS',
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
        'group_name':'BSE18-24',
        'title':'Automatic Pest Control and Irrigation',
        'supervisor':'Odongo Steven Eyub',
        'submissionTime':'03/10/17 11:44',
        'file':'SRS',
        'members':[
          {
            'id':1,
            'name':'Kisitu Cornelius',
          }
        ]
      },
      {
        'id':23,
        'group_name':'BSE18-25',
        'title':'Boda Boda registration and tracking: (embedded with GPS)',
        'supervisor':'Agaba Joab Ezra',
        'submissionTime':'03/10/17 11:45',
        'file':'SRS',
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
        'group_name':'BSE18-26',
        'title':'navigation',
        'supervisor':'Doreen Tuheirwe',
        'submissionTime':'03/10/17 11:48',
        'file':'SRS',
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
        'group_name':'BSE18-27',
        'title':'Mobile-Energy Saving System (MESS)',
        'supervisor':'Drake Mirembe',
        'submissionTime':'03/10/17 12:48',
        'file':'SRS',
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
        'group_name':'BSE18-28',
        'title':'QualiHewa (Air pollution detection and measuring)',
        'supervisor':'Nsabagwa Mary',
        'submissionTime':'03/10/17 12:08',
        'file':'SRS',
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
        'group_name':'BSE18-29',
        'title':'RFID Security Access and Control System for Red Cross Uganda',
        'supervisor':'Nsabagwa Mary',
        'submissionTime':'03/10/17 12:15',
        'file':'SRS',
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
        'group_name':'BSE18-30',
        'title':'Doberman Surveillance',
        'supervisor':'Doreen Tuheirwe',
        'submissionTime':'03/10/17 12:12',
        'file':'SRS',
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
        'group_name':'BSE18-31',
        'title':'MoBET',
        'supervisor':'Agaba Joab Ezra',
        'submissionTime':'03/10/17 12:15',
        'file':'SRS',
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
        'group_name':'BSE18-32',
        'title':'Clinical diagnosis and treatment decision system',
        'supervisor':'Grace B. Kamulegeya',
        'submissionTime':'03/10/17 12:16',
        'file':'SRS',
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
        'group_name':'BSE18-33',
        'title':'MOS Data recovery software',
        'supervisor':'Agaba Joab Ezra',
        'submissionTime':'03/10/17 12:20',
        'file':'SRS',
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

  _viewGroup(id){
    console.log("Group id: " + id);
  }

  /* Chat with the group */
  _chat(id){
    console.log("Chat id recieved: " + id)
  }
  
  /* Chat with the group */
  _history(id){
    console.log("chat history id: " + id)
  }
  /* Handle selected file */
  onSelectedFile(id){
    this.selectedFileId = id
  }
   
  /* Recieve the details for the group you have selected */
  receiveSelectedGroup(event){
    this.groupDetails = event['groupname'];
  }

  refreshFilesTable(event){
    console.log("There is need to update the uploads filee table");
    /* We've made it a number so that angular can detect the increment and effect a GET Request */
    this.refreshUploadsTableFiles++;
  }

}
