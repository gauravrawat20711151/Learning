import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { DemoTestComponent } from './demo-test.component';

const routes: Routes = [{ path: '', component: DemoTestComponent,children:[
  {path: 'child',component: ChildComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoTestRoutingModule { }
