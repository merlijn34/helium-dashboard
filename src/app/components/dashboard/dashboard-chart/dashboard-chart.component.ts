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
	dayRewardsArray!:number[];
	weekRewardsArray!:number[];
	monthRewardsArray!:number[];


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
						beginAtZero: true,

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


	//TODO check height of y axis after switching month/day
	
	/**
	 * TODO take Hotspot as variable 
	 */
	 dayChart(){ 
		//check if the data has been fetched if not do so
		if (this.dayRewardsArray === undefined || this.dayRewardsArray.length == 0) {
			this.rewardsService.getHotspotRewardsCustom('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8','', '-1%20day','hour').subscribe(data => {
				console.log('day per day',data);
				//create a new rewardsArray
				this.dayRewardsArray = new Array();
				
				//get all the 24 values and push them to the dataset
				for (var i = 0; i < 24; i++) {
					//add all the rewards
					this.dayRewardsArray.push(Object.values(data)[1][i]['total']);
					//update chart dataset
					this.myChart.data.datasets[0].data[i] = this.dayRewardsArray[i];
				}
				
				//set hotspot name
				this.myChart.data.datasets[0].label = 'hotspotname'; //TODO make this variable
				//set horizontal axis TODO: find better way to set this size
				this.myChart.data.labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', ''];
				
				//update all the chart data
				this.myChart.update();
			});
		}
		else{
			//get all the 24 values and push them to the dataset
			for (var i = 0; i < 24; i++) {
				//update chart dataset
				this.myChart.data.datasets[0].data[i] = this.dayRewardsArray[i];
			}
			this.myChart.data.labels = ['', '', '', '', '', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', ''];

			//update all the chart data
			this.myChart.update();

		}
	

	}

	/**
	 * TODO take Hotspot as variable 
	 */
	weekChart(){ 
		if (this.weekRewardsArray === undefined || this.weekRewardsArray.length == 0) {

			this.rewardsService.getHotspotRewardsCustom('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8','', '-7%20day','day').subscribe(data => {
				console.log('7 day rewards per day',data);

				//create a new rewardsArray
				this.weekRewardsArray = new Array();

				//get all the 24 values and push them to the dataset
				for (var i = 0; i < 6; i++) {
					//add all the rewards
					this.weekRewardsArray.push(Object.values(data)[1][i]['total']);
					//update chart dataset
					this.myChart.data.datasets[0].data[i] = this.weekRewardsArray[i];
				}
				
				//set hotspot name
				this.myChart.data.datasets[0].label = 'hotspotname'; //TODO make this variable
				//set horizontal axis TODO: find better way to set this size
				this.myChart.data.labels = ['', '', '', '', '', '', ''];
				
			
				this.myChart.update();
			})
		}else{
			//get all the 24 values and push them to the dataset
			//get all the 24 values and push them to the dataset
			for (var i = 0; i < 6; i++) {
				//update chart dataset
				this.myChart.data.datasets[0].data[i] = this.weekRewardsArray[i];
			}
			this.myChart.data.labels = ['', '', '', '', '', '', ''];

			//update all the chart data
			this.myChart.update();

		}

	}


	/**
	 * TODO take Hotspot as variable 
	 */
	 monthChart(){ 
		if (this.monthRewardsArray === undefined || this.monthRewardsArray.length == 0) {
			this.rewardsService.getHotspotRewardsCustom('111NTvsxm6epvvXVwYENtAyhagti39PCFTTWBJgGCng48keCs8','', '-30%20day','day').subscribe(data => {
				console.log('30 day rewards per day',data);

				//create a new rewardsArray
				this.monthRewardsArray = new Array();

				//get all the 24 values and push them to the dataset
				for (var i = 0; i < 29; i++) {
					//add all the rewards
					this.monthRewardsArray.push(Object.values(data)[1][i]['total']);
					//update chart dataset
					this.myChart.data.datasets[0].data[i] = this.monthRewardsArray[i];
				}
				
				//set hotspot name
				this.myChart.data.datasets[0].label = 'hotspotname'; //TODO make this variable
				//set horizontal axis TODO: find better way to set this size
				this.myChart.data.labels = ['', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', ''];
				
				this.myChart.update();
			})
		}else{
			//get all the 24 values and push them to the dataset
			for (var i = 0; i < 6; i++) {
				//update chart dataset
				this.myChart.data.datasets[0].data[i] = this.monthRewardsArray[i];
			}
			this.myChart.data.labels = ['', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '', '', '', '',];

			//update all the chart data
			this.myChart.update();
		}

	}


}
