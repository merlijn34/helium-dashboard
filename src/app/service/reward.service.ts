import { Injectable } from '@angular/core';
import { Hotspot } from '../models/hotspot.model';
import { HeliumService } from './helium.service';

@Injectable({
  providedIn: 'root'
})
export class RewardService {

  constructor(private heliumService:HeliumService) { }


  //getRewardsForWeekByDay(hotspot: Hotspot) {
  getRewardsForWeekByDay(hotspotAddress: string) {
	// let hotspotAddress = hotspot.address;
	let timestamp = '?min_time=-7%20day&bucket=day';

	//get the data from the heliumService
	let data = this.heliumService.getRewardsByHotspot(hotspotAddress, timestamp);

	console.log(data);
	return data;

  }




}
