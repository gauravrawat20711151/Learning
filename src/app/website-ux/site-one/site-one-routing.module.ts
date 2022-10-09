import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SiteOneComponent } from './site-one.component';

const routes: Routes = [{ path: '', component: SiteOneComponent, children: [
  {path: 'header',component: HeaderComponent},
  {path: 'footer',component: FooterComponent},
  {path: 'home',component: HomeComponent},
  {path: 'about',component: AboutComponent}
  
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteOneRoutingModule { }
