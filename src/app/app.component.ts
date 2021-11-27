import { Component } from '@angular/core';
import { HeliumService } from './service/helium.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helium';

  goldData:any;

  constructor(private heliumService:HeliumService){}

  //to load the data on pageload
  ngOnInit(): void {
	this.heliumService.getHotspotByName('tangy-blood-lion').subscribe(data => {
		this.goldData = data;
	}); 
  }

}
