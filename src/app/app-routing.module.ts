import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'taskOne', 
    loadChildren: () => import('./task-one/task-one.module').then(m => m.TaskOneModule) 
  },
  { path: 'websiteUx', loadChildren: () => import('./website-ux/website-ux.module').then(m => m.WebsiteUxModule) },
  { path: 'taskTwo', loadChildren: () => import('./task-two/task-two.module').then(m => m.TaskTwoModule) },
  { path: 'taskThree', loadChildren: () => import('./task-three/task-three.module').then(m => m.TaskThreeModule) },
  { path: 'demoTest', loadChildren: () => import('./demo-test/demo-test.module').then(m => m.DemoTestModule) },
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },

   // how to set default part
  
   {path: '**', redirectTo: 'form', pathMatch: 'full'},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
