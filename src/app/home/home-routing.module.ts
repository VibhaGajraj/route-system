import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRouteComponent } from './add-route/add-route.component';
import { HomeOutletComponent } from './home-outlet/home-outlet.component';
import { HomeComponent } from './home/home.component';
import { ViewOnMapsComponent } from './view-on-maps/view-on-maps.component';

const routes: Routes = [
  {
    path: '',
    component: HomeOutletComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        data: {
          headerData: [
            {
              name: 'Home',
              url: "/home"
            },
          ]
        }
      },
      {
        path: 'add-route',
        component: AddRouteComponent,
        data: {
          headerData: [
            {
              name: "Home",
              url: "/home",
            },
            {
              name: 'Add Route',
              url: "/home/add-route"
            },
          ],
          mode:"add"
        }
      },
      {
        path: 'edit-route',
        component: AddRouteComponent,
        data: {
          headerData: [
            {
              name: "Home",
              url: "/home",
            },
            {
              name: 'Edit Route',
              url: "/home/edit-route"
            },
          ],
          mode:"edit"
        }
      },
      {
        path: 'view-maps',
        component: ViewOnMapsComponent,
        data: {
          headerData: [
            {
              name: "Home",
              url: "/home",
            },
            {
              name: 'View Route',
              url: "/home/view-maps"
            },
          ],
          mode:"view"
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
