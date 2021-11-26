import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ErrorServiceService } from './service/error-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule
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
