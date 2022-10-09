import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteOneRoutingModule } from './site-one-routing.module';
import { SiteOneComponent } from './site-one.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {  MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    SiteOneComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent
    
  ],
  imports: [
    CommonModule,
    SiteOneRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
   

  ]
})
export class SiteOneModule { }
