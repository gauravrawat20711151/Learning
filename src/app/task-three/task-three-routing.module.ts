import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditFriendComponent } from './edit-friend/edit-friend.component';
import { EditStudentComponent } from './edit-student/edit-student.component';

import { TaskThreeComponent } from './task-three.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [{ path: '', component: TaskThreeComponent,children: [
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: 'addFriend', component: AddFriendComponent},
  {path: 'viewemployee', component: ViewemployeeComponent},
  {path: 'viewStudent',component: ViewStudentComponent},
  {path: 'viewFriend',component: ViewFriendComponent},
  {path: 'editEmployee', component: EditEmployeeComponent},
  {path: 'editStudent',component: EditStudentComponent},
  {path: 'editFriend',component: EditFriendComponent}

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskThreeRoutingModule { }
