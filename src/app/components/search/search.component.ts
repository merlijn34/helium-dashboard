import { Component, OnInit } from '@angular/core';
import { Hotspot } from 'src/app/models/hotspot.model';
import { HeliumService } from 'src/app/service/helium.service';
import { HotspotService } from 'src/app/service/hotspot.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hotspotName!: string;
  hotspotData!: any;
  hotspot!: Hotspot;

  constructor(private heliumService:HeliumService, private hotspotService:HotspotService) { }

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
		let address = Object.values(data)[0][0]['address'];
		let long_city = Object.values(data)[0][0]['geocode']['long_city'];
		let long_country = Object.values(data)[0][0]['geocode']['long_country'];
		let name = Object.values(data)[0][0]['name'];
		let owner = Object.values(data)[0][0]['owner'];
		let reward_scale = Object.values(data)[0][0]['reward_scale'];
		let online = Object.values(data)[0][0]['status']['online'];
		let rewards = Object.values(data)[0][0]['address'];
		let block = Object.values(data)[0][0]['block'];
		let block_added = Object.values(data)[0][0]['block_added'];
		let elevation = Object.values(data)[0][0]['block_elevation'];
		let gain = Object.values(data)[0][0]['gain'];
		let last_change_block = Object.values(data)[0][0]['last_change_block'];
		let last_poc_challenge = Object.values(data)[0][0]['last_poc_challenge'];
		let lat = Object.values(data)[0][0]['lat'];
		let lng = Object.values(data)[0][0]['lng'];
		let location = Object.values(data)[0][0]['location'];
		let location_hex = Object.values(data)[0][0]['location_hex'];
		let mode = Object.values(data)[0][0]['mode'];
		let nonce = Object.values(data)[0][0]['nonce'];
		let payer = Object.values(data)[0][0]['payer'];
		let listen_addrs = Object.values(data)[0][0]['status']['listen_addrs'];
		let timestamp_added = Object.values(data)[0][0]['timestamp_added'];
		
		hotspot.address = address;
		hotspot.long_city = long_city;
		hotspot.long_country = long_country;
		hotspot.name = name;
		hotspot.owner = owner;
		hotspot.reward_scale = reward_scale;
		hotspot.online = online;
		hotspot.rewards = rewards;
		hotspot.block = block;
		hotspot.block_added = block_added;
		hotspot.elevation = elevation;
		hotspot.gain = gain;
		hotspot.last_change_block = last_change_block;
		hotspot.last_poc_challenge = last_poc_challenge;
		hotspot.lat = lat;
		hotspot.lng = lng;
		hotspot.location = location;
		hotspot.location_hex = location_hex;
		hotspot.mode = mode;
		hotspot.nonce = nonce;
		hotspot.payer = payer;
		hotspot.listen_addrs = listen_addrs;
		hotspot.timestamp_added = timestamp_added;
		hotspot.block = block;
		hotspot.sync = this.hotspotService.getSyncStatus(hotspot);


		//add hotspot to the list of hotspots
		this.hotspotService.addHotspot(hotspot);
	});		

  }

}
