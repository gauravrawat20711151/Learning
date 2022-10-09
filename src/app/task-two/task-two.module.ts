import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { TaskTwoRoutingModule } from './task-two-routing.module';
import { TaskTwoComponent } from './task-two.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { AddStudentComponent } from './add-student/add-student.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { AddingemployeeComponent } from './addingemployee/addingemployee.component';
import { AddingStudentComponent } from './adding-student/adding-student.component';
import { AddingFriendComponent } from './adding-friend/adding-friend.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EditingEmployeeComponent } from './editing-employee/editing-employee.component';






@NgModule({
  declarations: [
    TaskTwoComponent,
    AddFriendComponent,
    AddStudentComponent,
    AddEmpComponent,
    AddingemployeeComponent,
    AddingStudentComponent,
    AddingFriendComponent,
    EditingEmployeeComponent
],
  imports: [
    CommonModule,
    TaskTwoRoutingModule,
    MatButtonToggleModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule
  ]
})
export class TaskTwoModule { }
