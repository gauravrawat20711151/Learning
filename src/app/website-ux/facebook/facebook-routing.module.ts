import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './facebook.component';

const routes: Routes = [
  { path: '', component: FacebookComponent },
  // how to set default part
  // {path: '**', redirectTo: 'facebook', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookRoutingModule { }
