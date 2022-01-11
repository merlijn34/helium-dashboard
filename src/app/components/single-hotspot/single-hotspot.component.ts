import { Component, Input, OnInit } from '@angular/core';
import { Hotspot } from 'src/app/models/hotspot.model';

@Component({
  selector: 'app-my-hotspot',
  templateUrl: './single-hotspot.component.html',
  styleUrls: ['./single-hotspot.component.css']
})
export class SingleHotspotComponent implements OnInit {
  @Input() selectedHotspot?: Hotspot;

  constructor() { }

  ngOnInit(): void {
  }

}
