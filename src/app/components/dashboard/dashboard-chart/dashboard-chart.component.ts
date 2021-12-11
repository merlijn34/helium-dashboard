import { Component, OnInit } from '@angular/core';
import { RewardService } from 'src/app/service/reward.service';
import {
	Chart,
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip
} from 'node_modules/chart.js';
import { Hotspot } from 'src/app/models/hotspot.model';

Chart.register(
	ArcElement,
	LineElement,
	BarElement,
	PointElement,
	BarController,
	BubbleController,
	DoughnutController,
	LineController,
	PieController,
	PolarAreaController,
	RadarController,
	ScatterController,
	CategoryScale,
	LinearScale,
	LogarithmicScale,
	RadialLinearScale,
	TimeScale,
	TimeSeriesScale,
	Decimation,
	Filler,
	Legend,
	Title,
	Tooltip
);

@Component({
	selector: 'app-dashboard-chart',
	templateUrl: './dashboard-chart.component.html',
	styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {
	myChart!:any;

	constructor(private rewardsService:RewardService) { }

	ngOnInit(): void {
		this.myChart = new Chart("myChart", {
			type: 'line',
			data: {
				labels: ['', '', '', '', '', '', '',], // make this variable and equal to ammount of days
					datasets: [
					  {
						label: 'miner 1', //todo set to this.selectedHotspot
						data: [],
						borderColor: 'rgb(75, 192, 192)',
						tension: 0.3

					  }
					//   ,
					//   {
					// 	label: 'miner 2',
					// 	data: [1, 9, 3, 5, 7, 5],
					// 	borderColor: 'rgb(75, 19, 12)',
					//   }
					]
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
		this.weekChart();
	}

	
	/**
	 * TODO take Hotspot as variable 
	 */
	weekChart(){ 
		this.rewardsService.getHotspotRewardsCustom('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8','', '-7%20day','day').subscribe(data => {
			console.log('7 day rewards per day',data);

			let day0 = Object.values(data)[1][0]['total'];
			let day1 = Object.values(data)[1][1]['total'];
			let day2 = Object.values(data)[1][2]['total'];
			let day3 = Object.values(data)[1][3]['total'];
			let day4 = Object.values(data)[1][4]['total'];
			let day5 = Object.values(data)[1][5]['total'];
			let day6 = Object.values(data)[1][6]['total'];
			
			//set hotspot name
			this.myChart.data.datasets[0].label = 'hotspotname'; //TODO make this variable

			//update rewards
			this.myChart.data.datasets[0].data[0] = day0;
			this.myChart.data.datasets[0].data[1] = day1;
			this.myChart.data.datasets[0].data[2] = day2;
			this.myChart.data.datasets[0].data[3] = day3;
			this.myChart.data.datasets[0].data[4] = day4;
			this.myChart.data.datasets[0].data[5] = day5;
			this.myChart.data.datasets[0].data[6] = day6;
			this.myChart.update();
		})

	}


}
