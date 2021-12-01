import { Injectable } from '@angular/core';
import { Hotspot } from '../models/hotspot.model';
import { HeliumService } from './helium.service';

@Injectable({
	providedIn: 'root'
})
export class HotspotService {
	public hotspots: Hotspot[] = [];

	constructor(private heliumService: HeliumService) { }

	addHotspot(hotspot: Hotspot) {
		this.hotspots.push(hotspot);
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
