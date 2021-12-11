import { Component, OnInit } from '@angular/core';
import { Hotspot } from 'src/app/models/hotspot.model';
import { HeliumService } from 'src/app/service/helium.service';
import { HotspotService } from 'src/app/service/hotspot.service';
import { RewardService } from 'src/app/service/reward.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hotspotName!: string;
  hotspotData!: any;
  hotspot!: Hotspot;

  constructor(private heliumService:HeliumService, private hotspotService:HotspotService, private rewardService:RewardService) { }

  ngOnInit(): void {}
  
  /**
   * get the value from the input field and covert it
   * @param hotspotName 
   */
  addHotspot(hotspotName:string) {
	let cleanHotspotName = hotspotName.replace(/\s+/g, '-').toLowerCase(); //this cleans the whitespace and upper chars
	this.hotspotName = cleanHotspotName;

	//call the service and get hotspot data by name
	let data = this.heliumService.getHotspotByName(cleanHotspotName);
	
	//create hotspot
	let hotspot = new Hotspot();

	//get hotspot data and write values to new Hotspot
	//TODO: Improve this code
	data.subscribe(data => {
		console.log(data);
		hotspot.address = Object.values(data)[0][0]['address'];
		hotspot.long_city = Object.values(data)[0][0]['geocode']['long_city'];
		hotspot.long_country = Object.values(data)[0][0]['geocode']['long_country'];
		hotspot.name = Object.values(data)[0][0]['name'];
		hotspot.owner = Object.values(data)[0][0]['owner'];
		hotspot.reward_scale = Object.values(data)[0][0]['reward_scale'];
		hotspot.online = Object.values(data)[0][0]['status']['online'];
		hotspot.hotspotHeight = Object.values(data)[0][0]['status']['height'];
		hotspot.blockchainHeight = Object.values(data)[0][0]['block'];
		hotspot.block_added = Object.values(data)[0][0]['block_added'];
		hotspot.elevation = Object.values(data)[0][0]['block_elevation'];
		hotspot.gain = Object.values(data)[0][0]['gain'];
		hotspot.last_change_block = Object.values(data)[0][0]['last_change_block'];
		hotspot.last_poc_challenge = Object.values(data)[0][0]['last_poc_challenge'];
		hotspot.lat = Object.values(data)[0][0]['lat'];
		hotspot.lng = Object.values(data)[0][0]['lng'];
		hotspot.location = Object.values(data)[0][0]['location'];
		hotspot.location_hex = Object.values(data)[0][0]['location_hex'];
		hotspot.mode = Object.values(data)[0][0]['mode'];
		hotspot.nonce = Object.values(data)[0][0]['nonce'];
		hotspot.payer = Object.values(data)[0][0]['payer'];
		hotspot.listen_addrs = Object.values(data)[0][0]['status']['listen_addrs'];
		hotspot.timestamp_added = Object.values(data)[0][0]['timestamp_added'];
		hotspot.sync = this.hotspotService.getSyncStatus(hotspot);
		hotspot.gap = hotspot.hotspotHeight - hotspot.blockchainHeight;

		//get rewards per hotspot
		this.rewardService.getHotspotRewardsCustom(hotspot.address,'', '-1%20day','').subscribe(data => {
			let dayTotal = Math.round((Object.values(data)[1]['total'] + Number.EPSILON) * 100) / 100;
			hotspot.rewardsDay = dayTotal;
		})

		this.rewardService.getHotspotRewardsCustom(hotspot.address,'', '-7%20day','').subscribe(data => {
			let weekTotal = Math.round((Object.values(data)[1]['total'] + Number.EPSILON) * 100) / 100;
			hotspot.rewardsWeek = weekTotal;
		})

		this.rewardService.getHotspotRewardsCustom(hotspot.address,'', '-30%20day','').subscribe(data => {
			let monthTotal = Math.round((Object.values(data)[1]['total'] + Number.EPSILON) * 100) / 100;
			hotspot.rewardsMonth = monthTotal;
		})


		console.log('hotspot',hotspot)
		//add hotspot to the list of hotspots
		this.hotspotService.addHotspot(hotspot);
	});		

  }

}
