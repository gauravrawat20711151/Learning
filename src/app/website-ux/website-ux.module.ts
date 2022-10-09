import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteUxRoutingModule } from './website-ux-routing.module';
import { WebsiteUxComponent } from './website-ux.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    WebsiteUxComponent,
  
  ],
  imports: [
    CommonModule,
    WebsiteUxRoutingModule,
    MatIconModule
  ]
})
export class WebsiteUxModule { }
