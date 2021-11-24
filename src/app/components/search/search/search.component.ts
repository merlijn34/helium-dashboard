import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hotspotName!: string;

  constructor() { }

  ngOnInit(): void {
  }

  
  addHotspot(hotspotName:string) {
    let cleanHotspotName = hotspotName.replace(/\s+/g, '-').toLowerCase(); //this cleans the whitespace and upper chars
    this.hotspotName = cleanHotspotName;
  }

}
