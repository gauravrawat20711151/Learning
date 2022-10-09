import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacebookRoutingModule } from './facebook-routing.module';
import { FacebookComponent } from './facebook.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { LogingPageComponent } from './loging-page/loging-page.component';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    FacebookComponent,
    LogingPageComponent
  ],
  imports: [
    CommonModule,
    FacebookRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatIconModule
    
  ]
})
export class FacebookModule { }
