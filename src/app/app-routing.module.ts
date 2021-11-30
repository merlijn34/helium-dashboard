import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MyHotspotsComponent } from './components/my-hotspots/my-hotspots.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'my-hotspots', component: MyHotspotsComponent},
  { path: 'hotspot',
    component: MyHotspotsComponent,
    children: [
      {path: ':name', component: MyHotspotsComponent} //change for childeren of hotspot
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
