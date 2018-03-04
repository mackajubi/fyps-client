import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'fiyps-all-student-groups',
  templateUrl: './all-student-groups.component.html',
  styleUrls: ['./all-student-groups.component.css']
})
export class AllStudentGroupsComponent implements OnInit {
   userType: string = null;
   groups: any[] = null;
   confirmDeleteForm;
   identifier: string = null;

   groupsForm;
   isDesc: boolean;
   column: string;
   direction: number;
   pageSize: number;
   page: number;
   total: number;
   show: string = null;
   supervisorData: any[];
  constructor(private api: ApiService) {
    this.userType = this.api._getUserType();
   }

  ngOnInit() {

    this._fetch();

    if(this.groups){
      this.isDesc = false;
      this.column = 'group_name';
      this.page = 1;
      this.pageSize = 10;
      this.direction = -1;
      this.total = this.groups.length;      
    }   

    this.groupsForm = new FormGroup({
      search: new FormControl(""),
      size: new FormControl("10")
    });    
    
    this.confirmDeleteForm = new FormGroup({
      yes: new FormControl("yes",Validators.compose([
        Validators.required
      ])),
      no: new FormControl("no",Validators.compose([
        Validators.required
      ])),
    });    

  }

  /* Fetch data */
  _fetch(){
    this.groups = [
      {
        'id':1,
        'group_name':'BSE17-2',
        'period':'2017',
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
        'group_name':'BSE17-3',
        'period':'2017',
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
        'group_name':'BSE17-4',
        'period':'2017',
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
        'group_name':'BSE17-6',
        'period':'2017',
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
        'group_name':'BSE17-7',
        'period':'2017',
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
        'group_name':'BSE17-8',
        'period':'2017',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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
        'period':'2018',
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

  _show(size){
    console.log(size);
    this.pageSize = size;
  }
  
  edit(id){
    this.identifier = id;
    console.log("Edit this group: " + this.identifier)
  }
  
  showPopup(id){
    this.identifier = id;
    console.log("Show the popup for confirmation: " + this.identifier);
  }

  /* Remove the selected file */
  _yes(){
    console.log("Delete the selected id"+ this.identifier);
    //empty the deleteSelectedFile variable
  }

  _no(){
    this.identifier = null;
    console.log("don't Delete the selected id" + this.identifier);
    //empty the deleteSelectedFile variable
  }  

}
