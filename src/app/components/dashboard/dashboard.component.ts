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

  dayTotal!:number;
  weekTotal!:number;
  monthTotal!:number;
  total!:number;


  constructor(private hotspotService:HotspotService, private rewardsService:RewardService) { }

  ngOnInit(): void {

    this.rewardsService.getAccountRewardsCustom('14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL','', '-1%20day','').subscribe(data => {
      // console.log('24Hour',data);
      this.dayTotal = Math.round((Object.values(data)[1]['total'] + Number.EPSILON) * 100) / 100;
      // this.account = data
    })

    this.rewardsService.getAccountRewardsCustom('14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL','', '-7%20day','').subscribe(data => {
      // console.log('7 day rewards',data);
      this.weekTotal = Math.round((Object.values(data)[1]['total'] + Number.EPSILON) * 100) / 100;
    })

    this.rewardsService.getAccountRewardsCustom('14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL','', '-30%20day','').subscribe(data => {
      // console.log('30 day rewards',data);
      this.monthTotal = Math.round((Object.values(data)[1]['total'] + Number.EPSILON) * 100) / 100;
      // this.account = data
    })

    this.rewardsService.getAccountRewardsCustom('14drLjW9EfZ2E5zXwURaaZHnXxWcimmLPCjZdLSfzcxz7NXqkiL','', '','').subscribe(data => {
      // console.log('account total',data);
      this.total = Math.round((Object.values(data)[1]['total'] + Number.EPSILON) * 100) / 100;
      // this.account = data
    })

  }

  hotspotList(): Hotspot[] {
	return this.hotspotService.getAllHotspots();
  }

  
}
