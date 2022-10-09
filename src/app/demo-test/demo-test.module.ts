import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTestRoutingModule } from './demo-test-routing.module';
import { DemoTestComponent } from './demo-test.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    DemoTestComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    DemoTestRoutingModule
  ]
})
export class DemoTestModule { }
