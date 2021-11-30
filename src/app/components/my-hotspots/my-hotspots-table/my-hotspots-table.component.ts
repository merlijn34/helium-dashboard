import { Component, OnInit } from '@angular/core';
import { Hotspot } from 'src/app/models/hotspot.model';
import { HotspotService } from 'src/app/service/hotspot.service';

@Component({
  selector: 'app-my-hotspots-table',
  templateUrl: './my-hotspots-table.component.html',
  styleUrls: ['./my-hotspots-table.component.css']
})
export class MyHotspotsTableComponent implements OnInit {

  constructor(private hotspotService:HotspotService) { }

  ngOnInit(): void {
  }

  hotspotList(): Hotspot[] {
    return this.hotspotService.getAllHotspots();
    }

}
