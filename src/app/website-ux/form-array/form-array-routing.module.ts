import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormArrayComponent } from './form-array.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [{ path: '', component: FormArrayComponent, children:[
  
  {path:'form',component: FormComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormArrayRoutingModule { }
