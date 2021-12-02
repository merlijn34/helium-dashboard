import { Component } from '@angular/core';
import { Hotspot } from './models/hotspot.model';
import { HeliumService } from './service/helium.service';
import { RewardService } from './service/reward.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helium';

  goldData:any;

  constructor(private heliumService:HeliumService, private rewardsService:RewardService){}

  //to load the data on pageload
  ngOnInit(): void {
	// this.heliumService.getHotspotByName('tangy-blood-lion').subscribe(data => {
	// 	this.goldData = data;
	// }); 

	this.rewardsService.getRewardsForWeekByDay('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8').subscribe(data => {
		console.log(data)

		let nextData = data['body'];
		// let x = nextData Object.values(data)['cursor'];
		// console.log(x)
	});


  }

}
