import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyHotspotsComponent } from './components/my-hotspots/my-hotspots.component';
import { SearchComponent } from './components/search/search.component';
import { SingleHotspotComponent } from './components/single-hotspot/single-hotspot.component'

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'search', component: SearchComponent},
  { path: 'my-hotspots', component: MyHotspotsComponent,
    children: [
      {path: ':name', component: SingleHotspotComponent} //change for childeren of hotspot
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
