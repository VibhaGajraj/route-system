import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tableData: any;
  // tableData:any =  [
  //   {
  //     name:"Route1",
  //     direction:"up",
  //     rId:"R101",
  //     status:"inactive",
  //     actions:[
  //       {
  //         name:"edit",
  //         icon:"assets/images/edit.svg"
  //       },
  //       {
  //         name:"delete",
  //         icon:"assets/images/delete-red.svg"
  //       },
  //       {
  //         name:"map",
  //         icon:"assets/images/delete-red.svg"
  //       },
  //     ]
  //   },
  //   {
  //     name:"107",
  //     direction:"up",
  //     rId:"A101",
  //     status:"inactive",
  //     actions:[
  //       {
  //         name:"edit",
  //         icon:"assets/images/edit.svg"
  //       },
  //       {
  //         name:"delete",
  //         icon:"assets/images/delete-red.svg"
  //       },
  //       {
  //         name:"map",
  //         icon:"assets/images/delete-red.svg"
  //       },
  //     ]
  //   },
  //   {
  //     name:"107",
  //     direction:"down",
  //     rId:"A101",
  //     status:"active",
  //     actions:[
  //       {
  //         name:"edit",
  //         icon:"assets/images/edit.svg"
  //       },
  //       {
  //         name:"delete",
  //         icon:"assets/images/delete-red.svg"
  //       },
  //       {
  //         name:"map",
  //         icon:"assets/images/delete-red.svg"
  //       },
  //     ]
  //   }
  // ]
  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private homeService: HomeService,


  ) { }

  ngOnInit(): void {

  }
  
  routeList(){
    this.tableData = this.homeService.getFormData();
  }

  actionPerformed(data:any){
   console.log(data);
   if(data.name === 'edit'){
    this.editAddedRoute();
   }
   else if(data.name === 'map'){
    this.showRouteMap();
   }
  }

  editAddedRoute(){
  this.router.navigate(['/home/edit-route']);
  }
  showRouteMap(){
  this.router.navigate(['/home/view-maps']);
  }

  addTask(){
  this.router.navigate(['/home/add-route']);
  }
}
