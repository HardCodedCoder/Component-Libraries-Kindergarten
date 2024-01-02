import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RegisterChildComponent} from "./register-child/register-child.component";
import {KindergardensComponent} from "./kindergardens/kindergardens.component";

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'kindergardens', component: KindergardensComponent },
  { path: 'register-child', component: RegisterChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
