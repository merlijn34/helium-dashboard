import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHotspotsComponent } from './components/my-hotspots/my-hotspots.component';
import { DashboardModule } from './components/dashboard.module';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./components/dashboard.module').then(m => m.DashboardModule)
	},
	{
		path: '**',
		redirectTo: '',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
