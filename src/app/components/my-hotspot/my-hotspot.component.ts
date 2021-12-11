import { Component, Input, OnInit } from '@angular/core';
import { Hotspot } from 'src/app/models/hotspot.model';

@Component({
  selector: 'app-my-hotspot',
  templateUrl: './my-hotspot.component.html',
  styleUrls: ['./my-hotspot.component.css']
})
export class MyHotspotComponent implements OnInit {
  @Input() selectedHotspot?: Hotspot;

  constructor() { }

  ngOnInit(): void {
  }

}
