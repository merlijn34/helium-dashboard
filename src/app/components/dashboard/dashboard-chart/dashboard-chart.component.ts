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
	rewardsArray!:number[];


	constructor(private rewardsService:RewardService) { }

	ngOnInit(): void {
		this.myChart = new Chart("myChart", {
			type: 'line',
			data: {
				labels: ['', '', '', '', '', '', ''], // make this variable and equal to ammount of days
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
						beginAtZero: true,
					},
					x:{
						max:24
					}
				},
				elements: {
                    point:{
                        radius: 0
                    }
                }
			}
		});
		this.weekChart();
	}


	//TODO: do this API call only once and save the value's to reduce API requests and avoid 429 timeout
	
	/**
	 * TODO take Hotspot as variable 
	 */
	 dayChart(){ 
		this.rewardsService.getHotspotRewardsCustom('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8','', '-1%20day','hour').subscribe(data => {
			console.log('day per day',data);
			
			//create a new rewardsArray
			this.rewardsArray = new Array();

			//get all the 24 values and push them to the dataset
			for (var i = 0; i < 24; i++) {
				//add all the rewards
				this.rewardsArray.push(Object.values(data)[1][i]['total']);
				//update chart dataset
				this.myChart.data.datasets[0].data[i] = this.rewardsArray[i];
			}
			
			//set hotspot name
			this.myChart.data.datasets[0].label = 'hotspotname'; //TODO make this variable
			//set horizontal axis TODO: find better way to set this size
			this.myChart.data.labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', ''];
			
			//update all the chart data
			this.myChart.update();
		})

	}

	/**
	 * TODO take Hotspot as variable 
	 */
	weekChart(){ 
		this.rewardsService.getHotspotRewardsCustom('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8','', '-7%20day','day').subscribe(data => {
			console.log('7 day rewards per day',data);

			//create a new rewardsArray
			this.rewardsArray = new Array();

			//get all the 24 values and push them to the dataset
			for (var i = 0; i < 6; i++) {
				//add all the rewards
				this.rewardsArray.push(Object.values(data)[1][i]['total']);
				//update chart dataset
				this.myChart.data.datasets[0].data[i] = this.rewardsArray[i];
			}
			
			//set hotspot name
			this.myChart.data.datasets[0].label = 'hotspotname'; //TODO make this variable
			//set horizontal axis TODO: find better way to set this size
			this.myChart.data.labels = ['', '', '', '', '', '', ''];
			
		
			this.myChart.update();
		})

	}


	/**
	 * TODO take Hotspot as variable 
	 */
	 monthChart(){ 
		this.rewardsService.getHotspotRewardsCustom('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8','', '-30%20day','day').subscribe(data => {
			console.log('30 day rewards per day',data);

			//create a new rewardsArray
			this.rewardsArray = new Array();

			//get all the 24 values and push them to the dataset
			for (var i = 0; i < 29; i++) {
				//add all the rewards
				this.rewardsArray.push(Object.values(data)[1][i]['total']);
				//update chart dataset
				this.myChart.data.datasets[0].data[i] = this.rewardsArray[i];
			}
			
			//set hotspot name
			this.myChart.data.datasets[0].label = 'hotspotname'; //TODO make this variable
			//set horizontal axis TODO: find better way to set this size
			this.myChart.data.labels = ['', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', ''];
			
			this.myChart.update();
		})

	}


}
