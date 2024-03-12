import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {path:'',redirectTo:'list', pathMatch:'full'},
  {path:'list',component:TaskListComponent},
  {path:'details/:Id',component:TaskDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
