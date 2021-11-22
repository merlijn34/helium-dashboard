import { Component } from '@angular/core';
import { HeliumService } from './service/helium.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helium';

  goldData:any;

  constructor(private helium:HeliumService){}

  //to load the data on pageload
  ngOnInit(): void {
    this.helium.getRewardTotalForAccount().subscribe((data) => {
      console.log('full data: ', data);
      this.goldData = data;
    }); 
  }

}
