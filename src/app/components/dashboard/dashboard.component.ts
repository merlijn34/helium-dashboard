import { Component, OnInit } from '@angular/core';
import { Hotspot } from 'src/app/models/hotspot.model';
import { HotspotService } from 'src/app/service/hotspot.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private hotspotService:HotspotService) { }

  ngOnInit(): void {}

  hotspotList(): Hotspot[] {
	return this.hotspotService.getAllHotspots();
  }

  
}
