import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SiteService} from './site.service'
import { AppComponent } from './app.component';
import { SitesComponent } from './sites/sites.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { AgmCoreModule } from '@agm/core';
import { DxDataGridModule,DxFormModule,DxButtonModule } from 'devextreme-angular';
import { AppRoutingModule } from './/app-routing.module';
import { MapComponent } from './map/map.component';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from './login core/material.module';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login core/auth.service';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { UserService } from './login core/user.service';
import { TokenStorage } from './login core/token.storage';
import { Interceptor } from './login core/Interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SitesComponent,
    SiteDetailComponent,
    MapComponent,
    UserComponent,
    LoginComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8vIGQ8lNmNwBlR6lgpM5dNWpWhaBFL4g'
    }),
    DxDataGridModule,
    DxFormModule,
    AppRoutingModule,
    DxButtonModule,
  ],
  providers: [SiteService,AuthService,ErrorDialogComponent, UserService, AuthService, TokenStorage, TokenStorage,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
