import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameCardComponent } from './game-card/game-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MainRoutingModule } from './main/main-routing.module';
import { TableComponent } from './table/table.component';
import {AppRoutingModule} from './app-routing-module';
import { StartComponent } from './start/start.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaunchComponent } from './launch/launch.component';
import { CardBasicComponent } from './card-basic/card-basic.component';
import { MyDictComponent } from './my-dict/my-dict.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    SidenavComponent,
    TableComponent,
    StartComponent,
    DashboardComponent,
    LaunchComponent,
    CardBasicComponent,
    MyDictComponent,
    FormComponentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MainRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
