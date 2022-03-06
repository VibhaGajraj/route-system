import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TableListComponent } from './table-list/table-list.component';
import { AddRouteComponent } from './add-route/add-route.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HomeOutletComponent } from './home-outlet/home-outlet.component';
import { ViewOnMapsComponent } from './view-on-maps/view-on-maps.component';
import { AgmCoreModule } from '@agm/core'; 
import * as fromPipes from './pipes';


@NgModule({
    declarations: [ 
      ...fromPipes.pipes,
      TableListComponent, AddRouteComponent, HomeComponent, HomeOutletComponent, ViewOnMapsComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,   
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey:"AIzaSyA5V0_ultz_MYYoc8txjTn3RoTItv9sZRQ",
      libraries: ['places', 'drawing', 'geometry'],
    })
  ]
})
export class HomeModule { }
