import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SitesComponent } from './sites/sites.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import  {MapComponent } from './map/map.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
const appRoutes: Routes = [
  {
    path: 'sites',
    component: SitesComponent,
    data: { title: 'Sites List' }
  },
  { path: 'user', component: UserComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'site-detail/:siteId',
    component: SiteDetailComponent,
    data: { title: 'Site Details' }
  },
  {
    path: 'map',
    component: MapComponent,
    data: { title: 'La carte' }
  },
  
  { path: '',
    redirectTo: '/sites',
    pathMatch: 'full'
  }


];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
