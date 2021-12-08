import { Injectable } from '@angular/core';
import { Hotspot } from '../models/hotspot.model';
import { HeliumService } from './helium.service';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  constructor(private heliumService:HeliumService) { }

//	TO get the cursor:::	let nextData = Object.values(data)[6]['cursor']; //todo find a better way to do this

  getHotspotRewardsForWeekByDay(hotspotAddress: string) {
	let timestamp = 'max_time=2021-12-09&min_time=2021-12-08&bucket=hour';
	//get the data from the heliumService
	let data = this.heliumService.getTotalRewardsByHotspot(hotspotAddress, timestamp);
	// console.log('data ', data);
	return data;
  }



  /**
   * this gets the total rewards per hotspot per given timeframe
   * @param hotspotAddress 
   * @param timeFrame this is ISO 8601 (e.g. 2020-08-27T00:00:00Z) or in relative time (e.g. -1 week, which when url esacped becomes -1%20week)
   * @param bucket this can be: hour, day, week
   */
	getHotspotRewardsCustom(hotspotAddress: string, maxTime: string, minTime: string, bucket: string) {

		let timeFrame = 'max_time=' + maxTime + '&min_time=' + minTime;
		let timestamp = timeFrame + '&bucket=' + bucket;
	
		let data = this.heliumService.getTotalRewardsByHotspot(hotspotAddress, timestamp);

		return data;
	}

	/**
   * this gets the total rewards per hotspot per given timeframe
   * @param hotspotAddress 
   * @param timeFrame this is ISO 8601 (e.g. 2020-08-27T00:00:00Z) or in relative time (e.g. -1 week, which when url esacped becomes -1%20week)
   * @param bucket this can be: hour, day, week
   */
	 getAccountRewardsCustom(hotspotAddress: string, maxTime: string, minTime: string, bucket: string) {
		let timeFrame = 'max_time=' + maxTime + '&min_time=' + minTime;
		let timestamp = timeFrame + '&bucket=' + bucket;
	
		let data = this.heliumService.getRewardTotalForAccount(hotspotAddress, timestamp);

		return data;
	}

}
