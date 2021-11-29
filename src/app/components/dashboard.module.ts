import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    WrapperComponent
  ],
  imports: [
    CommonModule,
	DashboardRoutingModule,

	//NG Material Module
	MatSidenavModule,
	MatIconModule,
	MatListModule,
	MatToolbarModule
  ]
})
export class DashboardModule { 
}