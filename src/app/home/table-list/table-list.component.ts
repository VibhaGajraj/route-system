import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  constructor(
    private homeSevice: HomeService
  ) { }
  @Output() actionPerformed: EventEmitter<any> = new EventEmitter();

  tableData:any;
  
  ngOnInit(): void {
    this.tableData = this.homeSevice.getFormData();
  }

  actionClicked(data:any,index:any){
    console.log(this.tableData, this.tableData[index]);
   this.actionPerformed.emit(data);
   if(data.name === 'delete'){
     delete this.tableData[index];
     let data:any = localStorage.getItem('data');
     let data1= JSON.parse(data);
     delete data1[index];
     localStorage.setItem('data', JSON.stringify(data1));
    //  this.homeSevice.setLocallyStoredData(JSON.stringify(data1));
   }
   this.homeSevice.setRouteRow(this.tableData[index]);
  }

}
