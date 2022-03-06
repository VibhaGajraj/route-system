import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.scss']
})
export class AddRouteComponent implements OnInit {
  routeForm: FormGroup;
  isEditing: boolean;
  constructor( 
    private formBuilder: FormBuilder, 
    private router: Router,
    private activatedroute: ActivatedRoute,
    private homeService: HomeService,

    ) { }
  saveClicked = false;
  eventEmitterSubscription: Subscription;
  isEditForm = false;
  editFormData: any;
  stopsList:any=[
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

  stops:any = [];
  newSection:any;
  showAllowedSectionDropDown = false;

  ngOnInit(): void {
    this.initialiazeProgramForm();
    this.getRoutes();
  }

  initialiazeProgramForm() {
    this.routeForm = this.formBuilder.group({
      name: ["", Validators.required],
      direction: ["up", Validators.required],
      rId: ["", Validators.required],
      status: ["active", Validators.required],
      stops:[[], Validators.required]
    });
  }

  save(){
    this.saveClicked =true;
   
    this.routeForm.controls['stops'].setValue(this.stops);
    if(this.routeForm.valid){
      this.homeService.saveFormData(this.routeForm.value);
      this.router.navigate(['/home']);
    }
  }

  cancel(){
    this.router.navigate(['/home'])
  }

  getRoutes() {
    this.activatedroute.data.subscribe((data) => {
      if (data && data['mode'] && data['mode'] == "edit") {
        this.isEditing = true;
        this.editFormData = this.homeService.getRouteData();
        this.autoFillForm();
      } else {
        this.isEditing = false;
      }
    });
  }

  autoFillForm(){
    this.routeForm.patchValue({
      name: this.editFormData.name ? this.editFormData.name : "",
      direction: this.editFormData.direction ? this.editFormData.direction : "",
      rId: this.editFormData.rId ? this.editFormData.rId : "",
      status: this.editFormData.status ? this.editFormData.status : "",
      stops: this.editFormData.stops ?  this.editFormData.stops : [],
    })
    if (this.editFormData.stops.length > 0) {
      this.stops = this.editFormData.stops;
      this.stopsList = this.editFormData.stops.filter(
        (val:any) => !this.stopsList.includes(val)
      );
    } else {
      this.stops = [];
    }
  }


  deletePlanId(index:any) {
    this.stopsList.splice(index, 1);
  }

  moveToAllowedStop(index:any, item:any) {
    this.stops.push(item);
    const originalIndex = this.stopsList.indexOf(item);
    this.deletePlanId(originalIndex);
  }

  moveToListOfSection(index:any) {
    this.stopsList.push(this.stops[index]);
    this.stops.splice(index, 1);
  }

  toggleAllowedSectionDropDown($event:any) {
    this.showAllowedSectionDropDown = !this.showAllowedSectionDropDown;
  }
  
}
