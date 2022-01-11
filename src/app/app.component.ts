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

  dataItem:any;

  constructor(private heliumService:HeliumService, private rewardsService:RewardService){}

  //to load the data on pageload
  ngOnInit(): void {
	// this.heliumService.getHotspotByName('tangy-blood-lion').subscribe(data => {
	// 	this.goldData = data;
	// }); 

	// this.rewardsService.getRewardsForWeekByDay('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8').subscribe(data => {
	// 	// console.log(data)
	// 	// let nextData = Object.values(data)[6]['cursor']; //todo find a better way to do this
		
	// 	// this.dataItem = nextData;

	// 	// console.log('cursor:', nextData);
	// });


	// this.rewardsService.getHotspotRewardsForWeekByDay('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8').subscribe(data => {
	// 	console.log('hotspot',data);

	// })

	//by hospot
	this.rewardsService.getHotspotRewardsCustom('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8','', '-7%20day','day').subscribe(data => {
		// console.log('30 day rewards per day',data);

	})

	//rewards per account
	// this.rewardsService.getAccountRewardsCustom('14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL','', '-7%20day','day').subscribe(data => {
	// 	console.log('account',data);

	// })


	// this.heliumService.getRewardsByHotspotCursor('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8', '?min_time=-7%20day&bucket=day', 'eyJiZWZvcmUiOjQzOTIwMX0').subscribe(data => {
	// 	// let x = data['body'];
	// 	console.log('Next cursor:', data);
	// });


  }

}
