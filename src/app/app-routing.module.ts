import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRouteComponent } from './home/add-route/add-route.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then(
            m => m.HomeModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
