import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskThreeRoutingModule } from './task-three-routing.module';
import { TaskThreeComponent } from './task-three.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { EditFriendComponent } from './edit-friend/edit-friend.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    TaskThreeComponent,
    AddEmployeeComponent,
    AddStudentComponent,
    AddFriendComponent,
    ViewemployeeComponent,
    ViewStudentComponent,
    ViewFriendComponent,
    EditEmployeeComponent,
    EditStudentComponent,
    EditFriendComponent
  ],
  imports: [
    CommonModule,
    TaskThreeRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MaterialModule

  ]
})
export class TaskThreeModule { }
