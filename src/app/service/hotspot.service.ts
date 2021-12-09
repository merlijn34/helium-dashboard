import { Injectable } from '@angular/core';
import { Hotspot } from '../models/hotspot.model';
import { HeliumService } from './helium.service';

@Injectable({
	providedIn: 'root'
})
export class HotspotService {
	public hotspots: Hotspot[] = [];

	constructor(private heliumService: HeliumService) { }

	/**
	 * TODO handle ux response when bad hotspot name
	 * @param hotspot the hotspot given
	 */
	addHotspot(hotspot: Hotspot) {
		if (!this.listContainsHotspot(hotspot, this.hotspots)){
			this.hotspots.push(hotspot);
		}
	}

	/**
	 * check if the hotspot is in the list of hotspots
	 * @param obj the hotspot given
	 * @param list the list of hotspots
	 * @returns boolean
	 */
	listContainsHotspot(obj:Hotspot, list:any) {
		var i;
		for (i = 0; i < list.length; i++) {
			if (list[i].name === obj.name) {
				return true;
			}
		}
		return false;
	}


	getAllHotspots() {
		return this.hotspots;
	}

	/**
	 * this function checks if the hotspot is in sync with the blockchain
	 * @param hotspot
	 * @returns status of sync in true or false
	 */
	getSyncStatus(hotspot: Hotspot) {
		let hotspotBlock = hotspot.height;
		let blockchainBlock;
		
		this.heliumService.getBlockchainHeight().subscribe(data => {
			blockchainBlock = Object.values(data)[0]['height'];
		});

		if (hotspotBlock === blockchainBlock){
			return true;
		}else {
			return false;
		}
	}

}
