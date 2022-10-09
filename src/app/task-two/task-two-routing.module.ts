import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from '../task-one/edit-employee/edit-employee.component';
import { AddEmpComponent } from './add-emp/add-emp.component';

import { AddFriendComponent } from './add-friend/add-friend.component';
import {AddStudentComponent} from './add-student/add-student.component'
import { AddingFriendComponent } from './adding-friend/adding-friend.component';
import { AddingStudentComponent } from './adding-student/adding-student.component';
import { AddingemployeeComponent } from './addingemployee/addingemployee.component';
import { TaskTwoComponent } from './task-two.component';

const routes: Routes = [
  { path: '', component: TaskTwoComponent, children: [
    {path: 'addEmp', component: AddEmpComponent,},
    {path: 'addStudent', component: AddStudentComponent},
    {path: 'addFriend', component: AddFriendComponent},
    {path: 'addingemployee', component: AddingemployeeComponent},
    {path: 'addingStudent', component: AddingStudentComponent},
    {path: 'addingFriend', component: AddingFriendComponent},
    {path: 'editingEmployee',component: EditEmployeeComponent},
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskTwoRoutingModule { }
