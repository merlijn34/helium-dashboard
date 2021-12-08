import { Component, OnInit } from '@angular/core';
import { Hotspot } from 'src/app/models/hotspot.model';
import { HotspotService } from 'src/app/service/hotspot.service';
import { RewardService } from 'src/app/service/reward.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  weekTotal:number = 0;

  constructor(private hotspotService:HotspotService, private rewardsService:RewardService) { }

  ngOnInit(): void {

    this.rewardsService.getAccountRewardsCustom('14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL','', '-7%20day','').subscribe(data => {
      console.log('account',data);

      this.weekTotal = Math.round(Object.values(data)[1]['total']);
    })

  }

  hotspotList(): Hotspot[] {
	return this.hotspotService.getAllHotspots();
  }

  
}
