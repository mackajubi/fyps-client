import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'fiyps-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeComponent implements OnInit {
  private searchForm;
  private progress: any[];

  constructor() { }

  ngOnInit() {
    this._fetch();
  }

  /* Fetch data */
  _fetch(){
    this.progress = [
      {
        'id':1,
        'group':'Bse18-1',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':2,
        'group':'Bse18-2',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':true,
            'doc':'SRS',
            'date':'1/10/17 10:50'
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':3,
        'group':'Bse18-3',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':4,
        'group':'Bse18-4',
        'status':[
          {
            'id':1,
            'flag':false,
            'doc':'concept Paper',
            'date':''
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':5,
        'group':'Bse18-5',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':6,
        'group':'Bse18-6',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':true,
            'doc':'SRS',
            'date':'23/10/17 10:50'
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':7,
        'group':'Bse18-7',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 14:00'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':8,
        'group':'Bse18-8',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':9,
        'group':'Bse18-9',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':true,
            'doc':'SRS',
            'date':'1/10/17 10:50'
          },
          {
            'id':3,
            'flag':true,
            'doc':'report',
            'date':'24/10/17 12:50'
          },
        ]
      },
      {
        'id':10,
        'group':'Bse18-10',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':11,
        'group':'Bse18-11',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':12,
        'group':'Bse18-12',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':13,
        'group':'Bse18-13',
        'status':[
          {
            'id':1,
            'flag':false,
            'doc':'concept Paper',
            'date':''
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':14,
        'group':'Bse18-14',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':15,
        'group':'Bse18-15',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':true,
            'doc':'SRS',
            'date':'23/10/17 04:50'
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':16,
        'group':'Bse18-16',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':17,
        'group':'Bse18-17',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':18,
        'group':'Bse18-18',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':true,
            'doc':'SRS',
            'date':'30/10/17 15:50'
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':19,
        'group':'Bse18-19',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':20,
        'group':'Bse18-20',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':21,
        'group':'Bse18-21',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':22,
        'group':'Bse18-22',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':true,
            'doc':'SRS',
            'date':'26/10/17 18:50'
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':23,
        'group':'Bse18-23',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':24,
        'group':'Bse18-24',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':25,
        'group':'Bse18-25',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':26,
        'group':'Bse18-26',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':27,
        'group':'Bse18-27',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':28,
        'group':'Bse18-28',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':true,
            'doc':'SRS',
            'date':'27/10/17 11:05'
          },
          {
            'id':3,
            'flag':true,
            'doc':'report',
            'date':'05/12/17 07:00'
          },
        ]
      },
      {
        'id':29,
        'group':'Bse18-29',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':true,
            'doc':'SRS',
            'date':'20/10/17 01:20'
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':30,
        'group':'Bse18-30',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':31,
        'group':'Bse18-31',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':32,
        'group':'Bse18-32',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':33,
        'group':'Bse18-33',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':34,
        'group':'Bse18-34',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':35,
        'group':'Bse18-35',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':false,
            'doc':'SRS',
            'date':''
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
      {
        'id':36,
        'group':'Bse18-36',
        'status':[
          {
            'id':1,
            'flag':true,
            'doc':'concept Paper',
            'date':'1/10/17 10:50'
          },
          {
            'id':2,
            'flag':true,
            'doc':'SRS',
            'date':'19/10/17 19:45'
          },
          {
            'id':3,
            'flag':false,
            'doc':'report',
            'date':''
          },
        ]
      },
    ]
  }

}
