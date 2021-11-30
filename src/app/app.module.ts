import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ErrorServiceService } from './service/error-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { MyHotspotsComponent } from './components/my-hotspots/my-hotspots.component';
import { NavComponent } from './components/nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyHotspotsTableComponent } from './components/my-hotspots/my-hotspots-table/my-hotspots-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    MyHotspotsComponent,
    NavComponent,
    MyHotspotsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorServiceService,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
