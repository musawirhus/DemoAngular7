import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { CategoriesService } from './northwind.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { GridComponent } from './grid/grid.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { ChartComponent } from './chart/chart.component';



enableProdMode();

@NgModule({
  imports: [ BrowserModule,
    BrowserAnimationsModule,
    GridModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationModule,
    LayoutModule,
    IndicatorsModule,
    InputsModule,
    IconsModule,
    ButtonsModule,
    ChartsModule
  ],
  declarations: [ AppComponent, DashboardComponent, GridComponent, ChartComponent ],
  providers: [ CategoriesService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }