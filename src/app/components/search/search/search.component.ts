import { Component, OnInit } from '@angular/core';
import { HeliumService } from 'src/app/service/helium.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hotspotName!: string;
  hotspotData!: any;

  constructor(private helium:HeliumService) { }

  ngOnInit(): void {
  }

  
  addHotspot(hotspotName:string) {
    let cleanHotspotName = hotspotName.replace(/\s+/g, '-').toLowerCase(); //this cleans the whitespace and upper chars
    this.hotspotName = cleanHotspotName;

    let data = this.helium.getHotspotByName(cleanHotspotName);

	data.subscribe(data => {
		this.hotspotData = data;
	}); 

  }

}
