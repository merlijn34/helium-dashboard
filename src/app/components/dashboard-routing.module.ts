import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyHotspotsComponent } from './my-hotspots/my-hotspots.component';
import { SearchComponent } from './search/search.component';
import { WrapperComponent } from './wrapper/wrapper.component';

const routes: Routes = [
	{
		path: '',
		component: WrapperComponent,
		children: [
			{
				path: 'search',
				component: SearchComponent
			},
			{ 
				path: 'my-hotspots',
				component: MyHotspotsComponent	
			}
		]
	},
	{
		path: '**',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
