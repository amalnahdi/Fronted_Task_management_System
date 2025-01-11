import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';

import { ViewComponent } from './view/view.component';

import { CreateComponent } from './create/create.component';

import { EditComponent } from './edit/edit.component';

  

const routes: Routes = [

  { path: 'task', redirectTo: 'task/index', pathMatch: 'full'},

  { path: 'task/index', component: IndexComponent },

  { path: 'task/:task/view', component: ViewComponent },

  { path: 'task/create', component: CreateComponent },

  { path: 'task/:task/edit', component: EditComponent } 

];

  

@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class TaskRoutingModule { }