import { Injectable } from '@angular/core';
import { Hotspot } from '../models/hotspot.model';

@Injectable({
  providedIn: 'root'
})
export class HotspotService {
	public hotspots: Hotspot[] = [];

  constructor() { }

  addHotspot(hotspot:Hotspot){
	  this.hotspots.push(hotspot);
  }

  getAllHotspots(){
	  return this.hotspots;
  }
}
