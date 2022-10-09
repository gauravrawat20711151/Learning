import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { TaskOneRoutingModule } from './task-one-routing.module';
import { TaskOneComponent } from './task-one.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    TaskOneComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    TaskOneRoutingModule,
    MatTableModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatIconModule

  ]
})
export class TaskOneModule { }
