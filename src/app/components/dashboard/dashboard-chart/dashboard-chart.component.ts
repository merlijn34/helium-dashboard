import { Component, OnInit } from '@angular/core';
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

	constructor() { }

	ngOnInit(): void {
		const myChart = new Chart("myChart", {
			type: 'line',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
					datasets: [
					  {
						label: 'miner 1',
						data: [12, 19, 3, 5, 2, 3],
						borderColor: 'rgb(75, 192, 192)',
					  },
					  {
						label: 'miner 2',
						data: [1, 9, 3, 5, 7, 5],
						borderColor: 'rgb(75, 19, 12)',
					  }
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
	}


}
