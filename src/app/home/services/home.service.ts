import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  tableRowData: any;
  formData: any;
  tableData:any =  [
    {
      name:"Route1",
      direction:"up",
      rId:"R101",
      status:"inactive",
      actions:[
        {
          name:"edit",
          icon:"assets/images/edit.svg"
        },
        {
          name:"delete",
          icon:"assets/images/delete-red.svg"
        },
        {
          name:"map",
          icon:"assets/images/map.png"
        },
      ],
      stops:[
        {
          id:"1",
          name:"Amber Fort Jaipur",
          latitude:26.996471,
          longitude:75.8513
    
        },
        {
          id:"2",
          name:"Albert hall mesumem, Jaipur",
          latitude:26.9118,
          longitude:75.8196
        },
        {
          id:"3",
          name:"Word trad park, Jaipur",
          latitude:26.8530,
          longitude:75.8047
        },
        {
          id:"4",
          name:"Sanganer Thana, Jaipur",
          latitude:26.8195,
          longitude:75.7970
        }
    
      ]
    },
    // {
    //   name:"107",
    //   direction:"up",
    //   rId:"A101",
    //   status:"inactive",
    //   actions:[
    //     {
    //       name:"edit",
    //       icon:"assets/images/edit.svg"
    //     },
    //     {
    //       name:"delete",
    //       icon:"assets/images/delete-red.svg"
    //     },
    //     {
    //       name:"map",
    //       icon:"assets/images/map.png"
    //     },
    //   ],
    //   stops:[
    //     {
    //       id:"1",
    //       name:"Amber Fort Jaipur",
    //       latitude:26.996471,
    //       longitude:75.8513
    
    //     },
    //     {
    //       id:"2",
    //       name:"Albert hall mesumem, Jaipur",
    //       latitude:26.9118,
    //       longitude:75.8196
    //     },
    //     {
    //       id:"3",
    //       name:"Word trad park, Jaipur",
    //       latitude:26.8530,
    //       longitude:75.8047
    //     },
    //     {
    //       id:"4",
    //       name:"Sanganer Thana, Jaipur",
    //       latitude:26.8195,
    //       longitude:75.7970
    //     }
    
    //   ]
    // },
    // {
    //   name:"107",
    //   direction:"down",
    //   rId:"A101",
    //   status:"active",
    //   actions:[
    //     {
    //       name:"edit",
    //       icon:"assets/images/edit.svg"
    //     },
    //     {
    //       name:"delete",
    //       icon:"assets/images/delete-red.svg"
    //     },
    //     {
    //       name:"map",
    //       icon:"assets/images/map.png"
    //     },
    //   ],
    //   stops:[
    //     {
    //       id:"1",
    //       name:"Amber Fort Jaipur",
    //       latitude:26.996471,
    //       longitude:75.8513
    
    //     },
    //     {
    //       id:"2",
    //       name:"Albert hall mesumem, Jaipur",
    //       latitude:26.9118,
    //       longitude:75.8196
    //     },
    //     {
    //       id:"3",
    //       name:"Word trad park, Jaipur",
    //       latitude:26.8530,
    //       longitude:75.8047
    //     },
    //     {
    //       id:"4",
    //       name:"Sanganer Thana, Jaipur",
    //       latitude:26.8195,
    //       longitude:75.7970
    //     }
    
    //   ]
    // }
  ]

  index: any;

  constructor() { }

  setRouteRow(data:any){
    console.log(data);

    this.tableRowData = data;
  }

  getRouteData(){
    console.log(this.tableRowData);
    return this.tableRowData;
  }

  saveFormData(data:any=[]){
    localStorage.clear();
    let n = this.tableData?.length
    let isIdExist=false;
    data.actions = [
      {
        name:"edit",
        icon:"assets/images/edit.svg"
      },
      {
        name:"delete",
        icon:"assets/images/delete-red.svg"
      },
      {
        name:"map",
        icon:"assets/images/map.png"
      },
    ]

    for(let i=0;i<n;i++){
      if(data.rId === this.tableData[i].rId){
        isIdExist = true;
        this.index = i;
        break;
      }
      else{
        isIdExist = false;
      }
    }

    if(!isIdExist){
      if(this.tableData?.length)
      this.tableData.push(data);
    }else{
      this.tableData[this.index] = data;
    }

    localStorage.setItem('data', JSON.stringify(this.tableData));
  }

  getFormData(){
    return this.tableData;
  }

  setLocallyStoredData(data:any){
    this.tableData = JSON.parse(data);
  }
}
