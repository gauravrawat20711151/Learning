import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteUxComponent } from './website-ux.component';

const routes: Routes = [
  { path: '', component: WebsiteUxComponent },
  { path: 'facebook', loadChildren: () => import('./facebook/facebook.module').then(m => m.FacebookModule) },
  { path: 'siteOne', loadChildren: () => import('./site-one/site-one.module').then(m => m.SiteOneModule) },
  { path: 'formArray', loadChildren: () => import('./form-array/form-array.module').then(m => m.FormArrayModule) },
    // how to set default part
  
    {path: '**', redirectTo: 'formArray', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteUxRoutingModule { }
