import { Component, OnInit } from '@angular/core';
import { Hotspot } from 'src/app/models/hotspot.model';
import { HotspotService } from 'src/app/service/hotspot.service';

@Component({
  selector: 'app-my-hotspots',
  templateUrl: './my-hotspots.component.html',
  styleUrls: ['./my-hotspots.component.css']
})
export class MyHotspotsComponent implements OnInit {

  constructor(private hotspotService:HotspotService) { }

  ngOnInit(): void {
  }

  hotspotList(): Hotspot[] {
	return this.hotspotService.getAllHotspots();
  }
}
